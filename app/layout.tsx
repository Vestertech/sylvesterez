import Cursor from "./components/Cursor";
import "./global.css";
import type { Metadata } from "next";

const siteUrl = "https://sylvesterez.dev";
const description =
  "Information Security Analyst — Detection engineering, Risk management, Incident response and Software development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sylvester Eziagor",
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sylvester Eziagor",
    description,
    url: siteUrl,
    siteName: "Sylvester Eziagor",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylvester Eziagor",
    description,
    creator: "@YOUwooded",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject
          attributes into <body> before hydration, causing false mismatches */}
      <body suppressHydrationWarning>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
