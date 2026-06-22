'use client'

import { ArrowRight, CheckCircle2, Mail } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Newsletter({
  variant = 'band',
  className,
}: {
  variant?: 'band' | 'inline'
  className?: string
}) {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  if (variant === 'inline') {
    return (
      <div className={cn('rounded-xl border border-border bg-muted/50 p-6', className)}>
        <Mail className="h-6 w-6 text-accent" />
        <h3 className="mt-3 font-heading text-xl font-semibold">Bültene Abone Ol</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          En önemli teknoloji haberlerini her sabah e-postanıza gönderelim.
        </p>
        {submitted ? (
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
            <CheckCircle2 className="h-4 w-4" /> Teşekkürler, kaydınız alındı!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@eposta.com"
              className="h-11 rounded-lg border border-border bg-background px-4 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Abone Ol <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    )
  }

  return (
    <section className={cn('bg-primary text-primary-foreground', className)}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          <Mail className="h-3.5 w-3.5" /> TechNova Bülten
        </span>
        <h2 className="max-w-2xl text-balance font-heading text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          Teknoloji dünyasını kaçırmayın
        </h2>
        <p className="max-w-xl text-pretty leading-relaxed text-primary-foreground/70">
          Haftada üç kez; en önemli haberler, derinlemesine incelemeler ve özel
          analizlerle dolu bültenimize 120.000+ okuyucu ile birlikte katılın.
        </p>
        {submitted ? (
          <p className="inline-flex items-center gap-2 text-lg font-medium">
            <CheckCircle2 className="h-5 w-5" /> Aramıza hoş geldiniz!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              className="h-12 flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-primary-foreground/50"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Abone Ol <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
        <p className="text-xs text-primary-foreground/50">
          İstediğiniz zaman abonelikten çıkabilirsiniz. Gizliliğinize saygı duyuyoruz.
        </p>
      </div>
    </section>
  )
}
