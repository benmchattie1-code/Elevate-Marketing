import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.elevatemarketingco.co.uk";
const siteName = "Elevate Marketing Company";
const description =
  "Elevate Marketing Company helps Aberdeen and UK-wide businesses build a stronger online presence through strategic marketing, scroll-stopping content and consistent execution. Social media management, branding, paid ads and more, with no long-term contracts.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Social Media & Marketing Agency in Aberdeen`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "marketing agency Aberdeen",
    "social media management Scotland",
    "content creation agency",
    "branding agency Aberdeen",
    "email marketing UK",
    "paid advertising Meta and LinkedIn ads",
    "small business marketing agency",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title: `${siteName} | Social Media & Marketing Agency in Aberdeen`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Social Media & Marketing Agency in Aberdeen`,
    description,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2b28",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              name: siteName,
              url: siteUrl,
              description,
              areaServed: ["Aberdeen", "Scotland", "United Kingdom"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Aberdeen",
                addressRegion: "Scotland",
                addressCountry: "GB",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
