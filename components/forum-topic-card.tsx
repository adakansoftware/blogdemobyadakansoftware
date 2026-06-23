import Link from 'next/link'
import { CheckCircle2, MessageSquareText, Pin, Timer } from 'lucide-react'
import { type ForumThread } from '@/lib/data'
import { forumThreadPath } from '@/lib/routes'

export function ForumTopicCard({
  thread,
  compact = false,
}: {
  thread: ForumThread
  compact?: boolean
}) {
  return (
    <article className="rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        {thread.pinned && (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 font-medium text-accent">
            <Pin className="h-3 w-3" /> Sabit
          </span>
        )}
        {thread.solved && (
          <span className="inline-flex items-center gap-1 rounded-full bg-chart-4/10 px-2.5 py-1 font-medium text-chart-4">
            <CheckCircle2 className="h-3 w-3" /> Çözüldü
          </span>
        )}
        {thread.needsAnswer && (
          <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 font-medium text-foreground">
            <Timer className="h-3 w-3" /> Yanıt Bekliyor
          </span>
        )}
      </div>
      <h3 className="mt-3 font-heading text-lg font-semibold leading-snug">
        {thread.slug ? (
          <Link
            href={forumThreadPath(thread.slug)}
            className="transition-colors hover:text-accent"
          >
            {thread.title}
          </Link>
        ) : (
          thread.title
        )}
      </h3>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span>{thread.category}</span>
        <span aria-hidden>·</span>
        <span>{thread.author}</span>
        <span aria-hidden>·</span>
        <span>{thread.badge}</span>
      </div>
      {!compact && (
        <div className="mt-4 flex flex-wrap gap-2">
          {thread.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <MessageSquareText className="h-3.5 w-3.5" />
          {thread.replies} yanıt
        </span>
        <span>{thread.views} görüntülenme</span>
        <span>Son: {thread.lastActivity}</span>
      </div>
    </article>
  )
}
