import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snap Code Lab — Learn to Code. Build Real Projects. Get Hired.",
  description:
    "Bite-sized coding courses that take you from zero to deployed. No fluff. No filler. Just hands-on courses with real projects, verified certificates, and lifetime access.",
  keywords: [
    "coding courses",
    "learn to code",
    "HTML CSS course",
    "Python course",
    "JavaScript course",
    "online coding bootcamp",
    "web development",
    "programming for beginners",
  ],
  authors: [{ name: "Snap Code Lab", url: "https://snapcodelab.com" }],
  openGraph: {
    title: "Snap Code Lab — Learn to Code. Build Real Projects. Get Hired.",
    description:
      "Bite-sized coding courses that take you from zero to deployed.",
    url: "https://snapcodelab.com",
    siteName: "Snap Code Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snap Code Lab — Learn to Code. Build Real Projects. Get Hired.",
    description:
      "Bite-sized coding courses that take you from zero to deployed.",
  },
  metadataBase: new URL("https://snapcodelab.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-[#0F172A] text-[#F8FAFC] antialiased`}
      >
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
