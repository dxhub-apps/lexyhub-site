export type ExtensionAuthMode = 'magic_link' | 'oauth' | 'api_key';

export interface ExtensionConfig {
  name: string;
  description: string;
  supportEmail: string;
  minSupportedVersion: string;
  branding: {
    logo: string;
    wordmark: string;
    accentColor: string;
    backgroundColor: string;
  };
  auth: {
    mode: ExtensionAuthMode;
    loginUrl: string;
    signupUrl: string;
    statusUrl: string;
    enforceLogin: boolean;
    refreshIntervalSeconds: number;
    issuer: string;
  };
  endpoints: {
    apiBaseUrl: string;
    insightsUrl: string;
    watchlistUrl: string;
    profileUrl: string;
  };
  features: {
    watchlistSync: boolean;
    keywordHighlighting: boolean;
    aiBriefings: boolean;
    trialLengthDays: number;
  };
}

interface ConfigOptions {
  origin?: string;
}

const DEFAULT_TRIAL_DAYS = Number(process.env.NEXT_PUBLIC_EXTENSION_TRIAL_DAYS ?? 14);
const DEFAULT_REFRESH_SECONDS = Number(
  process.env.NEXT_PUBLIC_EXTENSION_REFRESH_INTERVAL ?? 60 * 30,
);

function getSiteOrigin(explicitOrigin?: string): string {
  if (explicitOrigin) {
    return explicitOrigin;
  }

  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) {
    return envUrl.replace(/\/$/, '');
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    const hasProtocol = vercelUrl.startsWith('http');
    return `${hasProtocol ? '' : 'https://'}${vercelUrl}`.replace(/\/$/, '');
  }

  return 'http://localhost:3000';
}

function withOrigin(pathOrUrl: string, origin: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  if (!pathOrUrl.startsWith('/')) {
    return `${origin}/${pathOrUrl}`;
  }

  return `${origin}${pathOrUrl}`;
}

export function buildExtensionConfig(options: ConfigOptions = {}): ExtensionConfig {
  const origin = getSiteOrigin(options.origin);
  const appBase = process.env.NEXT_PUBLIC_EXTENSION_APP_URL ?? origin;
  const apiBase = process.env.NEXT_PUBLIC_EXTENSION_API_BASE_URL ?? `${appBase}/api`;
  const loginUrl = process.env.NEXT_PUBLIC_EXTENSION_LOGIN_URL ?? `${appBase}/login`;
  const signupUrl = process.env.NEXT_PUBLIC_EXTENSION_SIGNUP_URL ?? `${appBase}/signup`;
  const statusUrl = process.env.NEXT_PUBLIC_EXTENSION_AUTH_STATUS_URL ?? `${apiBase}/auth/status`;
  const logoPath = process.env.NEXT_PUBLIC_EXTENSION_LOGO_PATH ?? '/assets/Lexyhub_logo_dark.svg';
  const wordmarkPath = process.env.NEXT_PUBLIC_EXTENSION_WORDMARK_PATH ?? '/assets/Lexyhub_logo_white.svg';

  return {
    name: 'LexyHub',
    description: 'Real-time marketplace signal copilot for Etsy and Amazon sellers.',
    supportEmail: 'support@lexyhub.com',
    minSupportedVersion: process.env.NEXT_PUBLIC_EXTENSION_MIN_VERSION ?? '1.0.0',
    branding: {
      logo: withOrigin(logoPath, origin),
      wordmark: withOrigin(wordmarkPath, origin),
      accentColor: process.env.NEXT_PUBLIC_EXTENSION_ACCENT_COLOR ?? '#E4B306',
      backgroundColor: process.env.NEXT_PUBLIC_EXTENSION_BG_COLOR ?? '#050713',
    },
    auth: {
      mode: (process.env.NEXT_PUBLIC_EXTENSION_AUTH_MODE as ExtensionAuthMode) ?? 'magic_link',
      loginUrl,
      signupUrl,
      statusUrl,
      enforceLogin: (process.env.NEXT_PUBLIC_EXTENSION_ENFORCE_LOGIN ?? 'true') !== 'false',
      refreshIntervalSeconds: DEFAULT_REFRESH_SECONDS,
      issuer: new URL(statusUrl).origin,
    },
    endpoints: {
      apiBaseUrl: apiBase,
      insightsUrl: `${apiBase}/insights`,
      watchlistUrl: `${apiBase}/watchlist`,
      profileUrl: `${appBase}/profile`,
    },
    features: {
      watchlistSync: true,
      keywordHighlighting: true,
      aiBriefings: (process.env.NEXT_PUBLIC_EXTENSION_ENABLE_AI ?? 'true') !== 'false',
      trialLengthDays: DEFAULT_TRIAL_DAYS,
    },
  };
}
