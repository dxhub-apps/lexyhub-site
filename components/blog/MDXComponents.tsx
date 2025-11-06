import { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 {...props} style={{ fontSize: '2.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem', lineHeight: 1.2 }} />
  ),
  h2: (props) => (
    <h2 {...props} style={{ fontSize: '2rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', lineHeight: 1.3 }} />
  ),
  h3: (props) => (
    <h3 {...props} style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem', lineHeight: 1.4 }} />
  ),
  p: (props) => (
    <p {...props} style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem', color: 'var(--ink-soft)' }} />
  ),
  a: (props) => (
    <a {...props} style={{ color: 'var(--ink)', fontWeight: 600, textDecoration: 'underline', transition: 'var(--transition)' }} />
  ),
  ul: (props) => (
    <ul {...props} style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: 1.7 }} />
  ),
  ol: (props) => (
    <ol {...props} style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: 1.7 }} />
  ),
  li: (props) => (
    <li {...props} style={{ marginBottom: '0.5rem', fontSize: '1.05rem', color: 'var(--ink-soft)' }} />
  ),
  code: (props) => {
    // Inline code
    if (!props.className) {
      return (
        <code
          {...props}
          style={{
            background: 'var(--surface-muted)',
            padding: '0.2rem 0.4rem',
            borderRadius: '4px',
            fontSize: '0.9em',
            fontFamily: 'ui-monospace, monospace',
            border: '1px solid var(--border)',
          }}
        />
      );
    }
    // Code block
    return <code {...props} />;
  },
  pre: (props) => (
    <pre
      {...props}
      style={{
        background: 'var(--surface-dark)',
        color: '#fff',
        padding: '1.5rem',
        borderRadius: 'var(--radius-md)',
        overflow: 'auto',
        marginBottom: '1.5rem',
        fontSize: '0.9rem',
        lineHeight: 1.6,
        border: '1px solid var(--border)',
      }}
    />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      style={{
        borderLeft: '4px solid var(--ink)',
        paddingLeft: '1.5rem',
        marginLeft: 0,
        marginBottom: '1.5rem',
        fontStyle: 'italic',
        color: 'var(--ink-soft)',
      }}
    />
  ),
  table: (props) => (
    <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
      <table
        {...props}
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.95rem',
        }}
      />
    </div>
  ),
  th: (props) => (
    <th
      {...props}
      style={{
        background: 'var(--surface-muted)',
        padding: '0.75rem',
        textAlign: 'left',
        fontWeight: 700,
        borderBottom: '2px solid var(--border)',
      }}
    />
  ),
  td: (props) => (
    <td
      {...props}
      style={{
        padding: '0.75rem',
        borderBottom: '1px solid var(--border)',
      }}
    />
  ),
  hr: (props) => (
    <hr
      {...props}
      style={{
        border: 'none',
        borderTop: '1px solid var(--border)',
        margin: '2.5rem 0',
      }}
    />
  ),
  img: (props) => (
    <img
      {...props}
      style={{
        maxWidth: '100%',
        height: 'auto',
        borderRadius: 'var(--radius-md)',
        margin: '1.5rem 0',
        border: '1px solid var(--border)',
      }}
    />
  ),
};
