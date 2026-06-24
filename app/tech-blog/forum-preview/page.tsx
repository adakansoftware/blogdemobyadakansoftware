import type { Metadata } from 'next'
import {
  activeMembers,
  forumStats,
  forumTags,
  forumThreads,
} from '@/lib/data'
import { ForumTopicCard } from '@/components/forum-topic-card'
import { SectionHeading } from '@/components/section-heading'
import { SiteShell } from '@/components/site-shell'

export const metadata: Metadata = {
  title: 'Forum | TechNova Journal',
}

export default function ForumPreviewPage() {
  const latestThreads = forumThreads.slice(0, 4)
  const popularThreads = [...forumThreads].sort((a, b) => b.replies - a.replies).slice(0, 4)
  const unansweredThreads = forumThreads.filter((thread) => thread.needsAnswer).slice(0, 4)
  const solvedThreads = forumThreads.filter((thread) => thread.solved).slice(0, 4)

  return (
    <SiteShell>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Forum Önizleme
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">
            TechNova Topluluğu
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Son konular, popüler tartışmalar ve aktif üyelerle teknoloji meraklılarının buluşma alanı.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {forumStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
              <p className="mt-2 font-heading text-3xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading title="Son Konular" kicker="Yeni" />
              <div className="space-y-4">
                {latestThreads.map((thread) => (
                  <ForumTopicCard key={thread.id} thread={thread} />
                ))}
              </div>
            </div>
            <div>
              <SectionHeading title="Popüler Tartışmalar" kicker="Gündem" />
              <div className="space-y-4">
                {popularThreads.map((thread) => (
                  <ForumTopicCard key={thread.id} thread={thread} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Cevap Bekleyen Sorular" kicker="Yardıma Açık" />
            <div className="space-y-4">
              {unansweredThreads.map((thread) => (
                <ForumTopicCard key={thread.id} thread={thread} compact />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title="Çözülen Konular" kicker="Arşiv" />
            <div className="space-y-4">
              {solvedThreads.map((thread) => (
                <ForumTopicCard key={thread.id} thread={thread} compact />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,1fr)]">
            <div>
              <SectionHeading title="Popüler Etiketler" kicker="Takip Edilen Başlıklar" />
              <div className="flex flex-wrap gap-2">
                {forumTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading title="Aktif Üyeler" kicker="Bugün" />
              <div className="space-y-3">
                {activeMembers.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{member.posts}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
