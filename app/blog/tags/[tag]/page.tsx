import { getAllTags, getPostsByTag } from '@/lib/blog/posts';
import PostCard from '@/components/blog/PostCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 3600;

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map(({ tag }) => ({
    tag: tag.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag: tagParam } = await params;
  const tag = decodeURIComponent(tagParam);
  const posts = getPostsByTag(tag);

  return {
    title: `${tag} - Blog Tags | LexiHub`,
    description: `Read ${posts.length} post${posts.length !== 1 ? 's' : ''} about ${tag}.`,
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagParam } = await params;
  const tag = decodeURIComponent(tagParam);
  const posts = getPostsByTag(tag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="tag-page">
      <div className="shell">
        <header className="tag-page__header">
          <Link href="/blog/tags" className="tag-page__back">
            ← All Tags
          </Link>
          <h1>
            Posts tagged <span className="tag-page__tag-name">{tag}</span>
          </h1>
          <p className="tag-page__count">
            {posts.length} post{posts.length !== 1 ? 's' : ''}
          </p>
        </header>

        <div className="tag-page__grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
