import { format } from 'date-fns';
import { Author } from '@/lib/blog/types';

interface PostMetaProps {
  date: string;
  updated?: string;
  readingTime: number;
  author: Author;
  tags: string[];
}

export default function PostMeta({ date, updated, readingTime, author, tags }: PostMetaProps) {
  return (
    <div className="post-meta">
      <div className="post-meta__main">
        <div className="post-meta__author">
          {author.avatar && (
            <img src={author.avatar} alt={author.name} className="post-meta__avatar" />
          )}
          <div>
            <div className="post-meta__author-name">{author.name}</div>
            <div className="post-meta__date">
              <time dateTime={date}>{format(new Date(date), 'MMMM d, yyyy')}</time>
              {updated && updated !== date && (
                <>
                  <span className="post-meta__divider">·</span>
                  <span>Updated {format(new Date(updated), 'MMM d, yyyy')}</span>
                </>
              )}
              <span className="post-meta__divider">·</span>
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
