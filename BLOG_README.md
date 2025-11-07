# LexiHub Blog System

Production-grade MDX blog implementation with Next.js 15 App Router.

## Features

- ✅ **MDX Support**: Write blog posts in MDX with full React component support
- ✅ **Type-Safe**: Fully typed with TypeScript
- ✅ **SEO Optimized**: OpenGraph, Twitter Cards, JSON-LD, and sitemap
- ✅ **RSS Feed**: Auto-generated at `/blog/rss.xml`
- ✅ **Search**: Client-side search with Fuse.js
- ✅ **Tags & Authors**: Organize posts by tags and authors
- ✅ **Pagination**: 10 posts per page with clean URLs
- ✅ **Related Posts**: Automatic related post suggestions
- ✅ **Reading Time**: Auto-calculated reading time
- ✅ **ISR**: Incremental Static Regeneration (revalidates every hour)
- ✅ **Draft Support**: Hide draft posts in production

## Directory Structure

```
/content
  /blog
    *.mdx              # Blog post files
  /authors
    *.yml              # Author data files

/app/blog
  page.tsx             # Blog index
  [slug]/page.tsx      # Individual post
  page/[page]/page.tsx # Pagination
  tags/page.tsx        # Tag cloud
  tags/[tag]/page.tsx  # Tag page
  authors/[author]/page.tsx # Author page
  rss.xml/route.ts     # RSS feed

/lib/blog
  types.ts             # TypeScript types
  posts.ts             # Post utilities
  authors.ts           # Author utilities
  seo.ts               # SEO utilities
  rss.ts               # RSS generation

/components/blog
  PostCard.tsx         # Post preview card
  PostMeta.tsx         # Post metadata display
  TOC.tsx              # Table of contents
  MDXComponents.tsx    # MDX component overrides
  Search.tsx           # Search component
  Pagination.tsx       # Pagination component
  AuthorBox.tsx        # Author info box

/public/blog
  /covers              # Post cover images
  /authors             # Author avatars
  og-default.png       # Default OG image
```

## Adding a New Blog Post

1. Create a new `.mdx` file in `/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
slug: your-post-slug
date: 2025-01-15
tags: ["tag1", "tag2", "tag3"]
author: lexyhub
cover: /blog/covers/your-image.png
draft: false
---

Your content here in MDX format...

## Headings work

- Lists work
- With **markdown** formatting

<YourCustomComponent />
```

2. Add a cover image (optional):
   - Place in `/public/blog/covers/`
   - Recommended size: 1200x630px

3. The post will automatically:
   - Generate reading time
   - Create SEO metadata
   - Include in sitemap
   - Add to RSS feed
   - Show on blog index

## Adding a New Author

Create a `.yml` file in `/content/authors/`:

```yaml
name: Author Name
avatar: /blog/authors/author-name.png
bio: A short bio about the author
website: https://example.com
twitter: https://twitter.com/username
linkedin: https://linkedin.com/in/username
github: https://github.com/username
```

## Environment Variables

Add to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://lexyhub.com
```

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Blog Routes

- `/blog` - Blog index with search and tags
- `/blog/page/2` - Paginated blog posts
- `/blog/[slug]` - Individual post
- `/blog/tags` - All tags
- `/blog/tags/[tag]` - Posts by tag
- `/blog/authors/[author]` - Posts by author
- `/blog/rss.xml` - RSS feed
- `/sitemap.xml` - Sitemap (includes blog routes)

## Draft Posts

Set `draft: true` in frontmatter to hide posts in production:

```yaml
draft: true
```

Draft posts will still appear in:
- Development (`npm run dev`)
- Preview deployments on Vercel

## ISR Configuration

Posts revalidate every hour (3600 seconds). To change:

Edit `revalidate` in blog page files:

```typescript
export const revalidate = 3600; // seconds
```

## Custom MDX Components

Add custom React components to MDX posts:

1. Create component in `/components/blog/`
2. Import in `/components/blog/MDXComponents.tsx`
3. Add to `mdxComponents` object
4. Use in MDX: `<YourComponent />`

## Subdomain Setup (Optional)

To use `blog.lexyhub.com`:

1. Add domain in Vercel project settings
2. Point DNS CNAME to Vercel
3. Add middleware (optional) for canonical URLs

## Deployment

The blog works out-of-the-box on Vercel:

1. Push to GitHub
2. Deploy with Vercel
3. Set `NEXT_PUBLIC_SITE_URL` environment variable
4. Done!

## Performance

- Static generation with ISR
- Optimized images with next/image
- Code splitting per route
- Client-side search (no backend needed)
- Target: Lighthouse score ≥ 90

## Troubleshooting

**Build fails with MDX error:**
- Check MDX syntax in posts
- Ensure frontmatter is valid YAML
- Verify all required fields are present

**Images not loading:**
- Images must be in `/public/blog/`
- Use absolute paths: `/blog/covers/image.png`
- Verify image files exist

**RSS feed empty:**
- Check posts have `draft: false`
- Verify date format: `YYYY-MM-DD`
- Check `NEXT_PUBLIC_SITE_URL` is set

## License

Part of the LexiHub project. Internal use only.
