import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Amaya Real Estate | Buy, Sell & Rent Properties',
  description:
    'Amaya Real Estate helps you buy, sell, and rent residential & commercial properties with trusted service, best deals, and verified listings.',
  keywords:
    'Amaya Real Estate, properties for sale, properties for rent, buy house, rent house, commercial property, residential property, real estate agency',
  openGraph: {
    title: 'Amaya Real Estate | Buy, Sell & Rent Properties',
    description:
      'Buy, sell, and rent properties with Amaya Real Estate. Verified listings and best deals for residential & commercial properties.',

    siteName: 'Amaya Real Estate',
    images: [
      {
        url: '/assests/Amaya_Logo_Final_copy.png',
        width: 1200,
        height: 630,
        alt: 'Amaya Real Estate Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amaya Real Estate | Buy, Sell & Rent Properties',
    description:
      'Find your dream property with Amaya Real Estate. Verified listings for sale & rent.',
    images: ['/assests/Amaya_Logo_Final.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
