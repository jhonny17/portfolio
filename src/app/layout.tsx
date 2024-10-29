import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Layout } from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jhonny Vargas Arias | Portfolio',
  description:
    "Jhonny Vargas Arias' portfolio showcasing software engineering projects, skills, and experience in front-end and back-end development. Connect with me on GitHub: https://github.com/jhonny17",
  openGraph: {
    type: 'website',
    url: 'https://jhonnyvargasarias.com',
    title: 'Jhonny Vargas Arias | Portfolio',
    description:
      "Explore Jhonny Vargas Arias' portfolio featuring innovative software engineering projects and comprehensive skills in modern technologies.",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
