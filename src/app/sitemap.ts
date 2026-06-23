import { MetadataRoute } from 'next';
import { courseRegistry } from '@/lib/courses/course-registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theaplab.org';

  // Base routes
  const routes = [
    '',
    '/about',
    '/community-impact',
    '/contact',
    '/join',
    '/login',
    '/privacy',
    '/terms',
    '/live-analytics',
    '/dashboard'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  // Dynamic course dashboard routes
  const courseSlugs = Object.keys(courseRegistry);
  const courseRoutes = courseSlugs.map((slug) => ({
    url: `${baseUrl}/dashboard/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  return [...routes, ...courseRoutes];
}
