import type { Metadata } from "next";

import { LegacyPage } from "@/components/legacy-page";

export const metadata: Metadata = {
  title: "TAKE OUT — Motín",
};

export default function TakeoutPage() {
  return <LegacyPage page="takeout" />;
}
