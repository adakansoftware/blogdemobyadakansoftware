import Link from 'next/link'
import { Eye, MessageSquare } from 'lucide-react'
import { type Article, formatViews, getAuthor, timeAgo } from '@/lib/data'
import { articlePath } from '@/lib/routes'
import { CategoryBadge } from '@/components/category-badge'

export function RankingCard({
  article,
  rank,
}: {
  article: Article
  rank: number
}) {
  const author = getAuthor(article.authorSlug)

  return (
    <article className="group flex gap-4 rounded-xl border border-border bg-card p-4">
      <span className="font-heading text-4xl font-bold leading-none text-border transition-colors group-hover:text-accent">
        {String(rank).padStart(2, '0')}
      </span>
      <div className="min-w-0 flex-1">
        <CategoryBadge slug={article.categorySlug} variant="ghost" />
        <h3 className="mt-2 font-heading text-lg font-semibold leading-snug">
          <Link
            href={articlePath(article.slug)}
            className="line-clamp-2 transition-colors group-hover:text-accent"
          >
            {article.title}
          </Link>
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span>{author?.name}</span>
          <span>{timeAgo(article.date)}</span>
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {formatViews(article.views)}
          </span>
          <span className="inline-flex items-center gap-1">
            <MessageSquare className="h-3.5 w-3.5" />
            {article.commentCount}
          </span>
        </div>
      </div>
    </article>
  )
}
