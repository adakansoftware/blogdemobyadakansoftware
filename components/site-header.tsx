'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, Search, TrendingUp, User, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { categories, trendingTopics, formatDate } from '@/lib/data'
import { ThemeToggle } from '@/components/theme-toggle'

const navCategories = [...categories.slice(0, 10)]

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const today = formatDate('2026-06-22T09:00:00')

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    const q = query.trim()
    router.push(q ? `/arama?q=${encodeURIComponent(q)}` : '/arama')
    setSearchOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      {/* Top info bar */}
      <div className="hidden border-b border-border/70 bg-muted/40 lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <span className="shrink-0 font-medium capitalize">{today}</span>
          <div className="ticker-track flex flex-1 items-center gap-2 overflow-hidden">
            <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold uppercase tracking-wide text-accent">
              <TrendingUp className="h-3.5 w-3.5" /> Gündem
            </span>
            <div className="relative flex-1 overflow-hidden">
              <div className="animate-ticker flex w-max gap-8 whitespace-nowrap">
                {[...trendingTopics, ...trendingTopics].map((t, i) => (
                  <Link
                    key={i}
                    href={`/arama?q=${encodeURIComponent(t)}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <Link href="/forum" className="px-2 transition-colors hover:text-foreground">
              Forum
            </Link>
            <Link href="/yazarlar" className="px-2 transition-colors hover:text-foreground">
              Yazarlar
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Menüyü aç"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="flex items-baseline gap-0.5">
            <span className="font-heading text-2xl font-bold tracking-tight lg:text-[28px]">
              TechNova
            </span>
            <span className="h-2 w-2 translate-y-[-2px] rounded-full bg-accent" />
            <span className="hidden font-heading text-sm font-medium text-muted-foreground sm:inline">
              Journal
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            aria-label="Ara"
            onClick={() => setSearchOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Profil"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <User className="h-[18px] w-[18px]" />
          </button>
          <Link
            href="/forum"
            className="ml-1 hidden h-9 items-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Topluluğa Katıl
          </Link>
        </div>
      </div>

      {/* Category nav */}
      <nav className="hidden border-t border-border lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-1 px-4 sm:px-6 lg:px-8">
          {navCategories.map((cat) => {
            const active = pathname === `/kategori/${cat.slug}`
            return (
              <Link
                key={cat.slug}
                href={`/kategori/${cat.slug}`}
                className={cn(
                  'relative py-3 px-3 text-sm font-medium transition-colors hover:text-accent',
                  active ? 'text-accent' : 'text-foreground',
                )}
              >
                {cat.name}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 bg-accent" />
                )}
              </Link>
            )
          })}
          <Link
            href="/forum"
            className="py-3 px-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Forum
          </Link>
        </div>
      </nav>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-3xl px-4 pt-24 sm:px-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Arama
              </span>
              <button
                type="button"
                aria-label="Kapat"
                onClick={() => setSearchOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={submitSearch} className="mt-6 flex items-center gap-3 border-b-2 border-foreground pb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
              {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Haber, konu veya etiket ara..."
                className="flex-1 bg-transparent font-heading text-2xl outline-none placeholder:text-muted-foreground sm:text-3xl"
              />
            </form>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Popüler Aramalar
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {trendingTopics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => router.push(`/arama?q=${encodeURIComponent(t)}`)}
                    className="rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[85%] max-w-sm flex-col bg-background shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-border px-4">
              <span className="font-heading text-xl font-bold">
                TechNova<span className="text-accent">.</span>
              </span>
              <button
                type="button"
                aria-label="Menüyü kapat"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-2 py-4">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/kategori/${cat.slug}`}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                href="/forum"
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
              >
                Forum
              </Link>
              <Link
                href="/videolar"
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
              >
                Videolar
              </Link>
              <Link
                href="/yazarlar"
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
              >
                Yazarlar
              </Link>
            </nav>
            <div className="border-t border-border p-4">
              <Link
                href="/forum"
                className="flex h-11 items-center justify-center rounded-lg bg-accent text-sm font-semibold text-accent-foreground"
              >
                Topluluğa Katıl
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
