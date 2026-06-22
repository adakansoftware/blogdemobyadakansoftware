import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { type Article, getCategory } from '@/lib/data'

function ScoreBadge({ score }: { score: number }) {
  const tone =
    score >= 9
      ? 'bg-chart-4/15 text-chart-4'
      : score >= 7.5
        ? 'bg-accent/15 text-accent'
        : 'bg-muted text-muted-foreground'
  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold tabular-nums ${tone}`}
    >
      {score.toFixed(1)}
    </span>
  )
}

export function ReviewCard({ article }: { article: Article }) {
  const category = getCategory(article.categorySlug)
  const score = article.review?.score ?? 8

  return (
    <Link
      href={`/makale/${article.slug}`}
      className="group flex gap-4 rounded-lg border border-border bg-card p-3 transition-colors hover:border-accent/40"
    >
      <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-md sm:w-28">
        <Image
          src={article.image || '/placeholder.svg'}
          alt={article.title}
          fill
          sizes="120px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-accent">
            {category?.name ?? 'İnceleme'}
          </p>
          <h3 className="mt-1 line-clamp-2 font-heading text-base leading-snug text-card-foreground transition-colors group-hover:text-accent">
            {article.title}
          </h3>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <ScoreBadge score={score} />
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.round(score / 2)
                    ? 'fill-accent text-accent'
                    : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
