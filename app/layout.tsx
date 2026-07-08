import Cursor from "./components/Cursor";
import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sylvester Eziagor",
  description:
    "Information Security Analyst — security labs, detection engineering, and backend development.",
  icons: {
    icon: "/favicon.ico",
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
