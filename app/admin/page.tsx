'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getDrafts } from '@/lib/admin-store'
import { adminPaths, sitePaths } from '@/lib/routes'
import { articles, authors, categories, formatDate, getCategory, videos } from '@/lib/data'

export default function AdminDashboardPage() {
  const [draftCount, setDraftCount] = useState(0)
  const latestArticles = [...articles].slice(0, 5)
  const stats = [
    {
      label: 'Toplam Makale',
      value: `${articles.length} + ${draftCount} taslak`,
      href: adminPaths.articles,
    },
    { label: 'Toplam Video', value: videos.length, href: adminPaths.videos },
    { label: 'Toplam Yazar', value: authors.length, href: sitePaths.authors },
    { label: 'Toplam Kategori', value: categories.length, href: sitePaths.home },
  ]

  useEffect(() => {
    setDraftCount(getDrafts().length)
  }, [])

  return (
    <>
      <div className="border-b border-border px-8 py-6">
        <h1 className="font-heading text-3xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          TechNova Journal yönetim paneli
        </p>
      </div>

      <div className="px-8 py-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-2 font-heading text-4xl font-semibold">{stat.value}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-heading text-2xl font-semibold">Son Makaleler</h2>
            <div className="mt-6 space-y-4">
              {latestArticles.map((article) => {
                const category = getCategory(article.categorySlug)

                return (
                  <div
                    key={article.id}
                    className="flex flex-col gap-3 rounded-xl border border-border p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="font-medium">{article.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {formatDate(article.date)}
                      </p>
                    </div>
                    <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {category?.name ?? article.categorySlug}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-heading text-2xl font-semibold">Hızlı Eylemler</h2>
            <div className="mt-6 grid gap-4">
              <Link
                href={adminPaths.newArticle}
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Yeni Makale Yaz
              </Link>
              <span
                title="Yakında geliyor"
                className="inline-flex min-h-14 cursor-not-allowed items-center justify-center rounded-xl border border-border bg-background px-5 text-sm font-semibold opacity-50"
              >
                Yeni Video Ekle
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
