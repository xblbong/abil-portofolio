import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abil-portofolio-six.vercel.app'

  const routes = [
    '',             // Ini mewakili Home, About, Skills, dan Contact jika semuanya satu halaman
    '/projects',    // Masukkan jika ini adalah halaman terpisah (misal: abil.../projects)
    '/experience',
    '/certificates',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}
