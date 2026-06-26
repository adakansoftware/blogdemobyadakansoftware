import { safeImageSrc } from '@/lib/utils'

export type DraftArticle = {
  id: string
  slug: string
  title: string
  excerpt: string
  categorySlug: string
  authorSlug: string
  tags: string[]
  readingTime: number
  image: string
  body: string
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
}

const STORAGE_KEY = 'technova_admin_drafts'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value.filter((item): item is string => typeof item === 'string')
}

function normalizeDraftArticle(value: unknown): DraftArticle | null {
  if (!isRecord(value)) return null

  const createdAt =
    typeof value.createdAt === 'string' && value.createdAt.trim()
      ? value.createdAt
      : new Date().toISOString()
  const updatedAt =
    typeof value.updatedAt === 'string' && value.updatedAt.trim()
      ? value.updatedAt
      : createdAt

  return {
    id: typeof value.id === 'string' && value.id.trim() ? value.id : `draft-${Date.now()}`,
    slug: typeof value.slug === 'string' ? value.slug : '',
    title: typeof value.title === 'string' ? value.title : '',
    excerpt: typeof value.excerpt === 'string' ? value.excerpt : '',
    categorySlug:
      typeof value.categorySlug === 'string' && value.categorySlug.trim()
        ? value.categorySlug
        : 'teknoloji',
    authorSlug:
      typeof value.authorSlug === 'string' && value.authorSlug.trim()
        ? value.authorSlug
        : 'elif-yildirim',
    tags: toStringArray(value.tags),
    readingTime:
      typeof value.readingTime === 'number' && Number.isFinite(value.readingTime)
        ? Math.max(1, Math.round(value.readingTime))
        : 5,
    image: safeImageSrc(
      typeof value.image === 'string' ? value.image : '/images/hero-ai.png',
      '/images/hero-ai.png',
    ),
    body: typeof value.body === 'string' ? value.body : '',
    status: value.status === 'published' ? 'published' : 'draft',
    createdAt,
    updatedAt,
  }
}

export function getDrafts(): DraftArticle[] {
  if (typeof window === 'undefined') return []
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as unknown
    if (!Array.isArray(parsed)) return []
    return parsed
      .map((draft) => normalizeDraftArticle(draft))
      .filter((draft): draft is DraftArticle => draft !== null)
  } catch {
    return []
  }
}

export function saveDraft(draft: DraftArticle): void {
  if (typeof window === 'undefined') return
  const existing = getDrafts()
  const normalizedDraft = normalizeDraftArticle(draft)
  if (!normalizedDraft) return
  const index = existing.findIndex((item) => item.id === normalizedDraft.id)
  if (index >= 0) {
    existing[index] = normalizedDraft
  } else {
    existing.unshift(normalizedDraft)
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
}

export function deleteDraft(id: string): void {
  if (typeof window === 'undefined') return
  const filtered = getDrafts().filter((draft) => draft.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}

export function getDraft(id: string): DraftArticle | undefined {
  return getDrafts().find((draft) => draft.id === id)
}

export function createEmptyDraft(): DraftArticle {
  const now = new Date().toISOString()
  return {
    id: `draft-${Date.now()}`,
    slug: '',
    title: '',
    excerpt: '',
    categorySlug: 'teknoloji',
    authorSlug: 'elif-yildirim',
    tags: [],
    readingTime: 5,
    image: '/images/hero-ai.png',
    body: '',
    status: 'draft',
    createdAt: now,
    updatedAt: now,
  }
}

export function getDraftCount(): number {
  return getDrafts().filter((draft) => draft.status === 'draft').length
}

export function clearAllDrafts(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

export function publishDraft(id: string): void {
  const drafts = getDrafts()
  const index = drafts.findIndex((draft) => draft.id === id)
  if (index < 0) return
  drafts[index] = {
    ...drafts[index],
    status: 'published',
    updatedAt: new Date().toISOString(),
  }
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts))
}
