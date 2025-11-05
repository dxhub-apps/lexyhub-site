import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
