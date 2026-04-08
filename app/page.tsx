import type { Metadata } from "next";

import { LegacyPage } from "@/components/legacy-page";

export const metadata: Metadata = {
  title: "Motín",
};

export default function HomePage() {
  return <LegacyPage page="index" />;
}
