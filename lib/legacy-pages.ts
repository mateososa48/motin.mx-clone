import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

import type { LegacyContentPageKey } from "@/lib/legacy-route-state";

const LEGACY_SOURCE_DIR = path.join(process.cwd(), "motin_site_copy");

const routeRewrites: Array<[string, string]> = [
  ["./index.html", "/"],
  ["./nosotros.html", "/nosotros"],
  ["./menu.html", "/menu"],
  ["./takeout.html", "/takeout"],
  ["./delivery.html", "/delivery"],
  ["./order.html", "/order"],
];

function rewriteLegacyMarkup(html: string) {
  let rewritten = html;

  for (const [from, to] of routeRewrites) {
    rewritten = rewritten.split(from).join(to);
  }

  rewritten = rewritten.replace(
    /(src|href|poster)=["']\.\/(motin_[^"']+)["']/g,
    (_match, attribute: string, assetPath: string) =>
      `${attribute}="/legacy/${assetPath}"`,
  );

  return rewritten;
}

function readLegacyHtml(fileName: string) {
  return fs.readFileSync(path.join(LEGACY_SOURCE_DIR, fileName), "utf8");
}

export const getLegacyPageFragment = cache((page: LegacyContentPageKey) => {
  const html = readLegacyHtml(`${page}.html`);
  const fragmentMatch = html.match(
    /<body[^>]*>([\s\S]*?)<script[^>]+site-bundle\.js[^>]*><\/script>/i,
  );

  if (!fragmentMatch) {
    throw new Error(`Unable to extract body fragment for ${page}.html`);
  }

  return rewriteLegacyMarkup(fragmentMatch[1]);
});

export const getSocialSprite = cache(() => {
  const html = readLegacyHtml("index.html");
  const spriteMatch = html.match(
    /<svg[\s\S]*?data-usage="social-icons-svg"[\s\S]*?<\/svg>/i,
  );

  if (!spriteMatch) {
    return "";
  }

  return spriteMatch[0];
});

export const getOrderPageParts = cache(() => {
  const html = readLegacyHtml("order.html");
  const styleMatches = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
  const bodyMatch = html.match(
    /<body[^>]*>([\s\S]*?)<script>([\s\S]*?)<\/script>\s*<\/body>/i,
  );

  if (!bodyMatch) {
    throw new Error("Unable to extract order page body and script.");
  }

  return {
    inlineStyles: styleMatches.map((match) => match[1]).join("\n\n"),
    bodyHtml: rewriteLegacyMarkup(bodyMatch[1]),
    inlineScript: bodyMatch[2],
  };
});
