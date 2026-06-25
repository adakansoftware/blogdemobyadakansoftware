'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { adminPaths } from '@/lib/routes'
import { articles, authors, categories, formatDate } from '@/lib/data'
import { deleteDraft, getDrafts, type DraftArticle } from '@/lib/admin-store'

type TabKey = 'drafts' | 'published'

export default function AdminArticlesPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('drafts')
  const [drafts, setDrafts] = useState<DraftArticle[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setDrafts(getDrafts())
  }, [])

  const recentArticles = useMemo(() => articles.slice(0, 10), [])

  const filteredDrafts = drafts.filter((draft) =>
    activeTab === 'drafts' ? draft.status === 'draft' : draft.status === 'published',
  )
  const draftTabCount = drafts.filter((draft) => draft.status === 'draft').length
  const publishedTabCount =
    drafts.filter((draft) => draft.status === 'published').length + recentArticles.length

  const visibleDrafts = search.trim()
    ? filteredDrafts.filter((draft) =>
        draft.title.toLowerCase().includes(search.toLowerCase()),
      )
    : filteredDrafts

  const showDraftRows = visibleDrafts.length > 0

  return (
    <>
      <div className="border-b border-border px-8 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-heading text-3xl font-semibold">Makaleler</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Taslakları yönet ve demo içerikleri gözden geçir
            </p>
          </div>
          <Link
            href={adminPaths.newArticle}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Yeni Makale
          </Link>
        </div>
      </div>

      <div className="px-8 py-6">
        <div className="mb-4">
          <input
            type="search"
            placeholder="Başlığa göre ara..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full max-w-xs rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-accent"
          />
        </div>

        <div className="mb-4 flex gap-2">
          <button
            type="button"
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              activeTab === 'drafts'
                ? 'border-accent bg-accent text-accent-foreground'
                : 'border-border text-muted-foreground hover:border-accent hover:text-accent'
            }`}
            onClick={() => setActiveTab('drafts')}
          >
            Taslaklar {draftTabCount > 0 ? `(${draftTabCount})` : ''}
          </button>
          <button
            type="button"
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              activeTab === 'published'
                ? 'border-accent bg-accent text-accent-foreground'
                : 'border-border text-muted-foreground hover:border-accent hover:text-accent'
            }`}
            onClick={() => setActiveTab('published')}
          >
            Yayındakiler ({publishedTabCount})
          </button>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="py-3 pl-4 text-left font-medium">Başlık</th>
                  <th className="py-3 text-left font-medium">Kategori</th>
                  <th className="py-3 text-left font-medium">Yazar</th>
                  <th className="py-3 text-left font-medium">Tarih</th>
                  <th className="py-3 text-left font-medium">Durum</th>
                  <th className="py-3 pr-4 text-left font-medium">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {showDraftRows &&
                  visibleDrafts.map((draft) => {
                    const category = categories.find((item) => item.slug === draft.categorySlug)
                    const author = authors.find((item) => item.slug === draft.authorSlug)

                    return (
                      <tr key={draft.id} className="group">
                        <td className="py-3 pl-4 pr-4">{draft.title || 'İsimsiz Taslak'}</td>
                        <td className="py-3 pr-4">{category?.name ?? draft.categorySlug}</td>
                        <td className="py-3 pr-4">{author?.name ?? draft.authorSlug}</td>
                        <td className="py-3 pr-4">{formatDate(draft.updatedAt)}</td>
                        <td className="py-3 pr-4">
                          <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                            {draft.status === 'draft' ? 'Taslak' : 'Yayında'}
                          </span>
                        </td>
                        <td className="py-3 pr-4">
                          <div className="flex flex-wrap gap-3">
                            <Link
                              href={`${adminPaths.articles}/${draft.id}`}
                              className="text-sm text-accent transition-colors hover:opacity-80"
                            >
                              Düzenle
                            </Link>
                            <button
                              type="button"
                              className="text-sm text-destructive transition-opacity hover:opacity-80"
                              onClick={() => {
                                deleteDraft(draft.id)
                                setDrafts(getDrafts())
                              }}
                            >
                              Sil
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}

                {activeTab === 'published' &&
                  recentArticles.map((article) => {
                    const category = categories.find((item) => item.slug === article.categorySlug)
                    const author = authors.find((item) => item.slug === article.authorSlug)

                    return (
                      <tr key={article.id} className="group">
                        <td className="py-3 pl-4 pr-4">
                          <div className="flex items-center gap-2">
                            <span>{article.title}</span>
                            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                              demo
                            </span>
                          </div>
                        </td>
                        <td className="py-3 pr-4">{category?.name ?? article.categorySlug}</td>
                        <td className="py-3 pr-4">{author?.name ?? article.authorSlug}</td>
                        <td className="py-3 pr-4">{formatDate(article.date)}</td>
                        <td className="py-3 pr-4">
                          <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                            Yayında
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-muted-foreground">(demo)</td>
                      </tr>
                    )
                  })}

                {visibleDrafts.length === 0 &&
                  (activeTab === 'drafts' || recentArticles.length === 0) && (
                    <tr>
                      <td colSpan={6} className="px-4 py-10 text-center text-muted-foreground">
                        Gösterilecek içerik bulunamadı.
                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
