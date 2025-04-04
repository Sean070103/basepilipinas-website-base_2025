import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Base Philippines',
  description:
    'Base Philippines accelerates the most promising projects in the Solana ecosystem. As the official Solana Superteam in the Philippines, we empower innovation and growth in Web3.',
  applicationName: '',
  generator: '',
  keywords: '',
  referrer: 'origin',
  creator: '',
  publisher: '',
  robots: 'index, follow',
  icons: '',
  openGraph: {
    type: 'website',
    url: '',
    title: '',
    description: '',
    siteName: '',
    images: [
      {
        url: ``,
      },
    ],
  },
  twitter: {
    site: '',
    creator: '',
    description: '',
    title: '',
    images: [
      {
        url: ``,
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: '',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  abstract: '',
  category: '',
  classification: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='mx-auto p-6'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
