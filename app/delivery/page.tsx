import type { Metadata } from "next";

import { LegacyPage } from "@/components/legacy-page";

export const metadata: Metadata = {
  title: "DELIVERY — Motín",
};

export default function DeliveryPage() {
  return <LegacyPage page="delivery" />;
}
