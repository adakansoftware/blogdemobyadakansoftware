'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormField } from '@/components/admin/form-field'
import { createEmptyDraft, saveDraft } from '@/lib/admin-store'
import { authors, categories, slugify } from '@/lib/data'
import { adminPaths } from '@/lib/routes'

const inputClassName =
  'w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent'

const imageByCategory: Record<string, string> = {
  teknoloji: '/images/industry.png',
  'yapay-zeka': '/images/hero-ai.png',
  donanim: '/images/gpu.png',
  yazilim: '/images/software.png',
  mobil: '/images/mobile.png',
  oyun: '/images/gaming.png',
  'siber-guvenlik': '/images/security.png',
  incelemeler: '/images/laptop.png',
  rehberler: '/images/cpu.png',
  sektor: '/images/cloud.png',
}

export default function NewAdminArticlePage() {
  const router = useRouter()
  const [draft] = useState(() => createEmptyDraft())
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [categorySlug, setCategorySlug] = useState(draft.categorySlug)
  const [authorSlug, setAuthorSlug] = useState(draft.authorSlug)
  const [tags, setTags] = useState('')
  const [readingTime, setReadingTime] = useState(draft.readingTime)
  const [status, setStatus] = useState<'draft' | 'published'>('draft')
  const [body, setBody] = useState('')
  const [error, setError] = useState('')
  const [showToast, setShowToast] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!title.trim() || !excerpt.trim()) {
      setError('Başlık ve özet zorunludur.')
      return
    }

    const now = new Date().toISOString()
    saveDraft({
      id: draft.id,
      slug: slug.trim() || slugify(title),
      title: title.trim(),
      excerpt: excerpt.trim(),
      categorySlug,
      authorSlug,
      tags: tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
      readingTime: Math.max(1, readingTime),
      image: imageByCategory[categorySlug] ?? '/images/hero-ai.png',
      body: body.trim(),
      status,
      createdAt: now,
      updatedAt: now,
    })

    setError('')
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 3000)
    window.setTimeout(() => router.push(adminPaths.articles), 700)
  }

  return (
    <>
      <div className="border-b border-border px-8 py-6">
        <h1 className="font-heading text-3xl font-semibold">Yeni Makale</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Yeni bir makale oluştur ve kaydet
        </p>
      </div>

      <form className="px-8 py-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_320px]">
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="space-y-5">
                <FormField label="Başlık">
                  <input
                    value={title}
                    onChange={(event) => {
                      const nextTitle = event.target.value
                      setTitle(nextTitle)
                      setSlug(slugify(nextTitle))
                    }}
                    className={inputClassName}
                    required
                  />
                </FormField>
                <FormField label="Slug">
                  <input
                    value={slug}
                    onChange={(event) => setSlug(event.target.value)}
                    className={inputClassName}
                  />
                </FormField>
                <FormField label="Özet">
                  <textarea
                    value={excerpt}
                    onChange={(event) => setExcerpt(event.target.value)}
                    rows={3}
                    className={inputClassName}
                    required
                  />
                </FormField>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <FormField
                label="İçerik"
                hint="HTML desteklenir: <h2>, <p>, <ul>, <li>"
              >
                <textarea
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                  className={`${inputClassName} min-h-[300px] font-mono`}
                  placeholder={`<h2>Giriş</h2>\n<p>Makale içeriğini buraya yazın.</p>\n<ul>\n  <li>Önemli nokta</li>\n</ul>`}
                />
              </FormField>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="space-y-5">
                <FormField label="Kategori">
                  <select
                    value={categorySlug}
                    onChange={(event) => setCategorySlug(event.target.value)}
                    className={inputClassName}
                  >
                    {categories.map((category) => (
                      <option key={category.slug} value={category.slug}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Yazar">
                  <select
                    value={authorSlug}
                    onChange={(event) => setAuthorSlug(event.target.value)}
                    className={inputClassName}
                  >
                    {authors.map((author) => (
                      <option key={author.slug} value={author.slug}>
                        {author.name}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Etiketler">
                  <input
                    value={tags}
                    onChange={(event) => setTags(event.target.value)}
                    className={inputClassName}
                    placeholder="LLM, Model, Araştırma"
                  />
                </FormField>
                <FormField label="Okuma Süresi">
                  <input
                    type="number"
                    min={1}
                    value={readingTime}
                    onChange={(event) => setReadingTime(Number(event.target.value) || 1)}
                    className={inputClassName}
                  />
                </FormField>
                <FormField label="Durum">
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="status"
                        value="draft"
                        checked={status === 'draft'}
                        onChange={() => setStatus('draft')}
                      />
                      Taslak
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="status"
                        value="published"
                        checked={status === 'published'}
                        onChange={() => setStatus('published')}
                      />
                      Yayınla
                    </label>
                  </div>
                </FormField>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {showToast && (
        <div className="fixed bottom-4 right-4 rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-lg">
          Makale kaydedildi!
        </div>
      )}
    </>
  )
}
