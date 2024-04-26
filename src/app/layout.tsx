import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/SideMenu";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naz Gallery",
  description: "I made this gallery website using Next.js 14.2, Talwindcss, Shadcn-ui and Cloudinary.",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 `}>

        <Navbar />

        <div className="flex">
          <SideMenu />
          <div className="w-3/4 px-4 -mt-20"> {children} </div>
        </div>

      </body>
    </html>
  );
}
