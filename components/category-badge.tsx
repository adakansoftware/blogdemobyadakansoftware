import Link from 'next/link'
import { cn } from '@/lib/utils'
import { getCategory } from '@/lib/data'

export function CategoryBadge({
  slug,
  className,
  variant = 'solid',
}: {
  slug: string
  className?: string
  variant?: 'solid' | 'outline' | 'ghost'
}) {
  const cat = getCategory(slug)
  if (!cat) return null

  return (
    <Link
      href={`/kategori/${cat.slug}`}
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
      {cat.name}
    </Link>
  )
}
