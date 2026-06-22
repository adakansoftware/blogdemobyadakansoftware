import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SectionHeading({
  title,
  href,
  linkLabel = 'Tümünü Gör',
  accent = false,
  className,
}: {
  title: string
  href?: string
  linkLabel?: string
  accent?: boolean
  className?: string
}) {
  return (
    <div className={cn('mb-6 flex items-end justify-between gap-4', className)}>
      <h2 className="flex items-center gap-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        {accent && <span className="h-7 w-1.5 rounded-full bg-accent" />}
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
