import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jhonny Vargas Arias | Senior Software Engineer Portfolio',
  description: 'Jhonny Vargas Arias\' portfolio showcasing software engineering projects, skills, and experience in front-end and back-end development. Connect with me on GitHub: https://github.com/jhonnyvargasarias',
  openGraph: {
    type: 'website',
    url: 'https://jhonnyvargasarias.com',
    title: 'Jhonny Vargas Arias | Senior Software Engineer Portfolio',
    description: 'Explore Jhonny Vargas Arias\' portfolio featuring innovative software engineering projects and comprehensive skills in modern technologies.',
    images: [
      {
        url: 'https://jhonnyvargasarias.com/images/portfolio-preview.jpg',
        width: 800,
        height: 600,
        alt: 'Portfolio preview image',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://jhonnyvargasarias.com',
  },
};

export const viewport: Viewport = {
 width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
