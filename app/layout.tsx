import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mini-Commerce | Jewelry',
  description: 'Discover elegant, timeless jewelry for every occasion.',
  openGraph: {
    title: 'Mini-Commerce',
    description: 'Shop jewelry that defines elegance.',
    images: ['/images/img1.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDark =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('theme-preference') || '{}')?.state?.isDark
      : false;

  console.log('isDark:', isDark);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased ${
          isDark ? 'dark' : ''
        }`}
      >
        <Providers>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
