'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import { abTestConfig, Theme } from '@/abtest.config';

interface ThemeContextValue {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextValue>({ theme: 'dark' });

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Determine theme based on A/B test config
    const determineTheme = (): Theme => {
      // If A/B test is disabled, use the winner
      if (!abTestConfig.enabled) {
        return abTestConfig.winner;
      }

      // Check if user already has a theme assignment
      const storedTheme = localStorage.getItem(abTestConfig.storageKey);
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }

      // New user - randomly assign theme based on percentage
      const random = Math.random();
      const assignedTheme: Theme = random < abTestConfig.darkThemePercentage ? 'dark' : 'light';

      // Store the assignment
      localStorage.setItem(abTestConfig.storageKey, assignedTheme);

      // Also set a cookie for server-side detection if needed
      document.cookie = `${abTestConfig.storageKey}=${assignedTheme}; max-age=${
        abTestConfig.cookieExpirationDays * 24 * 60 * 60
      }; path=/; SameSite=Lax`;

      return assignedTheme;
    };

    const selectedTheme = determineTheme();
    setTheme(selectedTheme);

    // Apply theme to document
    document.documentElement.setAttribute('data-theme', selectedTheme);

    setMounted(true);
  }, []);

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
}
