import Link from 'next/link'
import { MessageSquare, TrendingUp } from 'lucide-react'
import { type Article, getAuthor, timeAgo } from '@/lib/data'
import { articlePath } from '@/lib/routes'

export function TrendingList({ articles }: { articles: Article[] }) {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        <TrendingUp className="h-5 w-5 text-accent" />
        <h2 className="font-heading text-xl font-semibold">Öne Çıkanlar</h2>
      </div>
      <ol className="divide-y divide-border">
        {articles.map((article, index) => {
          const author = getAuthor(article.authorSlug)
          return (
            <li key={article.id} className="group flex gap-4 px-5 py-4">
              <span className="font-heading text-3xl font-bold leading-none text-border transition-colors group-hover:text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="text-sm font-semibold leading-snug">
                  <Link
                    href={articlePath(article.slug)}
                    className="line-clamp-2 transition-colors group-hover:text-accent"
                  >
                    {article.title}
                  </Link>
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span>{author?.name}</span>
                  <span aria-hidden>·</span>
                  <span>{timeAgo(article.date)}</span>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    {article.commentCount}
                  </span>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
