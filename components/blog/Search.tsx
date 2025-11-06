'use client';

import { useState, useEffect, useMemo } from 'react';
import { Post } from '@/lib/blog/types';
import Fuse from 'fuse.js';
import PostCard from './PostCard';

interface SearchProps {
  posts: Post[];
}

export default function Search({ posts }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Post[]>(posts);

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ['title', 'description', 'tags', 'content'],
        threshold: 0.3,
        includeScore: true,
      }),
    [posts]
  );

  useEffect(() => {
    if (!query.trim()) {
      setResults(posts);
      return;
    }

    const timer = setTimeout(() => {
      const searchResults = fuse.search(query);
      setResults(searchResults.map((result) => result.item));
    }, 200);

    return () => clearTimeout(timer);
  }, [query, fuse, posts]);

  return (
    <div className="search">
      <div className="search__input-wrapper">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search__input"
        />
        {query && (
          <button onClick={() => setQuery('')} className="search__clear">
            ×
          </button>
        )}
      </div>
      {query && (
        <div className="search__results-count">
          Found {results.length} post{results.length !== 1 ? 's' : ''}
        </div>
      )}
      <div className="search__results">
        {results.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      </div>
  );
}
