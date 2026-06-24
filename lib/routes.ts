export const sitePaths = {
  home: '/tech-blog',
  videos: '/tech-blog/videos',
  search: '/tech-blog/search',
  authors: '/tech-blog/authors',
  forum: '/tech-blog/forum-preview',
}

export const adminPaths = {
  home: '/admin',
  articles: '/admin/articles',
  newArticle: '/admin/articles/new',
  videos: '/admin/videos',
  newVideo: '/admin/videos/new',
  settings: '/admin/settings',
}

export function articlePath(slug: string) {
  return `/tech-blog/article/${slug}`
}

export function categoryPath(slug: string) {
  return `/tech-blog/category/${slug}`
}

export function forumThreadPath(slug: string) {
  return `/tech-blog/forum-preview#${slug}`
}

export function videoPath(slug: string) {
  return `/tech-blog/videos#${slug}`
}
