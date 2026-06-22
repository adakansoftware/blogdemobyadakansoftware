import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function PaginationLinks({
  page,
  totalPages,
  buildHref,
}: {
  page: number
  totalPages: number
  buildHref: (page: number) => string
}) {
  if (totalPages <= 1) return null

  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
      <Link
        href={buildHref(Math.max(1, page - 1))}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
          page <= 1
            ? 'pointer-events-none border-border text-muted-foreground/50'
            : 'border-border text-foreground hover:border-accent hover:text-accent'
        }`}
      >
        <ChevronLeft className="h-4 w-4" /> Önceki
      </Link>
      <p className="text-sm text-muted-foreground">
        Sayfa {page} / {totalPages}
      </p>
      <Link
        href={buildHref(Math.min(totalPages, page + 1))}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
          page >= totalPages
            ? 'pointer-events-none border-border text-muted-foreground/50'
            : 'border-border text-foreground hover:border-accent hover:text-accent'
        }`}
      >
        Sonraki <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
