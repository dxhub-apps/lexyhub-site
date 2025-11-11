import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/globals.css";
import "@/styles/blog.css";

export const metadata: Metadata = {
  title: "LexiHub | AI-Powered Cross-Marketplace Commerce Intelligence",
  description: "Turn marketplace data into revenue. AI-powered keyword research, seasonal intelligence, and listing optimization for e-commerce sellers. Free forever plan available.",
  keywords: ["marketplace intelligence", "keyword research", "etsy seo", "amazon keywords", "e-commerce analytics", "ai listing optimization", "market trends", "seasonal planning", "competitor analysis"],
  authors: [{ name: "LexiHub" }],
  openGraph: {
    title: "LexiHub | AI-Powered Commerce Intelligence for Sellers",
    description: "Discover hidden opportunities, optimize listings, and stay ahead of trends with AI-powered marketplace intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8VN37ZX28F"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8VN37ZX28F');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var config = { enabled: true, winner: 'dark', darkThemePercentage: 0.5, storageKey: 'lexyhub_theme_variant' };
                  var theme = 'dark';

                  if (!config.enabled) {
                    theme = config.winner;
                  } else {
                    var stored = localStorage.getItem(config.storageKey);
                    if (stored === 'dark' || stored === 'light') {
                      theme = stored;
                    } else {
                      theme = Math.random() < config.darkThemePercentage ? 'dark' : 'light';
                      localStorage.setItem(config.storageKey, theme);
                    }
                  }

                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
