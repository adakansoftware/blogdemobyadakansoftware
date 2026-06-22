import { type Article, articlesByCategory, getCategory } from '@/lib/data'
import { categoryPath } from '@/lib/routes'
import { ArticleCard } from '@/components/article-card'
import { SectionHeading } from '@/components/section-heading'

export function CategorySpotlight({
  slug,
  items,
  layout = 'split',
}: {
  slug: string
  items?: Article[]
  layout?: 'split' | 'grid'
}) {
  const category = getCategory(slug)
  const resolvedItems = items?.length ? items : articlesByCategory(slug)
  if (!category || resolvedItems.length === 0) return null

  if (layout === 'grid') {
    return (
      <section>
        <SectionHeading
          title={category.name}
          href={categoryPath(category.slug)}
          accent
          kicker="Kategori"
        />
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {resolvedItems.slice(0, 4).map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </section>
    )
  }

  const [lead, ...rest] = resolvedItems

  return (
    <section>
      <SectionHeading
        title={category.name}
        href={categoryPath(category.slug)}
        accent
        kicker="Kategori"
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ArticleCard article={lead} variant="large" />
        <div className="grid gap-5 sm:grid-cols-2">
          {rest.slice(0, 4).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="compact"
              className="border-t border-border pt-4 first:border-t-0 first:pt-0 sm:border-0 sm:pt-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
