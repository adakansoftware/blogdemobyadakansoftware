import { articlesByCategory, getCategory } from '@/lib/data'
import { ArticleCard } from '@/components/article-card'
import { SectionHeading } from '@/components/section-heading'

export function CategorySpotlight({
  slug,
  layout = 'split',
}: {
  slug: string
  layout?: 'split' | 'grid'
}) {
  const cat = getCategory(slug)
  const items = articlesByCategory(slug)
  if (!cat || items.length === 0) return null

  if (layout === 'grid') {
    return (
      <section>
        <SectionHeading title={cat.name} href={`/kategori/${cat.slug}`} accent />
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.slice(0, 4).map((a) => (
            <ArticleCard key={a.id} article={a} variant="compact" />
          ))}
        </div>
      </section>
    )
  }

  const [lead, ...rest] = items

  return (
    <section>
      <SectionHeading title={cat.name} href={`/kategori/${cat.slug}`} accent />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ArticleCard article={lead} variant="large" />
        <div className="flex flex-col divide-y divide-border">
          {rest.slice(0, 4).map((a) => (
            <ArticleCard key={a.id} article={a} variant="list" className="py-4 first:pt-0" />
          ))}
        </div>
      </div>
    </section>
  )
}
