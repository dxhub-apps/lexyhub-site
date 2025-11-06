export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  tags: string[];
  author: string;
  cover?: string;
  draft?: boolean;
  canonical?: string;
  ogImage?: string;
}

export interface Post extends PostFrontmatter {
  content: string;
  readingTime: number;
  excerpt: string;
}

export interface PostWithAuthor extends Post {
  authorData: Author;
}
