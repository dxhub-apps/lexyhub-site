import { getAllPosts } from '@/lib/blog/posts';
import { generateRssFeed } from '@/lib/blog/rss';

export async function GET() {
  const posts = getAllPosts();
  const rss = generateRssFeed(posts);

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
