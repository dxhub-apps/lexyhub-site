/**
 * A/B Test Configuration
 *
 * Control the theme A/B test from this file.
 * After determining a winner, set enabled to false and set the winner theme.
 */

export const abTestConfig = {
  /**
   * Enable/disable the A/B test
   * Set to false when you've picked a winner
   */
  enabled: true,

  /**
   * The winning theme (only used when enabled = false)
   * Options: 'dark' | 'light'
   */
  winner: 'dark' as 'dark' | 'light',

  /**
   * Traffic split (when enabled = true)
   * Set to 0.5 for 50/50 split
   * Set to 0.7 for 70% dark / 30% light, etc.
   */
  darkThemePercentage: 0.5,

  /**
   * Cookie/localStorage key for storing theme assignment
   */
  storageKey: 'lexyhub_theme_variant',

  /**
   * Cookie expiration in days
   */
  cookieExpirationDays: 30,
};

export type Theme = 'dark' | 'light';
