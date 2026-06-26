import Image from 'next/image'
import Link from 'next/link'
import { Clock, MessageSquare, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  type Article,
  formatDate,
  formatViews,
  getAuthor,
  timeAgo,
} from '@/lib/data'
import { articlePath } from '@/lib/routes'
import { CategoryBadge } from '@/components/category-badge'
import { AuthorAvatar } from '@/components/author-avatar'

type Variant =
  | 'hero'
  | 'large'
  | 'standard'
  | 'compact'
  | 'list'
  | 'minimal'
  | 'horizontal'

export function ArticleCard({
  article,
  variant = 'standard',
  className,
  priority = false,
}: {
  article: Article
  variant?: Variant
  className?: string
  priority?: boolean
}) {
  const author = getAuthor(article.authorSlug)
  const href = articlePath(article.slug)

  if (variant === 'minimal') {
    return (
      <article className={cn('group flex flex-col gap-1.5', className)}>
        <CategoryBadge slug={article.categorySlug} variant="ghost" />
        <h3 className="text-base font-semibold leading-snug">
          <Link
            href={href}
            className="line-clamp-3 transition-colors group-hover:text-accent"
          >
            {article.title}
          </Link>
        </h3>
        <span className="text-xs text-muted-foreground">{timeAgo(article.date)}</span>
      </article>
    )
  }

  if (variant === 'list' || variant === 'horizontal') {
    return (
      <article className={cn('group flex gap-4', className)}>
        <Link
          href={href}
          aria-label={article.title}
          className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-md bg-muted sm:w-36"
        >
          <Image
            src={article.image || '/placeholder.svg'}
            alt={article.title}
            aria-hidden={true}
            fill
            sizes="160px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <CategoryBadge slug={article.categorySlug} variant="ghost" />
            {article.trending && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-accent">
                <TrendingUp className="h-3 w-3" /> Trend
              </span>
            )}
          </div>
          <h3 className="text-sm font-semibold leading-snug sm:text-base">
            <Link
              href={href}
              className="line-clamp-2 transition-colors group-hover:text-accent"
            >
              {article.title}
            </Link>
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>{author?.name}</span>
            <span aria-hidden>·</span>
            <span>{timeAgo(article.date)}</span>
            <span aria-hidden>·</span>
            <span>{formatViews(article.views)} görüntülenme</span>
          </div>
        </div>
      </article>
    )
  }

  if (variant === 'compact') {
    return (
      <article className={cn('group flex flex-col', className)}>
        <Link
          href={href}
          aria-label={article.title}
          className="relative mb-3 aspect-[16/10] overflow-hidden rounded-lg bg-muted"
        >
          <Image
            src={article.image || '/placeholder.svg'}
            alt={article.title}
            aria-hidden={true}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <CategoryBadge slug={article.categorySlug} variant="ghost" className="mb-1.5" />
        <h3 className="text-base font-semibold leading-snug">
          <Link
            href={href}
            className="line-clamp-2 transition-colors group-hover:text-accent"
          >
            {article.title}
          </Link>
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>{timeAgo(article.date)}</span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {article.readingTime} dk
          </span>
        </div>
      </article>
    )
  }

  const isHero = variant === 'hero'
  const isLarge = variant === 'large'

  return (
    <article className={cn('group flex flex-col', isHero && 'gap-0', className)}>
      <Link
        href={href}
        aria-label={!isHero ? article.title : undefined}
        className={cn(
          'relative overflow-hidden rounded-xl bg-muted',
          isHero ? 'aspect-[16/10] lg:aspect-[16/9]' : 'aspect-[16/10]',
        )}
      >
        <Image
          src={article.image || '/placeholder.svg'}
          alt={article.title}
          aria-hidden={!isHero ? true : undefined}
          fill
          priority={priority}
          sizes={
            isHero ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'
          }
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {isHero && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        )}
        {isHero && (
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <CategoryBadge slug={article.categorySlug} interactive={false} />
              {article.trending && (
                <span className="rounded-sm border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  Gündem
                </span>
              )}
            </div>
            <h2 className="mt-3 max-w-3xl text-balance font-heading text-2xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-white/85 sm:text-base">
              {article.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <AuthorAvatar slug={article.authorSlug} size={32} />
              <span className="font-medium text-white">{author?.name}</span>
              <span aria-hidden>·</span>
              <span>{formatDate(article.date)}</span>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {article.readingTime} dk
              </span>
            </div>
          </div>
        )}
      </Link>

      {!isHero && (
        <div className="mt-4 flex flex-col">
          <CategoryBadge slug={article.categorySlug} variant="ghost" className="mb-2" />
          <h3
            className={cn(
              'font-heading font-semibold leading-snug',
              isLarge ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl',
            )}
          >
            <Link href={href} className="transition-colors group-hover:text-accent">
              {article.title}
            </Link>
          </h3>
          <p
            className={cn(
              'mt-2 text-pretty leading-relaxed text-muted-foreground',
              isLarge ? 'text-base line-clamp-3' : 'text-sm line-clamp-2',
            )}
          >
            {article.excerpt}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <AuthorAvatar slug={article.authorSlug} size={24} />
            <span className="font-medium text-foreground">{author?.name}</span>
            <span aria-hidden>·</span>
            <span>{timeAgo(article.date)}</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <MessageSquare className="h-3 w-3" /> {article.commentCount}
            </span>
          </div>
        </div>
      )}
    </article>
  )
}
