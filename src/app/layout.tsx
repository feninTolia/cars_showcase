import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-w-[320px]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
