import './globals.css';
import type { Metadata } from 'next';
import Masthead from './components/Masthead';

export const metadata: Metadata = {
  title: 'Yahya Masri',
  description: 'My personal portfolio showcasing my work and experience',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Masthead />
        {children}
      </body>
    </html>
  );
} 