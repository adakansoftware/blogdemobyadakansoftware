import Image from 'next/image'
import Link from 'next/link'
import { Eye, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatDate, type Video } from '@/lib/data'
import { videoPath } from '@/lib/routes'

export function VideoCard({
  video,
  featured = false,
}: {
  video: Video
  featured?: boolean
}) {
  return (
    <Link
      href={videoPath(video.slug)}
      className="group block overflow-hidden rounded-lg border border-border bg-card"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.image || '/placeholder.svg'}
          alt={video.title}
          fill
          sizes={featured ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 30vw'}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 text-accent-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="h-6 w-6 translate-x-0.5 fill-current" />
          </span>
        </div>
        <span className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-xs font-medium tabular-nums text-white">
          {video.duration}
        </span>
        <span className="absolute left-2 top-2 rounded bg-accent px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
          {video.category}
        </span>
      </div>
      <div className={cn('p-4', featured && 'p-5')}>
        <h3
          className={cn(
            'line-clamp-2 font-heading leading-snug text-card-foreground transition-colors group-hover:text-accent',
            featured ? 'text-xl' : 'text-base',
          )}
        >
          {video.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {video.excerpt}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span>{video.author}</span>
          <span>{formatDate(video.publishedAt)}</span>
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {video.views} izlenme
          </span>
        </div>
      </div>
    </Link>
  )
}
