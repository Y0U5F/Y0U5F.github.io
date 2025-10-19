import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { generateMetadata, SITE_CONFIG } from "@/lib/metadata";
import GoogleAnalyticsEvents from "@/components/GoogleAnalyticsEvents";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Export static metadata for Next.js App Router
export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Default meta tags that don't change */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={SITE_CONFIG.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_CONFIG.url} />

        {/* Favicon links */}
        <link rel="icon" type="image/png" sizes="32x32" href="/My logo 2.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/My logo 2.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/My logo 2.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/My logo 2.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/My logo 2.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/My logo 2.png" />
      </head>
      <body className={inter.className}>
        {children}

        {/* START: Google Analytics Scripts using Env Var */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* END: Google Analytics Scripts using Env Var */}

        <Suspense fallback={null}>
          <GoogleAnalyticsEvents />
        </Suspense>
      </body>
    </html>
  );
}