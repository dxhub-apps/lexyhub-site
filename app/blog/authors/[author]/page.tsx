import { getAllPosts } from '@/lib/blog/posts';
import { getAuthorById, getAllAuthors } from '@/lib/blog/authors';
import PostCard from '@/components/blog/PostCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 3600;

export async function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    author: author.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ author: string }> }): Promise<Metadata> {
  const { author: authorId } = await params;
  const author = getAuthorById(authorId);

  if (!author) {
    return {};
  }

  return {
    title: `${author.name} - Blog Authors | LexiHub`,
    description: author.bio,
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ author: string }> }) {
  const { author: authorId } = await params;
  const author = getAuthorById(authorId);

  if (!author) {
    notFound();
  }

  const posts = getAllPosts().filter((post) => post.author === authorId);

  return (
    <div className="author-page">
      <div className="shell">
        <header className="author-page__header">
          <Link href="/blog" className="author-page__back">
            ← Back to Blog
          </Link>
          <div className="author-page__info">
            {author.avatar && <img src={author.avatar} alt={author.name} className="author-page__avatar" />}
            <div>
              <h1>{author.name}</h1>
              <p className="author-page__bio">{author.bio}</p>
              {(author.website || author.twitter || author.linkedin || author.github) && (
                <div className="author-page__links">
                  {author.website && (
                    <a href={author.website} target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  )}
                  {author.twitter && (
                    <a href={author.twitter} target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  )}
                  {author.linkedin && (
                    <a href={author.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  )}
                  {author.github && (
                    <a href={author.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="author-page__count">
            {posts.length} post{posts.length !== 1 ? 's' : ''}
          </div>
        </header>

        <div className="author-page__grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
