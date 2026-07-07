import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive | Sylvester Eziagor",
  description:
    "Sylvester Eziagor projects archive. A collection of projects that I have worked on in the past.",
};

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
