import Link from 'next/link'
import { SearchX } from 'lucide-react'
import { paginate, searchArticles, sortArticles, trendingTopics } from '@/lib/data'
import { sitePaths } from '@/lib/routes'
import { ArticleCard } from '@/components/article-card'
import { PaginationLinks } from '@/components/pagination-links'
import { SectionHeading } from '@/components/section-heading'
import { SiteShell } from '@/components/site-shell'

type SearchParams = {
  q?: string
  page?: string
  sort?: 'latest' | 'popular' | 'commented'
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const resolvedSearchParams = await searchParams
  const query = resolvedSearchParams.q ?? ''
  const sort = resolvedSearchParams.sort ?? 'latest'
  const page = Number(resolvedSearchParams.page ?? '1')
  const results = sortArticles(searchArticles(query), sort)
  const paged = paginate(results, page, 10)

  function buildHref(nextPage: number) {
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    params.set('sort', sort)
    params.set('page', String(nextPage))
    return `${sitePaths.search}?${params.toString()}`
  }

  return (
    <SiteShell>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Arama
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">
            {query ? `â€œ${query}â€ iÃ§in sonuÃ§lar` : 'Makale ve etiket ara'}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Arama deneyimi mock veri Ã¼zerinde Ã§alÄ±ÅŸÄ±r ve haberler, etiketler, yazarlar ile kategori isimlerinde eÅŸleÅŸme yapar.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { label: 'En Yeni', value: 'latest' },
              { label: 'En Ã‡ok Okunan', value: 'popular' },
              { label: 'En Ã‡ok Yorumlanan', value: 'commented' },
            ].map((option) => (
              <Link
                key={option.value}
                href={`${sitePaths.search}?q=${encodeURIComponent(query)}&sort=${option.value}&page=1`}
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
        {query && paged.items.length > 0 && (
          <>
            <SectionHeading
              title={`${results.length} sonuÃ§ bulundu`}
              kicker="SonuÃ§lar"
              className="mb-8"
            />
            <div className="grid gap-5">
              {paged.items.map((article) => (
                <ArticleCard key={article.id} article={article} variant="horizontal" />
              ))}
            </div>
            <PaginationLinks
              page={paged.page}
              totalPages={paged.totalPages}
              buildHref={buildHref}
            />
          </>
        )}

        {(!query || paged.items.length === 0) && (
          <div className="rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-16 text-center">
            <SearchX className="mx-auto h-10 w-10 text-muted-foreground" />
            <h2 className="mt-4 font-heading text-2xl font-semibold">
              {query ? `"${query}" için sonuç bulunamadı` : 'Arama yapmak için bir konu yazın'}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {query
                ? `"${trendingTopics[0]}" aramayı deneyin`
                : 'Örneğin: yapay zeka, OLED monitör, TypeScript veya espor'}
            </p>
          </div>
        )}
      </section>
    </SiteShell>
  )
}
