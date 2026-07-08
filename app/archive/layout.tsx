import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive | Sylvester Eziagor",
  description:
    "Archive of projects by Sylvester Eziagor — security labs, APIs, and web builds.",
};

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
