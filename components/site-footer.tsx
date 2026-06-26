import Link from 'next/link'
import { categories } from '@/lib/data'
import { categoryPath, sitePaths } from '@/lib/routes'
import { safeExternalHref } from '@/lib/utils'

const sections = [
  {
    title: 'Kategoriler',
    links: categories.slice(0, 6).map((category) => ({
      label: category.name,
      href: categoryPath(category.slug),
    })),
  },
  {
    title: 'Keşfet',
    links: [
      { label: 'Son Haberler', href: sitePaths.home },
      { label: 'Videolar', href: sitePaths.videos },
      { label: 'İncelemeler', href: categoryPath('incelemeler') },
      { label: 'Rehberler', href: categoryPath('rehberler') },
      { label: 'Forum', href: sitePaths.forum },
      { label: 'Yazarlar', href: sitePaths.authors },
    ],
  },
  {
    title: 'Kurumsal',
    links: [
      { label: 'Hakkımızda', href: sitePaths.home },
      { label: 'İletişim', href: sitePaths.search },
      { label: 'Reklam', href: sitePaths.home },
      { label: 'Kariyer', href: sitePaths.home },
      { label: 'Gizlilik Politikası', href: sitePaths.home },
      { label: 'Kullanım Şartları', href: sitePaths.home },
    ],
  },
]

const socials = [
  { label: 'X', href: 'https://x.com/technovajournal' },
  { label: 'IG', href: 'https://instagram.com/technovajournal' },
  { label: 'YT', href: 'https://youtube.com/@technovajournal' },
  { label: 'IN', href: 'https://linkedin.com/company/technovajournal' },
  { label: 'GH', href: 'https://github.com/adakansoftware' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link href={sitePaths.home} className="flex items-baseline gap-0.5">
              <span className="font-heading text-2xl font-bold tracking-tight">TechNova</span>
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-heading text-sm font-medium text-muted-foreground">
                Journal
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Türkiye&apos;nin bağımsız teknoloji yayını. Yapay zeka, yazılım, donanım
              ve dijital dünyadan güvenilir haberler, incelemeler ve rehberler.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={safeExternalHref(social.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider">
                    {social.label}
                  </span>
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
          <a
            href={safeExternalHref('https://instagram.com/adakansoftware')}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            Design by Adakan Software
          </a>
        </div>
      </div>
    </footer>
  )
}
