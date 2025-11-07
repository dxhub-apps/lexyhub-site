# A/B Testing: Dark vs Light Theme

This project includes an A/B testing system to compare dark and light themes while maintaining the futuristic Web3 glassmorphism style.

## How It Works

The system randomly assigns visitors to either the **dark theme** or **light theme** and stores their assignment in `localStorage` to ensure consistency across visits.

### Features

- **50/50 traffic split** (configurable)
- **Persistent assignment** via localStorage and cookies
- **Both themes** feature futuristic Web3 glassmorphism design
- **Neural network animation** adapts to theme automatically
- **Easy winner selection** via config file

## Configuration

All A/B test settings are managed in **`abtest.config.ts`**:

```typescript
export const abTestConfig = {
  // Enable/disable the A/B test
  enabled: true,  // Set to false when you've picked a winner

  // The winning theme (only used when enabled = false)
  winner: 'dark',  // Options: 'dark' | 'light'

  // Traffic split (when enabled = true)
  darkThemePercentage: 0.5,  // 0.5 = 50/50 split

  // Storage settings
  storageKey: 'lexyhub_theme_variant',
  cookieExpirationDays: 30,
};
```

## How to Pick a Winner

Once you've collected enough data and chosen a winner:

1. Open **`abtest.config.ts`**
2. Set `enabled: false`
3. Set `winner: 'dark'` or `winner: 'light'`
4. Commit and deploy

Example:
```typescript
export const abTestConfig = {
  enabled: false,           // Disable A/B test
  winner: 'dark',           // Use dark theme for all users
  // ... rest of config
};
```

## Themes Overview

### Dark Theme
- **Background:** Deep black (`#0a0a0a`)
- **Text:** Light gray/white
- **Glass:** White with low opacity (5%)
- **Neural network:** Light gray nodes and connections
- **Best for:** Modern, tech-focused aesthetic

### Light Theme
- **Background:** White (`#ffffff`)
- **Text:** Dark slate
- **Glass:** White with high opacity (70%)
- **Neural network:** Dark gray nodes and connections
- **Best for:** Clean, professional appearance

Both themes maintain:
- ✅ Glassmorphism effects with backdrop blur
- ✅ Animated neural network background
- ✅ Futuristic Web3 styling
- ✅ Subtle, professional design

## Testing Locally

To test both themes on your local machine:

1. **Clear localStorage** to get a new random assignment:
   ```javascript
   // In browser console:
   localStorage.removeItem('lexyhub_theme_variant');
   location.reload();
   ```

2. **Force a specific theme** (for testing):
   ```javascript
   // In browser console:
   localStorage.setItem('lexyhub_theme_variant', 'dark');
   location.reload();

   // Or for light:
   localStorage.setItem('lexyhub_theme_variant', 'light');
   location.reload();
   ```

3. **Temporarily disable A/B test** and set winner in `abtest.config.ts`

## Analytics Integration

To track which theme performs better, add analytics tracking to your existing setup:

```javascript
// Example: Track theme variant
const theme = localStorage.getItem('lexyhub_theme_variant');
analytics.track('page_view', {
  theme_variant: theme,
  // ... other properties
});
```

## Files Modified

- **`abtest.config.ts`** - Main configuration file
- **`components/ThemeProvider.tsx`** - A/B test logic
- **`components/NeuralBackground.tsx`** - Theme-adaptive neural network
- **`styles/globals.css`** - Dual theme CSS variables
- **`app/layout.tsx`** - ThemeProvider integration

## Customization

### Adjust Traffic Split

Change `darkThemePercentage` in `abtest.config.ts`:

```typescript
darkThemePercentage: 0.7,  // 70% dark, 30% light
```

### Modify Theme Colors

Edit CSS variables in `styles/globals.css`:

```css
/* Dark Theme */
[data-theme="dark"] {
  --bg: #0a0a0a;
  --ink: #e8e8e8;
  /* ... */
}

/* Light Theme */
[data-theme="light"] {
  --bg: #ffffff;
  --ink: #0f172a;
  /* ... */
}
```

## Support

For issues or questions about the A/B testing system, check:
1. Browser console for errors
2. localStorage value: `lexyhub_theme_variant`
3. `data-theme` attribute on `<html>` element

---

**Remember:** After picking a winner, update `abtest.config.ts` and redeploy! 🚀
