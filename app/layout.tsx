import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leander Vanderbiesen | Frontend Developer in Zürich',
  description:
    'Frontend Developer in Zürich specializing in React, TypeScript, and React Native. 5+ years building scalable web and mobile apps for Brussels Airport, Eneco, and more.',
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
