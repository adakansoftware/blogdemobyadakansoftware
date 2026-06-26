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

export function getDrafts(): DraftArticle[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as DraftArticle[]
  } catch {
    return []
  }
}

export function saveDraft(draft: DraftArticle): void {
  if (typeof window === 'undefined') return
  const existing = getDrafts()
  const index = existing.findIndex((item) => item.id === draft.id)
  if (index >= 0) {
    existing[index] = draft
  } else {
    existing.unshift(draft)
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
