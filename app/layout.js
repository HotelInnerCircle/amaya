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
  title: 'Amaya Real Estate | Homes Designed for Senior Living',
  description:
    'Amaya Real Estate helps you find and buy residential and commercial properties with verified listings, trusted service, and the best deals.',
  keywords:
    'Amaya Real Estate, buy senior living homes, retirement homes, senior citizen housing, assisted living homes, buy retirement property',
  openGraph: {
    title: "Amaya Real Estate | Buy Your Dream Property",
    description:
      "Discover and buy residential and commercial properties with Amaya Real Estate. Verified listings, trusted service, and the best deals.",

    siteName: "Amaya Real Estate",
    images: [
      {
        url: "/assests/Amaya_Logo_Final_copy.png",
        width: 1200,
        height: 630,
        alt: "Amaya Real Estate - Buy Property",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amaya Real Estate | Buy Your Dream Property",
    description:
      "Find and buy your dream property with Amaya Real Estate. Explore verified residential and commercial listings.",
    images: ["/assests/Amaya_Logo_Final.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
