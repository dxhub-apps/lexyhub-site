import { Author } from '@/lib/blog/types';

interface AuthorBoxProps {
  author: Author;
}

export default function AuthorBox({ author }: AuthorBoxProps) {
  return (
    <div className="author-box">
      {author.avatar && <img src={author.avatar} alt={author.name} className="author-box__avatar" />}
      <div className="author-box__content">
        <div className="author-box__name">Written by {author.name}</div>
        <p className="author-box__bio">{author.bio}</p>
        {(author.website || author.twitter || author.linkedin || author.github) && (
          <div className="author-box__links">
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
  );
}
