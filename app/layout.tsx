import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MagicalEffects } from "@/components/ui/MagicalEffects";

export const metadata: Metadata = {
  metadataBase: new URL('https://gao-cay-trom.com'),
  title: {
    default: 'Gạo – Cây – Trôm | Thiên Nhiên Việt',
    template: '%s | Gạo – Cây – Trôm'
  },
  description: 'Hành trình hạt gạo từ đất mẹ, khám phá thiên nhiên và văn hóa nông nghiệp bền vững của Việt Nam',
  keywords: ['gạo Việt', 'nông nghiệp bền vững', 'thiên nhiên Việt Nam', 'cây bản địa', 'văn hóa lúa nước'],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://gao-cay-trom.com',
    siteName: 'Gạo – Cây – Trôm',
    title: 'Gạo – Cây – Trôm | Thiên Nhiên Việt',
    description: 'Hành trình hạt gạo từ đất mẹ, khám phá thiên nhiên và văn hóa nông nghiệp bền vững của Việt Nam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gạo – Cây – Trôm | Thiên Nhiên Việt',
    description: 'Hành trình hạt gạo từ đất mẹ, khám phá thiên nhiên và văn hóa nông nghiệp bền vững của Việt Nam',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="antialiased relative">
        <MagicalEffects />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
