import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leander Vanderbiesen | Frontend Developer in Zürich',
  description:
    'Frontend Developer in Zürich specializing in React, TypeScript, and React Native. 5+ years building scalable web and mobile apps for Brussels Airport, Eneco, and more.',
  icons: {
    icon: [
      { url: '/favicon-16x16.ico', sizes: '16x16', type: 'image/ico' },
      { url: '/favicon-32x32.ico', sizes: '32x32', type: 'image/ico' },
      { url: '/favicon-48x48.ico', sizes: '48x48', type: 'image/ico' },
    ],
  },
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
