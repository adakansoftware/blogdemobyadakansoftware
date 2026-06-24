import { videos } from '@/lib/data'
import { adminPaths } from '@/lib/routes'

export default function AdminVideosPage() {
  return (
    <>
      <div className="border-b border-border px-8 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-heading text-3xl font-semibold">Videolar</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Demo video içeriklerini görüntüle
            </p>
          </div>
          <div className="inline-flex items-center gap-2">
            <a
              href={adminPaths.newVideo}
              title="Yakında geliyor"
              aria-disabled="true"
              className="pointer-events-none inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold opacity-50"
            >
              Yeni Video
            </a>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              Yakında
            </span>
          </div>
        </div>
      </div>

      <div className="px-8 py-6">
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="py-3 pl-4 text-left font-medium">Başlık</th>
                  <th className="py-3 text-left font-medium">Kategori</th>
                  <th className="py-3 text-left font-medium">Süre</th>
                  <th className="py-3 text-left font-medium">İzlenme</th>
                  <th className="py-3 pr-4 text-left font-medium">Yayın Tarihi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {videos.map((video) => (
                  <tr key={video.id} className="group">
                    <td className="py-3 pl-4 pr-4">{video.title}</td>
                    <td className="py-3 pr-4">{video.category}</td>
                    <td className="py-3 pr-4">{video.duration}</td>
                    <td className="py-3 pr-4">{video.views}</td>
                    <td className="py-3 pr-4">{video.publishedAt.slice(0, 10)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
