import { cn } from '@/lib/utils'
import { getAuthor } from '@/lib/data'

function initials(name: string): string {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function AuthorAvatar({
  slug,
  size = 40,
  className,
}: {
  slug: string
  size?: number
  className?: string
}) {
  const author = getAuthor(slug)
  if (!author) return null

  return (
    <span
      aria-label={author.name}
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full font-heading font-semibold text-white',
        className,
      )}
      style={{
        width: size,
        height: size,
        backgroundColor: author.avatarColor,
        fontSize: size * 0.4,
      }}
    >
      {initials(author.name)}
    </span>
  )
}
