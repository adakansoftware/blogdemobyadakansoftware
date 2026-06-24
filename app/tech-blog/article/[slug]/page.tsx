import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MessageSquare, Quote, Timer } from 'lucide-react'
import { notFound } from 'next/navigation'
import {
  articleBody,
  articles,
  comments,
  formatDate,
  getArticle,
  getAuthor,
  pullQuote,
  relatedArticles,
} from '@/lib/data'
import { categoryPath } from '@/lib/routes'
import { ArticleCard } from '@/components/article-card'
import { AuthorAvatar } from '@/components/author-avatar'
import { CategoryBadge } from '@/components/category-badge'
import { Newsletter } from '@/components/newsletter'
import { SectionHeading } from '@/components/section-heading'
import { SiteShell } from '@/components/site-shell'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: `${article.title} | TechNova Journal`,
    description: article.excerpt,
  }
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const author = getAuthor(article.authorSlug)
  const related = relatedArticles(article, 4)
  const body = articleBody(article)

  return (
    <SiteShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-10 lg:px-8 lg:py-14">
          <CategoryBadge slug={article.categorySlug} />
          <h1 className="mt-4 max-w-4xl text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <AuthorAvatar slug={article.authorSlug} size={38} />
              <div>
                <p className="font-medium text-foreground">{author?.name}</p>
                <p>{author?.role}</p>
              </div>
            </div>
            <span>{formatDate(article.date)}</span>
            <span className="inline-flex items-center gap-1">
              <Timer className="h-4 w-4" /> {article.readingTime} dk okuma
            </span>
            <span className="inline-flex items-center gap-1">
              <MessageSquare className="h-4 w-4" /> {article.commentCount} yorum
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-8 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
              <aside className="space-y-6">
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    İçindekiler
                  </p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {body.toc.map((item) => (
                      <li key={item.id} className="text-muted-foreground">
                        <a
                          href={`#${item.id}`}
                          className="transition-colors hover:text-accent"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-muted/40 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Etiketler
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tech-blog/search?q=${encodeURIComponent(tag)}`}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
              <article>
                <div
                  className="article-body"
                  dangerouslySetInnerHTML={{ __html: body.html }}
                />
                <blockquote className="mt-10 rounded-2xl border-l-4 border-accent bg-muted/40 px-6 py-5">
                  <div className="flex items-start gap-3">
                    <Quote className="mt-1 h-5 w-5 text-accent" />
                    <p className="text-lg leading-relaxed text-foreground/90">{pullQuote}</p>
                  </div>
                </blockquote>
              </article>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Yazar
              </p>
              <div className="mt-4 flex items-center gap-3">
                <AuthorAvatar slug={article.authorSlug} size={52} />
                <div>
                  <p className="font-heading text-xl font-semibold">{author?.name}</p>
                  <p className="text-sm text-muted-foreground">{author?.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{author?.bio}</p>
            </div>
            <Newsletter variant="inline" />
            <div className="rounded-xl border border-border bg-card p-6">
              <SectionHeading
                title="Bu Kategoride"
                href={categoryPath(article.categorySlug)}
                kicker="Daha Fazlası"
                className="mb-4"
              />
              <div className="space-y-4">
                {related.slice(0, 3).map((item) => (
                  <ArticleCard key={item.id} article={item} variant="minimal" />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading title="Okur Yorumları" kicker="Topluluk" />
          <div className="grid gap-4 lg:grid-cols-3">
            {comments.map((comment) => (
              <article key={`${comment.author}-${comment.time}`} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">{comment.author}</h3>
                  <span className="text-xs text-muted-foreground">{comment.time}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{comment.text}</p>
                <p className="mt-4 text-xs text-muted-foreground">{comment.likes} beğeni</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <SectionHeading title="Benzer İçerikler" kicker="Önerilen" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {related.map((item) => (
            <ArticleCard key={item.id} article={item} variant="compact" />
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
