import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "LexyHub | Marketplace Signal Platform",
  description: "Stop sorting through messy dashboards. LexyHub unifies real-time search data from Amazon, Etsy, and Google into one clean, actionable feed.",
  keywords: ["marketplace", "Amazon", "Etsy", "Google Trends", "e-commerce", "data analytics", "signals"],
  authors: [{ name: "LexyHub" }],
  openGraph: {
    title: "LexyHub | Marketplace Signal Platform",
    description: "See What Buyers Want. Right Now.",
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
