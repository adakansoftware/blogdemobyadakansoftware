import Link from 'next/link'
import { TrendingUp } from 'lucide-react'
import { type Article, getAuthor, timeAgo } from '@/lib/data'

export function TrendingList({ articles }: { articles: Article[] }) {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        <TrendingUp className="h-5 w-5 text-accent" />
        <h2 className="font-heading text-xl font-semibold">Öne Çıkanlar</h2>
      </div>
      <ol className="divide-y divide-border">
        {articles.map((article, i) => {
          const author = getAuthor(article.authorSlug)
          return (
            <li key={article.id} className="group flex gap-4 px-5 py-4">
              <span className="font-heading text-3xl font-bold leading-none text-border transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold leading-snug">
                  <Link
                    href={`/makale/${article.slug}`}
                    className="line-clamp-2 transition-colors group-hover:text-accent"
                  >
                    {article.title}
                  </Link>
                </h3>
                <span className="mt-1 text-xs text-muted-foreground">
                  {author?.name} · {timeAgo(article.date)}
                </span>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
