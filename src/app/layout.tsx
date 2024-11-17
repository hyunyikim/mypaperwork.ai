import type { Metadata } from 'next';
import { Bitter } from 'next/font/google';

import './globals.css';

const bitter = Bitter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'mypaperwork',
  description: 'Never fill a form again.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bitter.className}>
      <body>{children}</body>
    </html>
  );
}
