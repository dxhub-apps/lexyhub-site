import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export default function Pagination({ currentPage, totalPages, basePath = '/blog' }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = [];
  const showPages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
  let endPage = Math.min(totalPages, startPage + showPages - 1);

  if (endPage - startPage + 1 < showPages) {
    startPage = Math.max(1, endPage - showPages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const getPageUrl = (page: number) => {
    if (page === 1) return basePath;
    return `${basePath}/page/${page}`;
  };

  return (
    <nav className="pagination">
      {currentPage > 1 && (
        <Link href={getPageUrl(currentPage - 1)} className="pagination__link pagination__link--prev">
          ← Previous
        </Link>
      )}
      <div className="pagination__pages">
        {startPage > 1 && (
          <>
            <Link href={getPageUrl(1)} className="pagination__page">
              1
            </Link>
            {startPage > 2 && <span className="pagination__ellipsis">...</span>}
          </>
        )}
        {pages.map((page) => (
          <Link
            key={page}
            href={getPageUrl(page)}
            className={`pagination__page ${page === currentPage ? 'pagination__page--active' : ''}`}
          >
            {page}
          </Link>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="pagination__ellipsis">...</span>}
            <Link href={getPageUrl(totalPages)} className="pagination__page">
              {totalPages}
            </Link>
          </>
        )}
      </div>
      {currentPage < totalPages && (
        <Link href={getPageUrl(currentPage + 1)} className="pagination__link pagination__link--next">
          Next →
        </Link>
      )}
      </nav>
  );
}
