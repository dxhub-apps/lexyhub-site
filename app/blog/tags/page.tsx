import { getAllTags } from '@/lib/blog/posts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Tags | LexiHub',
  description: 'Browse all blog post topics and categories.',
};

export const revalidate = 3600;

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="tags-page">
      <div className="shell">
        <header className="tags-page__header">
          <Link href="/blog" className="tags-page__back">
            ← Back to Blog
          </Link>
          <h1>All Tags</h1>
          <p className="tags-page__subtitle">
            Browse posts by topic. Click any tag to see related articles.
          </p>
        </header>

        <div className="tags-page__cloud">
          {tags.map(({ tag, count }) => {
            const size = Math.min(2.5, 1 + (count / 10));
            return (
              <Link
                key={tag}
                href={`/blog/tags/${tag}`}
                className="tag-cloud-item"
                style={{ fontSize: `${size}rem` }}
              >
                {tag} <span className="tag-cloud-item__count">({count})</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
