import Link from 'next/link'
import { adminPaths } from '@/lib/routes'

export default function AdminNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 font-heading text-4xl font-semibold">Sayfa bulunamadı</h1>
      <p className="mt-4 text-muted-foreground">Bu admin sayfası mevcut değil.</p>
      <Link
        href={adminPaths.home}
        className="mt-6 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        Dashboard&apos;a Dön
      </Link>
    </div>
  )
}
