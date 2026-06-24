'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FormField } from '@/components/admin/form-field'
import { deleteDraft, getDraft, saveDraft, type DraftArticle } from '@/lib/admin-store'
import { authors, categories, slugify } from '@/lib/data'
import { adminPaths } from '@/lib/routes'

const inputClassName =
  'w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent'

type PageProps = {
  params: Promise<{ id: string }>
}

export default function EditAdminArticlePage({ params }: PageProps) {
  const router = useRouter()
  const [draft, setDraft] = useState<DraftArticle | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    async function loadDraft() {
      const { id } = await params
      setDraft(getDraft(id) ?? null)
      setLoaded(true)
    }

    void loadDraft()
  }, [params])

  if (!loaded) {
    return <div className="px-8 py-6 text-sm text-muted-foreground">Yükleniyor...</div>
  }

  if (!draft) {
    return (
      <div className="px-8 py-6">
        <h1 className="font-heading text-3xl font-semibold">Taslak bulunamadı</h1>
        <Link
          href={adminPaths.articles}
          className="mt-4 inline-flex text-sm text-accent transition-opacity hover:opacity-80"
        >
          Makale listesine dön
        </Link>
      </div>
    )
  }

  function updateDraft<K extends keyof DraftArticle>(key: K, value: DraftArticle[K]) {
    setDraft((current) => (current ? { ...current, [key]: value } : current))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!draft.title.trim() || !draft.excerpt.trim()) {
      setError('Başlık ve özet zorunludur.')
      return
    }

    const nextDraft: DraftArticle = {
      ...draft,
      slug: draft.slug.trim() || slugify(draft.title),
      readingTime: Math.max(1, draft.readingTime),
      updatedAt: new Date().toISOString(),
    }

    saveDraft(nextDraft)
    setDraft(nextDraft)
    setError('')
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <>
      <div className="border-b border-border px-8 py-6">
        <h1 className="font-heading text-3xl font-semibold">Taslağı Düzenle</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Kaydedilmiş yerel taslağı güncelle
        </p>
      </div>

      <form className="px-8 py-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_320px]">
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="space-y-5">
                <FormField label="Başlık">
                  <input
                    value={draft.title}
                    onChange={(event) => {
                      const title = event.target.value
                      updateDraft('title', title)
                      updateDraft('slug', slugify(title))
                    }}
                    className={inputClassName}
                    required
                  />
                </FormField>
                <FormField label="Slug">
                  <input
                    value={draft.slug}
                    onChange={(event) => updateDraft('slug', event.target.value)}
                    className={inputClassName}
                  />
                </FormField>
                <FormField label="Özet">
                  <textarea
                    value={draft.excerpt}
                    onChange={(event) => updateDraft('excerpt', event.target.value)}
                    rows={3}
                    className={inputClassName}
                    required
                  />
                </FormField>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <FormField
                label="İçerik"
                hint="HTML desteklenir: <h2>, <p>, <ul>, <li>"
              >
                <textarea
                  value={draft.body}
                  onChange={(event) => updateDraft('body', event.target.value)}
                  className={`${inputClassName} min-h-[300px] font-mono`}
                />
              </FormField>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="space-y-5">
                <FormField label="Kategori">
                  <select
                    value={draft.categorySlug}
                    onChange={(event) => updateDraft('categorySlug', event.target.value)}
                    className={inputClassName}
                  >
                    {categories.map((category) => (
                      <option key={category.slug} value={category.slug}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Yazar">
                  <select
                    value={draft.authorSlug}
                    onChange={(event) => updateDraft('authorSlug', event.target.value)}
                    className={inputClassName}
                  >
                    {authors.map((author) => (
                      <option key={author.slug} value={author.slug}>
                        {author.name}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Etiketler">
                  <input
                    value={draft.tags.join(', ')}
                    onChange={(event) =>
                      updateDraft(
                        'tags',
                        event.target.value
                          .split(',')
                          .map((tag) => tag.trim())
                          .filter(Boolean),
                      )
                    }
                    className={inputClassName}
                  />
                </FormField>
                <FormField label="Okuma Süresi">
                  <input
                    type="number"
                    min={1}
                    value={draft.readingTime}
                    onChange={(event) =>
                      updateDraft('readingTime', Number(event.target.value) || 1)
                    }
                    className={inputClassName}
                  />
                </FormField>
                <FormField label="Durum">
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="status"
                        value="draft"
                        checked={draft.status === 'draft'}
                        onChange={() => updateDraft('status', 'draft')}
                      />
                      Taslak
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="status"
                        value="published"
                        checked={draft.status === 'published'}
                        onChange={() => updateDraft('status', 'published')}
                      />
                      Yayınla
                    </label>
                  </div>
                </FormField>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <div className="grid gap-3">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Kaydet
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-xl border border-destructive px-5 py-3 text-sm font-semibold text-destructive transition-opacity hover:opacity-80"
                    onClick={() => {
                      deleteDraft(draft.id)
                      router.push(adminPaths.articles)
                    }}
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {showToast && (
        <div className="fixed bottom-4 right-4 rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-lg">
          Makale kaydedildi!
        </div>
      )}
    </>
  )
}
