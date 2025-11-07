import Link from 'next/link';
import { Post } from '@/lib/blog/types';
import { format } from 'date-fns';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      {post.cover && (
        <Link href={`/blog/${post.slug}`} className="post-card__cover">
          <img src={post.cover} alt={post.title} />
        </Link>
      )}
      <div className="post-card__content">
        <div className="post-card__meta">
          <time dateTime={post.date}>{format(new Date(post.date), 'MMM d, yyyy')}</time>
          <span className="post-card__divider">·</span>
          <span>{post.readingTime} min read</span>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h2 className="post-card__title">{post.title}</h2>
        </Link>
        <p className="post-card__excerpt">{post.excerpt}</p>
        <div className="post-card__tags">
          {post.tags.slice(0, 3).map((tag) => (
            <Link key={tag} href={`/blog/tags/${tag.toLowerCase()}`} className="tag">
              {tag}
            </Link>
          ))}
        </div>
      </div>
      </article>
  );
}
