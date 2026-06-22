export const sitePaths = {
  home: '/tech-blog',
  videos: '/tech-blog/videos',
  search: '/tech-blog/search',
  authors: '/tech-blog/authors',
  forum: '/tech-blog/forum-preview',
}

export function articlePath(slug: string) {
  return `/tech-blog/article/${slug}`
}

export function categoryPath(slug: string) {
  return `/tech-blog/category/${slug}`
}
