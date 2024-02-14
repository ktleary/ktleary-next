import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import TopNav from "./components/TopNav";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ktleary: Home of Kevin Leary",
  description: "Kevin Leary is a software engineer in the Boston area.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800">
        <section className="flex flex-col">
          <TopNav />
        </section>

        {children}
        <Footer />
      </body>
    </html>
  );
}
