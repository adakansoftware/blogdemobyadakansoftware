import Link from 'next/link'
import { cn } from '@/lib/utils'
import { getCategory } from '@/lib/data'
import { categoryPath } from '@/lib/routes'

export function CategoryBadge({
  slug,
  className,
  variant = 'solid',
}: {
  slug: string
  className?: string
  variant?: 'solid' | 'outline' | 'ghost'
}) {
  const category = getCategory(slug)
  if (!category) return null

  return (
    <Link
      href={categoryPath(category.slug)}
      className={cn(
        'inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors',
        variant === 'solid' &&
          'rounded-sm bg-accent px-2.5 py-1 text-accent-foreground hover:opacity-90',
        variant === 'outline' &&
          'rounded-sm border border-border px-2.5 py-1 text-foreground hover:border-accent hover:text-accent',
        variant === 'ghost' && 'text-accent hover:underline',
        className,
      )}
    >
      {category.name}
    </Link>
  )
}
