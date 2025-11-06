import { getAllPosts, getPaginatedPosts } from '@/lib/blog/posts';
import { generateBlogMetadata } from '@/lib/blog/seo';
import PostCard from '@/components/blog/PostCard';
import Pagination from '@/components/blog/Pagination';
import { notFound } from 'next/navigation';

export const metadata = generateBlogMetadata();

export const revalidate = 3600; // ISR: revalidate every hour

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / 10);

  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2), // Start from page 2 (page 1 is /blog)
  }));
}

export default async function BlogPaginationPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const pageNum = parseInt(page, 10);

  if (isNaN(pageNum) || pageNum < 2) {
    notFound();
  }

  const { posts, totalPages, currentPage } = getPaginatedPosts(pageNum, 10);

  if (posts.length === 0 || currentPage > totalPages) {
    notFound();
  }

  return (
    <div className="blog-page">
      <div className="shell">
        <header className="blog-page__header">
          <h1>Blog - Page {currentPage}</h1>
        </header>

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
