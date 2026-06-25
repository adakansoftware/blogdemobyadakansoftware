'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, LayoutDashboard, Menu, Settings, Video, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getDrafts } from '@/lib/admin-store'
import { adminPaths } from '@/lib/routes'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Dashboard', href: adminPaths.home, icon: LayoutDashboard },
  { label: 'Makaleler', href: adminPaths.articles, icon: FileText },
  { label: 'Videolar', href: adminPaths.videos, icon: Video },
  { label: 'Ayarlar', href: adminPaths.settings, icon: Settings },
]

function Sidebar({
  pathname,
  draftCount,
  onNavigate,
}: {
  pathname: string
  draftCount: number
  onNavigate?: () => void
}) {
  return (
    <div className="flex h-full w-56 shrink-0 flex-col bg-primary text-primary-foreground">
      <div className="flex h-16 items-center gap-2 border-b border-primary-foreground/10 px-5">
        <span className="font-heading text-xl font-bold">TechNova</span>
        <span className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
          Admin
        </span>
      </div>
      <nav className="flex-1 space-y-1 p-3">
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
              pathname === href
                ? 'bg-accent text-accent-foreground'
                : 'text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground',
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
            {label === 'Makaleler' && draftCount > 0 && (
              <span className="ml-auto rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-bold tabular-nums text-accent-foreground">
                {draftCount}
              </span>
            )}
          </Link>
        ))}
      </nav>
      <div className="border-t border-primary-foreground/10 p-3">
        <Link
          href="/tech-blog"
          onClick={onNavigate}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
        >
          ← Bloğa Dön
        </Link>
      </div>
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [draftCount, setDraftCount] = useState(0)

  useEffect(() => {
    setDraftCount(getDrafts().filter((draft) => draft.status === 'draft').length)
  }, [pathname])

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <aside className="hidden md:flex">
        <Sidebar pathname={pathname} draftCount={draftCount} />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Menüyü kapat"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 h-full">
            <Sidebar
              pathname={pathname}
              draftCount={draftCount}
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}

      <main className="flex-1 overflow-y-auto bg-background">
        <div className="flex h-16 items-center justify-between border-b border-border px-4 md:hidden">
          <div className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold">TechNova</span>
            <span className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
              Admin
            </span>
          </div>
          <button
            type="button"
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            className="rounded-lg border border-border p-2 text-foreground"
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {children}
      </main>
    </div>
  )
}
