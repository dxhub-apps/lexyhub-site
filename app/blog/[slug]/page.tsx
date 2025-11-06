import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog/posts';
import { getAuthorById } from '@/lib/blog/authors';
import { generatePostMetadata, generatePostJsonLd } from '@/lib/blog/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/blog/MDXComponents';
import PostMeta from '@/components/blog/PostMeta';
import AuthorBox from '@/components/blog/AuthorBox';
import PostCard from '@/components/blog/PostCard';
import TOC from '@/components/blog/TOC';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

export const revalidate = 3600; // ISR: revalidate every hour

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generatePostMetadata(post);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = getAuthorById(post.author);
  if (!author) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);
  const jsonLd = generatePostJsonLd(post, author.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="blog-post">
        <div className="shell">
          <div className="blog-post__container">
            <div className="blog-post__sidebar">
              <TOC />
            </div>

            <div className="blog-post__main">
              <header className="blog-post__header">
                <Link href="/blog" className="blog-post__back">
                  ← Back to Blog
                </Link>
                <h1 className="blog-post__title">{post.title}</h1>
                <p className="blog-post__description">{post.description}</p>
                <PostMeta
                  date={post.date}
                  updated={post.updated}
                  readingTime={post.readingTime}
                  author={author}
                  tags={post.tags}
                />
              </header>

              {post.cover && (
                <div className="blog-post__cover">
                  <img src={post.cover} alt={post.title} />
                </div>
              )}

              <div className="blog-post__content prose">
                <MDXRemote
                  source={post.content}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [
                        rehypeSlug,
                        [
                          rehypePrettyCode,
                          {
                            theme: 'github-dark',
                            keepBackground: false,
                          },
                        ],
                        [
                          rehypeAutolinkHeadings,
                          {
                            behavior: 'wrap',
                          },
                        ],
                      ],
                    },
                  }}
                />
              </div>

              <div className="blog-post__tags">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/blog/tags/${tag.toLowerCase()}`} className="tag">
                    {tag}
                  </Link>
                ))}
              </div>

              <AuthorBox author={author} />

              {relatedPosts.length > 0 && (
                <section className="blog-post__related">
                  <h2>Related Posts</h2>
                  <div className="blog-post__related-grid">
                    {relatedPosts.map((relatedPost) => (
                      <PostCard key={relatedPost.slug} post={relatedPost} />
                    ))}
                  </div>
                </section>
              )}

              <div className="blog-post__newsletter">
                <h3>Get More Insights Like This</h3>
                <p>Join sellers who receive our best tips and strategies directly in their inbox.</p>
                <form className="newsletter-form" action="/api/newsletter/subscribe" method="POST">
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="newsletter-form__input"
                  />
                  <button type="submit" className="btn btn--primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </article>

      </>
  );
}
