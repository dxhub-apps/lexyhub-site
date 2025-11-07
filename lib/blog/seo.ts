import { Metadata } from 'next';
import { Post } from './types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lexyhub.com';
const SITE_NAME = 'LexiHub';

export function generatePostMetadata(post: Post): Metadata {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.ogImage || post.cover || `${SITE_URL}/blog/og-default.png`;

  return {
    title: `${post.title} | ${SITE_NAME} Blog`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
    alternates: {
      canonical: post.canonical || url,
    },
  };
}

export function generateBlogMetadata(): Metadata {
  return {
    title: `Blog | ${SITE_NAME}`,
    description:
      'Insights, tips, and strategies for e-commerce sellers. Learn how to optimize your marketplace listings, discover trending products, and grow your business.',
    openGraph: {
      title: `${SITE_NAME} Blog`,
      description:
        'Expert insights on marketplace optimization, keyword research, and e-commerce growth strategies.',
      type: 'website',
      url: `${SITE_URL}/blog`,
    },
    alternates: {
      types: {
        'application/rss+xml': `${SITE_URL}/blog/rss.xml`,
      },
    },
  };
}

export function generatePostJsonLd(post: Post, authorName: string) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.cover || `${SITE_URL}/blog/og-default.png`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}
