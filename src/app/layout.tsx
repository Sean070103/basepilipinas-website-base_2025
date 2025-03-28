import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Base PH: Blockchain",
  description:
    "Base PH is a Web3 community empowering Filipino innovators with resources, mentorship, networking, and funding. Access learning, collaboration, events, and growth opportunities in blockchain.",
  applicationName: "Base Philippines",
  generator: "",
  keywords:
    "Base Philippines, Blockchain, Filipino Developers, Learning Hub, Community, Mentorship, Crypto Events, BASE, Base Contributor, Innovation, WEB3, NFTs, Hackathons",
  referrer: "origin",
  creator: "",
  publisher: "",
  robots: "index, follow",
  icons: "",
  openGraph: {
    type: "website",
    url: "",
    title: "Base PH: Blockchain",
    description:
      "Base PH is a Web3 community empowering Filipino innovators with resources, mentorship, networking, and funding.",
    siteName: "Base PH",
    images: [
      {
        url: ``,
      },
    ],
  },
  twitter: {
    site: "",
    creator: "",
    description:
      "Base PH is a Web3 community empowering Filipino innovators with resources, mentorship, networking, and funding.",
    title: "Base PH: Blockchain",
    images: [
      {
        url: ``,
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Base PH: Blockchain",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract: "",
  category: "",
  classification: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
