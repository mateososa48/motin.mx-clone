import type { Metadata } from "next";

import { LegacyPage } from "@/components/legacy-page";

export const metadata: Metadata = {
  title: "MENÚ — Motín",
};

export default function MenuPage() {
  return <LegacyPage page="menu" />;
}
