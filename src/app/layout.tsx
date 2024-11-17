import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
