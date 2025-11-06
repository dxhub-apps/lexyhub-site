import { getAllPosts, getAllTags, getPaginatedPosts } from '@/lib/blog/posts';
import { generateBlogMetadata } from '@/lib/blog/seo';
import PostCard from '@/components/blog/PostCard';
import Pagination from '@/components/blog/Pagination';
import Link from 'next/link';

export const metadata = generateBlogMetadata();

export const revalidate = 3600; // ISR: revalidate every hour

export default function BlogPage() {
  const { posts, totalPages, currentPage } = getPaginatedPosts(1, 10);
  const tags = getAllTags().slice(0, 10);

  return (
    <div className="blog-page">
      <div className="shell">
        <header className="blog-page__header">
          <h1>Blog</h1>
          <p className="blog-page__subtitle">
            Insights, tips, and strategies for e-commerce sellers. Learn how to optimize your marketplace listings, discover trending products, and grow your business.
          </p>
        </header>

        {tags.length > 0 && (
          <div className="blog-page__tags">
            <div className="blog-page__tags-label">Popular topics:</div>
            <div className="blog-page__tags-list">
              {tags.map(({ tag, count }) => (
                <Link key={tag} href={`/blog/tags/${tag}`} className="tag">
                  {tag} <span className="tag__count">({count})</span>
                </Link>
              ))}
              <Link href="/blog/tags" className="tag tag--all">
                View all tags →
              </Link>
            </div>
          </div>
        )}

        <div className="blog-page__grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
      </div>
    </div>
  );
}
