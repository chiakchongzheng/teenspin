import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeenSpin - Discover Your Future Career",
  description: "A fun way to explore different careers and find your path. Spin the wheel to discover 50+ careers with free learning resources.",
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
