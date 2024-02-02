import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body className={inter.className}>
        <nav>
          <ul className="flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link prefetch={false} href="/about">About</Link></li>
            <li><Link prefetch={false} href="/blog">Blogs</Link></li>
          </ul>
        </nav>
        <hr/>
        {children}
      </body>
    </html>
  );
}
