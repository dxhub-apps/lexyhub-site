import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostFrontmatter } from './types';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const frontmatter = data as PostFrontmatter;

    // Calculate reading time
    const stats = readingTime(content);

    // Generate excerpt (first 160 chars of content)
    const excerpt = content
      .replace(/#+\s/g, '') // Remove markdown headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links
      .replace(/[*_~`]/g, '') // Remove markdown formatting
      .trim()
      .substring(0, 160) + '...';

    return {
      ...frontmatter,
      slug: frontmatter.slug || realSlug,
      content,
      readingTime: Math.ceil(stats.minutes),
      excerpt: frontmatter.description || excerpt,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.mdx$/, '')))
    .filter((post): post is Post => post !== null);

  // Filter out drafts in production
  const filteredPosts = posts.filter((post) => {
    if (process.env.NODE_ENV === 'production' && post.draft) {
      return false;
    }
    return true;
  });

  // Sort by date descending
  return filteredPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAllTags(): { tag: string; count: number }[] {
  const allPosts = getAllPosts();
  const tagCount: Record<string, number> = {};

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      const lowerTag = tag.toLowerCase();
      tagCount[lowerTag] = (tagCount[lowerTag] || 0) + 1;
    });
  });

  return Object.entries(tagCount)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const allPosts = getAllPosts().filter((p) => p.slug !== post.slug);

  // Calculate relevance score based on shared tags
  const postsWithScore = allPosts.map((p) => {
    const sharedTags = p.tags.filter((tag) =>
      post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
    );
    return {
      post: p,
      score: sharedTags.length,
    };
  });

  // Sort by score and return top results
  return postsWithScore
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export function getPaginatedPosts(page = 1, perPage = 10): {
  posts: Post[];
  total: number;
  totalPages: number;
  currentPage: number;
} {
  const allPosts = getAllPosts();
  const total = allPosts.length;
  const totalPages = Math.ceil(total / perPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  return {
    posts: allPosts.slice(startIndex, endIndex),
    total,
    totalPages,
    currentPage,
  };
}
