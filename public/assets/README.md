# Assets Folder

This folder contains brand assets for the LexyHub website.

## Required Files

Please upload the following files to this directory:

1. **lexyhub_logo_white.svg** - LexyHub logo in white (SVG format)
   - Use this logo on dark backgrounds
   - Recommended size: scalable vector

2. **favicon.png** - Website favicon
   - Recommended size: 512x512px
   - Will be used for browser tabs and bookmarks

## Usage

After uploading, reference these files in your Next.js application:

```jsx
// Logo usage
<img src="/assets/lexyhub_logo_white.svg" alt="LexyHub" />

// Favicon is typically referenced in app/layout.tsx:
<link rel="icon" href="/assets/favicon.png" />
```
