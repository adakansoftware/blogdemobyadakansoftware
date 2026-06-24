import Link from 'next/link'
import { adminPaths } from '@/lib/routes'
import { articles, authors, categories, formatDate, getCategory, videos } from '@/lib/data'

const stats = [
  { label: 'Toplam Makale', value: articles.length },
  { label: 'Toplam Video', value: videos.length },
  { label: 'Toplam Yazar', value: authors.length },
  { label: 'Toplam Kategori', value: categories.length },
]

export default function AdminDashboardPage() {
  const latestArticles = [...articles].slice(0, 5)

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
            <div key={stat.label} className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-2 font-heading text-4xl font-semibold">{stat.value}</p>
            </div>
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
              <Link
                href={adminPaths.newVideo}
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-border bg-background px-5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Yeni Video Ekle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
