import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { sitePaths } from '@/lib/routes'

export default function NotFound() {
  return (
    <SiteShell>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-4 font-heading text-5xl font-semibold sm:text-6xl">
          Sayfa bulunamadı
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted-foreground">
          Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
        </p>
        <Link
          href={sitePaths.home}
          className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </SiteShell>
  )
}
