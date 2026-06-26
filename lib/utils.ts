import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}...`
}

export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/\son\w+=(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/\sstyle=(?:"[^"]*"|'[^']*')/gi, '')
    .replace(/(href|src)=["']javascript:[^"']*["']/gi, '$1="#"')
}

export function safeExternalHref(href: string, fallback = '#'): string {
  try {
    const url = new URL(href)
    return url.protocol === 'http:' || url.protocol === 'https:' ? href : fallback
  } catch {
    return fallback
  }
}

export function safeImageSrc(src: string, fallback = '/images/hero-ai.png'): string {
  return /^\/images\/[a-z0-9-]+\.(png|jpg|jpeg|webp|svg)$/i.test(src) ? src : fallback
}
