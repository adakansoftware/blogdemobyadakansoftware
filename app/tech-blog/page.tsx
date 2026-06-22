import Link from 'next/link'
import { Flame, MessageSquare, Trophy } from 'lucide-react'
import {
  activeMembers,
  articles,
  articlesByCategory,
  forumStats,
  forumTags,
  forumThreads,
  getEditorPicks,
  getMostCommentedArticles,
  getMostReadArticles,
  getReviewArticles,
  getWeeklyHighlights,
  trendingTopics,
  videos,
} from '@/lib/data'
import { categoryPath, sitePaths } from '@/lib/routes'
import { ArticleCard } from '@/components/article-card'
import { CategorySpotlight } from '@/components/category-spotlight'
import { ForumTopicCard } from '@/components/forum-topic-card'
import { Newsletter } from '@/components/newsletter'
import { RankingCard } from '@/components/ranking-card'
import { ReviewCard } from '@/components/review-card'
import { SectionHeading } from '@/components/section-heading'
import { SiteShell } from '@/components/site-shell'
import { VideoCard } from '@/components/video-card'

export default function TechBlogHomePage() {
  const featured = articles.filter((article) => article.featured)
  const heroMain = featured[0]
  const heroSide = featured.slice(1, 5)
  const latest = articles.slice(0, 8)
  const editorPicks = getEditorPicks(5)
  const mostRead = getMostReadArticles(5)
  const mostCommented = getMostCommentedArticles(5)
  const weeklyHighlights = getWeeklyHighlights(6)
  const reviews = getReviewArticles(6)
  const guides = articlesByCategory('rehberler').slice(0, 4)
  const videosList = videos.slice(0, 5)
  const aiArticles = articlesByCategory('yapay-zeka').slice(0, 5)
  const hardwareArticles = articlesByCategory('donanim').slice(0, 5)
  const softwareArticles = articlesByCategory('yazilim').slice(0, 5)

  return (
    <SiteShell>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              <Flame className="h-3.5 w-3.5" /> Son Dakika
            </span>
            <span className="line-clamp-1 text-foreground">
              {articles[0]?.title}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.slice(0, 5).map((topic) => (
              <Link
                key={topic}
                href={`${sitePaths.search}?q=${encodeURIComponent(topic)}`}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {heroMain && <ArticleCard article={heroMain} variant="hero" priority />}
            </div>
            <div className="flex flex-col gap-5 lg:border-l lg:border-border lg:pl-8">
              <SectionHeading title="Öne Çıkanlar" kicker="Bugünün Manşetleri" />
              <div className="grid gap-5">
                {heroSide.map((article) => (
                  <ArticleCard key={article.id} article={article} variant="horizontal" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          <div>
            <SectionHeading
              title="Son Haberler"
              href={categoryPath('teknoloji')}
              kicker="Güncel"
            />
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
              {latest.slice(0, 4).map((article) => (
                <ArticleCard key={article.id} article={article} variant="standard" />
              ))}
            </div>
            <div className="mt-8 grid gap-5">
              {latest.slice(4).map((article) => (
                <ArticleCard key={article.id} article={article} variant="horizontal" />
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-xl border border-border bg-secondary/50 p-6">
              <SectionHeading title="En Çok Okunanlar" kicker="Popüler" />
              <div className="grid gap-4">
                {mostRead.map((article, index) => (
                  <RankingCard key={article.id} article={article} rank={index + 1} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <SectionHeading title="En Çok Yorumlananlar" kicker="Topluluk" />
              <div className="space-y-4">
                {mostCommented.slice(0, 4).map((article) => (
                  <div key={article.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <ArticleCard article={article} variant="minimal" />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/35">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading
            title="Haftanın Öne Çıkanları"
            href={sitePaths.home}
            kicker="Haftalık Seçki"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {weeklyHighlights.map((article) => (
              <ArticleCard key={article.id} article={article} variant="large" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <CategorySpotlight slug="yapay-zeka" items={aiArticles} />
          <CategorySpotlight slug="donanim" items={hardwareArticles} layout="grid" />
        </div>
      </section>

      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading title="Video İçerikler" href={sitePaths.videos} kicker="TechNova TV" />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <VideoCard video={videosList[0]} featured />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {videosList.slice(1, 3).map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {videosList.slice(3).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Yazılım"
              href={categoryPath('yazilim')}
              kicker="Geliştirici Gündemi"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {softwareArticles.map((article) => (
                <ArticleCard key={article.id} article={article} variant="compact" />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              title="Rehberler"
              href={categoryPath('rehberler')}
              kicker="Adım Adım"
            />
            <div className="space-y-5">
              {guides.map((article) => (
                <ArticleCard key={article.id} article={article} variant="horizontal" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading
            title="Son İncelemeler"
            href={categoryPath('incelemeler')}
            kicker="Test & Puan"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((article) => (
              <ReviewCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <SectionHeading title="Editörün Seçtikleri" kicker="Seçki" />
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {editorPicks.map((article) => (
            <ArticleCard key={article.id} article={article} variant="minimal" />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading
            title="Topluluktan"
            href={sitePaths.forum}
            kicker="Forum Önizleme"
          />
          <div className="grid gap-8 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
                  <MessageSquare className="h-4 w-4" /> Son Konular
                </div>
                {forumThreads.slice(0, 3).map((thread) => (
                  <ForumTopicCard key={thread.id} thread={thread} compact />
                ))}
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
                  <Trophy className="h-4 w-4" /> Popüler Tartışmalar
                </div>
                {forumThreads.slice(3, 6).map((thread) => (
                  <ForumTopicCard key={thread.id} thread={thread} compact />
                ))}
              </div>
            </div>
            <aside className="space-y-5">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-heading text-lg font-semibold">Topluluk İstatistikleri</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {forumStats.map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-border bg-muted/40 p-3">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-1 font-heading text-2xl font-semibold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-heading text-lg font-semibold">Popüler Etiketler</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {forumTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-heading text-lg font-semibold">Aktif Üyeler</h3>
                <div className="mt-4 space-y-3">
                  {activeMembers.map((member) => (
                    <div
                      key={member.name}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
                    >
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{member.posts}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Newsletter />
    </SiteShell>
  )
}
