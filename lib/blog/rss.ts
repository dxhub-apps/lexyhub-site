import { Post } from './types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lexyhub.com';
const SITE_NAME = 'LexiHub';
const SITE_DESCRIPTION =
  'Insights, tips, and strategies for e-commerce sellers. Learn how to optimize your marketplace listings and grow your business.';

export function generateRssFeed(posts: Post[]): string {
  const latestPosts = posts.slice(0, 20);
  const buildDate = new Date().toUTCString();

  const items = latestPosts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();

      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>${post.author}</author>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join('\n      ')}
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;
}
