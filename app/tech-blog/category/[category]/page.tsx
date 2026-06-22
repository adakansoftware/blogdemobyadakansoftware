import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articlesByCategory, getCategory, paginate, sortArticles } from '@/lib/data'
import { categoryPath } from '@/lib/routes'
import { ArticleCard } from '@/components/article-card'
import { PaginationLinks } from '@/components/pagination-links'
import { SectionHeading } from '@/components/section-heading'
import { SiteShell } from '@/components/site-shell'

type SearchParams = {
  page?: string
  sort?: 'latest' | 'popular' | 'commented'
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>
  searchParams: Promise<SearchParams>
}) {
  const { category } = await params
  const resolvedSearchParams = await searchParams
  const categoryItem = getCategory(category)
  if (!categoryItem) notFound()
  const currentCategory = categoryItem

  const sort = resolvedSearchParams.sort ?? 'latest'
  const page = Number(resolvedSearchParams.page ?? '1')
  const items = sortArticles(articlesByCategory(currentCategory.slug), sort)
  const { items: pagedItems, totalPages, page: currentPage } = paginate(items, page, 8)
  const [featured, ...rest] = pagedItems

  function buildHref(nextPage: number) {
    return `${categoryPath(currentCategory.slug)}?sort=${sort}&page=${nextPage}`
  }

  return (
    <SiteShell>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Kategori
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">
            {currentCategory.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {currentCategory.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { label: 'En Yeni', value: 'latest' },
              { label: 'En Çok Okunan', value: 'popular' },
              { label: 'En Çok Yorumlanan', value: 'commented' },
            ].map((option) => (
              <Link
                key={option.value}
                href={`${categoryPath(currentCategory.slug)}?sort=${option.value}&page=1`}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  sort === option.value
                    ? 'border-accent bg-accent text-accent-foreground'
                    : 'border-border text-foreground hover:border-accent hover:text-accent'
                }`}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {featured && (
          <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(300px,1fr)]">
            <ArticleCard article={featured} variant="large" />
            <div className="rounded-xl border border-border bg-card p-6">
              <SectionHeading title="Bu Sayfada" kicker="Öne Çıkanlar" className="mb-4" />
              <div className="space-y-4">
                {rest.slice(0, 3).map((article) => (
                  <ArticleCard key={article.id} article={article} variant="minimal" />
                ))}
              </div>
            </div>
          </div>
        )}

        <SectionHeading title="Tüm İçerikler" kicker="Arşiv" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {rest.map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>

        <PaginationLinks page={currentPage} totalPages={totalPages} buildHref={buildHref} />
      </section>
    </SiteShell>
  )
}
