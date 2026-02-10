import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DataDive | Competitor Intelligence & Data Analytics",
  description:
    "We deliver and analyze data for companies that want to monitor their competitors. Automated competitor intelligence, real-time insights, and structured analytics for any industry.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-800 font-bold"
            >
              <span className="relative h-9 w-9 overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="DataDive logo"
                  fill
                  sizes="36px"
                  priority
                  className="object-contain"
                />
              </span>
              DataDive
            </Link>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
        <main className="pt-14">{children}</main>
      </body>
    </html>
  );
}
