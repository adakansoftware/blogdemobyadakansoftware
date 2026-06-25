'use client'

import { useEffect, useState } from 'react'
import { FormField } from '@/components/admin/form-field'
import { clearAllDrafts } from '@/lib/admin-store'

const SETTINGS_KEY = 'technova_admin_settings'
const inputClassName =
  'w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent'

type AdminSettings = {
  siteName: string
  description: string
  language: 'tr' | 'en'
  theme: 'light' | 'dark'
  newsletterTitle: string
}

const defaultSettings: AdminSettings = {
  siteName: 'TechNova Journal',
  description:
    'TechNova Journal; yapay zeka, yazılım, donanım, mobil, oyun ve siber güvenlik alanlarında derinlemesine haberler.',
  language: 'tr',
  theme: 'light',
  newsletterTitle: 'Bültene Katılın',
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<AdminSettings>(defaultSettings)
  const [showToast, setShowToast] = useState(false)
  const [cleared, setCleared] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(SETTINGS_KEY)
      if (stored) {
        setSettings({ ...defaultSettings, ...(JSON.parse(stored) as Partial<AdminSettings>) })
      }
    } catch {
      setSettings(defaultSettings)
    }
  }, [])

  function updateSettings<K extends keyof AdminSettings>(key: K, value: AdminSettings[K]) {
    setSettings((current) => ({ ...current, [key]: value }))
  }

  function handleSave() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <>
      <div className="border-b border-border px-8 py-6">
        <h1 className="font-heading text-3xl font-semibold">Ayarlar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Demo yönetim ayarlarını tarayıcıda sakla
        </p>
      </div>

      <div className="grid gap-6 px-8 py-6 xl:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2">
            <h2 className="font-heading text-2xl font-semibold">Site Ayarları</h2>
          </div>
          <div className="mt-6 space-y-5">
            <FormField label="Site Adı">
              <input
                value={settings.siteName}
                onChange={(event) => updateSettings('siteName', event.target.value)}
                className={inputClassName}
              />
            </FormField>
            <FormField label="Site Açıklaması">
              <textarea
                value={settings.description}
                onChange={(event) => updateSettings('description', event.target.value)}
                rows={4}
                className={inputClassName}
              />
            </FormField>
            <FormField label="Dil">
              <select
                value={settings.language}
                onChange={(event) =>
                  updateSettings('language', event.target.value as AdminSettings['language'])
                }
                className={inputClassName}
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
              </select>
            </FormField>
            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Kaydet
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2">
            <h2 className="font-heading text-2xl font-semibold">Görünüm</h2>
            <span className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
              Demo
            </span>
          </div>
          <div className="mt-6 space-y-5">
            <FormField label="Varsayılan Tema">
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="theme"
                    value="light"
                    checked={settings.theme === 'light'}
                    onChange={() => updateSettings('theme', 'light')}
                  />
                  Açık
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="theme"
                    value="dark"
                    checked={settings.theme === 'dark'}
                    onChange={() => updateSettings('theme', 'dark')}
                  />
                  Koyu
                </label>
              </div>
            </FormField>
            <FormField label="Bülten Başlığı">
              <input
                value={settings.newsletterTitle}
                onChange={(event) => updateSettings('newsletterTitle', event.target.value)}
                className={inputClassName}
              />
            </FormField>
          </div>
        </div>

        <div className="rounded-xl border border-destructive/30 bg-card p-6">
          <h2 className="font-heading text-2xl font-semibold text-destructive">
            Tehlike Bölgesi
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Bu işlemler geri alınamaz. Dikkatli olun.
          </p>
          <div className="mt-6">
            {cleared ? (
              <p className="text-sm text-muted-foreground">Tüm taslaklar silindi.</p>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Tüm taslakları silmek istediğinizden emin misiniz?')) {
                    clearAllDrafts()
                    setCleared(true)
                  }
                }}
                className="rounded-xl border border-destructive px-5 py-3 text-sm font-semibold text-destructive transition-opacity hover:opacity-80"
              >
                Tüm Taslakları Temizle
              </button>
            )}
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-4 right-4 rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-lg">
          Ayarlar kaydedildi!
        </div>
      )}
    </>
  )
}
