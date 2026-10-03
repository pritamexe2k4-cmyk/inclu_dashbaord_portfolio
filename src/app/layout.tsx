import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IncluHub Dashboard",
  description: "Program workflow dashboard for IncluHub post-academic support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
