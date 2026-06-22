import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  articles,
  articlesByCategory,
  videos,
  trendingTopics,
} from '@/lib/data'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArticleCard } from '@/components/article-card'
import { ReviewCard } from '@/components/review-card'
import { VideoCard } from '@/components/video-card'
import { TrendingList } from '@/components/trending-list'
import { CategorySpotlight } from '@/components/category-spotlight'
import { SectionHeading } from '@/components/section-heading'
import { Newsletter } from '@/components/newsletter'

export default function HomePage() {
  const featured = articles.filter((a) => a.featured)
  const heroMain = featured[0]
  const heroSide = featured.slice(1, 5)
  const latest = articles.slice(0, 8)
  const trending = articles.filter((a) => a.trending).slice(0, 6)
  const reviews = articles.filter((a) => a.review).slice(0, 6)
  const aiArticles = articlesByCategory('yapay-zeka').slice(0, 5)
  const hardwareArticles = articlesByCategory('donanim').slice(0, 5)
  const softwareArticles = articlesByCategory('yazilim').slice(0, 4)
  const editorPicks = articles.slice(8, 13)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                {heroMain && (
                  <ArticleCard article={heroMain} variant="hero" priority />
                )}
              </div>
              <div className="flex flex-col gap-5 lg:border-l lg:border-border lg:pl-8">
                <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-accent">
                  Öne Çıkanlar
                </h2>
                <div className="flex flex-col divide-y divide-border">
                  {heroSide.map((a) => (
                    <div key={a.id} className="py-4 first:pt-0">
                      <ArticleCard article={a} variant="list" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest + Trending sidebar */}
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Son Haberler"
                href="/kategori/teknoloji"
                kicker="Güncel"
              />
              <div className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2">
                {latest.slice(0, 4).map((a) => (
                  <ArticleCard key={a.id} article={a} variant="standard" />
                ))}
              </div>
              <div className="mt-8 flex flex-col divide-y divide-border border-t border-border">
                {latest.slice(4, 8).map((a) => (
                  <div key={a.id} className="py-5">
                    <ArticleCard article={a} variant="list" />
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-10">
              <div className="rounded-xl border border-border bg-secondary/50 p-6">
                <SectionHeading title="Çok Okunanlar" kicker="Popüler" />
                <div className="mt-5">
                  <TrendingList articles={trending} />
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold">Trend Konular</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {trendingTopics.map((t) => (
                    <Link
                      key={t}
                      href={`/arama?q=${encodeURIComponent(t)}`}
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {t}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* AI Spotlight banner */}
        <CategorySpotlight slug="yapay-zeka" articles={aiArticles} />

        {/* Reviews */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
            <SectionHeading
              title="Son İncelemeler"
              href="/kategori/incelemeler"
              kicker="Test & Puan"
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {reviews.map((a) => (
                <ReviewCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>

        {/* Hardware + Software two column */}
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Donanım"
                href="/kategori/donanim"
                kicker="Hardware"
              />
              <div className="mt-6 space-y-6">
                {hardwareArticles[0] && (
                  <ArticleCard article={hardwareArticles[0]} variant="large" />
                )}
                <div className="flex flex-col divide-y divide-border border-t border-border">
                  {hardwareArticles.slice(1, 5).map((a) => (
                    <div key={a.id} className="py-4">
                      <ArticleCard article={a} variant="list" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <SectionHeading
                title="Yazılım"
                href="/kategori/yazilim"
                kicker="Software"
              />
              <div className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2">
                {softwareArticles.map((a) => (
                  <ArticleCard key={a.id} article={a} variant="standard" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Videos */}
        <section className="border-y border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-widest text-accent">
                  TechNova TV
                </p>
                <h2 className="mt-1 font-heading text-2xl font-bold lg:text-3xl">
                  Video İçerikler
                </h2>
              </div>
              <Link
                href="/videolar"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
              >
                Tümü <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <VideoCard video={videos[0]} featured />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {videos.slice(1, 3).map((v) => (
                  <VideoCard key={v.id} video={v} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Editor picks */}
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading title="Editörün Seçtikleri" kicker="Seçki" />
          <div className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {editorPicks.map((a) => (
              <ArticleCard key={a.id} article={a} variant="minimal" />
            ))}
          </div>
        </section>

        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
