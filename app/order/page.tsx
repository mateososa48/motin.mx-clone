import type { Metadata } from "next";
import Script from "next/script";

import { BodyRouteState } from "@/components/body-route-state";
import { getOrderPageParts } from "@/lib/legacy-pages";

export const metadata: Metadata = {
  title: "Ordenar Pickup — Motín",
};

export default function OrderPage() {
  const orderPage = getOrderPageParts();

  return (
    <>
      <BodyRouteState page="order" />
      <style dangerouslySetInnerHTML={{ __html: orderPage.inlineStyles }} />
      <div
        className="LegacyPageShell"
        dangerouslySetInnerHTML={{ __html: orderPage.bodyHtml }}
      />
      <Script id="motin-order-page" strategy="lazyOnload">
        {orderPage.inlineScript}
      </Script>
    </>
  );
}
