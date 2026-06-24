import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { articlesByAuthor, authorArticleCount, authors } from '@/lib/data'
import { ArticleCard } from '@/components/article-card'
import { AuthorAvatar } from '@/components/author-avatar'
import { SectionHeading } from '@/components/section-heading'
import { SiteShell } from '@/components/site-shell'

export const metadata: Metadata = {
  title: 'Yazarlar | TechNova Journal',
  description: 'TechNova Journal editör kadrosu.',
}

export default function AuthorsPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Yazarlar
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">
            TechNova Ekibi
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Yapay zekadan donanıma, mobil dünyadan siber güvenliğe kadar her alanda uzman editör kadromuz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {authors.map((author) => {
            const latestArticles = articlesByAuthor(author.slug).slice(0, 3)
            return (
              <article key={author.slug} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <AuthorAvatar slug={author.slug} size={64} />
                    <div>
                      <h2 className="font-heading text-2xl font-semibold">{author.name}</h2>
                      <p className="text-sm text-muted-foreground">{author.role}</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-right">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Yazı Sayısı</p>
                    <p className="font-heading text-2xl font-semibold">{authorArticleCount(author.slug)}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{author.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {author.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <SectionHeading title="Son Yazılar" kicker="Güncel" className="mb-4" />
                  <div className="grid gap-4">
                    {latestArticles.map((article) => (
                      <ArticleCard key={article.id} article={article} variant="minimal" />
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <a
                    href={`https://x.com/${author.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                  >
                    X {author.twitter}
                  </a>
                  <a
                    href={`https://linkedin.com/in/${author.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                  >
                    LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </SiteShell>
  )
}
