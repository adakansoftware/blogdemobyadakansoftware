import Link from 'next/link'
import { Github, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { categories } from '@/lib/data'

const sections = [
  {
    title: 'Kategoriler',
    links: categories.slice(0, 6).map((c) => ({
      label: c.name,
      href: `/kategori/${c.slug}`,
    })),
  },
  {
    title: 'Keşfet',
    links: [
      { label: 'Son Haberler', href: '/' },
      { label: 'Videolar', href: '/videolar' },
      { label: 'İncelemeler', href: '/kategori/incelemeler' },
      { label: 'Rehberler', href: '/kategori/rehberler' },
      { label: 'Forum', href: '/forum' },
      { label: 'Yazarlar', href: '/yazarlar' },
    ],
  },
  {
    title: 'Kurumsal',
    links: [
      { label: 'Hakkımızda', href: '/' },
      { label: 'İletişim', href: '/' },
      { label: 'Reklam', href: '/' },
      { label: 'Kariyer', href: '/' },
      { label: 'Gizlilik Politikası', href: '/' },
      { label: 'Kullanım Şartları', href: '/' },
    ],
  },
]

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Github, label: 'GitHub' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-baseline gap-0.5">
              <span className="font-heading text-2xl font-bold tracking-tight">
                TechNova
              </span>
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-heading text-sm font-medium text-muted-foreground">
                Journal
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Türkiye&apos;nin bağımsız teknoloji yayını. Yapay zeka, yazılım,
              donanım ve dijital dünyadan güvenilir haberler, derinlemesine
              analizler ve incelemeler.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 TechNova Journal. Tüm hakları saklıdır.</p>
          <p>
            İstanbul, Türkiye · Bağımsız teknoloji yayıncılığı
          </p>
        </div>
      </div>
    </footer>
  )
}
