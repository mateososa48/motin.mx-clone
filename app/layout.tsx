/* eslint-disable @next/next/no-css-tags, @next/next/no-page-custom-font */
import type { Metadata } from "next";

import "./globals.css";

import { MobileNavController } from "@/components/mobile-nav-controller";
import { getSocialSprite } from "@/lib/legacy-pages";
import { LEGACY_BODY_CLASS } from "@/lib/legacy-route-state";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.motin.mx"),
  title: {
    default: "Motín",
    template: "%s",
  },
  description: "Motín cafe website rebuilt with Next.js, React, and TypeScript.",
  icons: {
    icon: "https://images.squarespace-cdn.com/content/v1/5b92a4425417fc07d734b84d/1537153851505-4ESPAQ49ES5ZIE1VETHE/favicon.ico?format=100w",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/legacy/motin_index_files/site.css" />
        <link
          rel="stylesheet"
          href="/legacy/motin_index_files/6d80fa01db20c41f-min.en-US.css"
        />
        <link
          rel="stylesheet"
          href="/legacy/motin_index_files/website.components.spacer.styles.css"
        />
        <link
          rel="stylesheet"
          href="/legacy/motin_menu_files/website.components.button.styles.css"
        />
      </head>
      <body className={LEGACY_BODY_CLASS}>
        <MobileNavController />
        {children}
        <div dangerouslySetInnerHTML={{ __html: getSocialSprite() }} />
      </body>
    </html>
  );
}
