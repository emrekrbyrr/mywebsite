import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: site.seo.title,
  description: site.seo.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "Full-Stack Developer",
    "React",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Linux",
    "EMC",
    "Elektronik ve Haberleşme Mühendisliği",
  ],
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-black text-zinc-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
