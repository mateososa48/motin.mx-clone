import type { Metadata } from "next";

import { LegacyPage } from "@/components/legacy-page";

export const metadata: Metadata = {
  title: "NOSOTROS — Motín",
};

export default function NosotrosPage() {
  return <LegacyPage page="nosotros" />;
}
