
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BSC CSIT NOTES - Far Western University',
  description: 'Your comprehensive resource for Computer Science and Information Technology study materials, notes, and exam preparation.',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}