import { videos } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { SiteShell } from '@/components/site-shell'
import { VideoCard } from '@/components/video-card'

export default function VideosPage() {
  const [featured, ...rest] = videos

  return (
    <SiteShell>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            TechNova TV
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">
            Video İçerikler
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            İncelemeler, ilk bakış videoları, karşılaştırmalar ve ekipten anlatımlar.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          <VideoCard video={featured} featured />
          <div className="space-y-4">
            {rest.slice(0, 3).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading title="Tüm Videolar" kicker="Arşiv" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
