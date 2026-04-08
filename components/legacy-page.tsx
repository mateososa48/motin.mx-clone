import { BodyRouteState } from "@/components/body-route-state";
import {
  getLegacyPageFragment,
} from "@/lib/legacy-pages";
import type { LegacyContentPageKey } from "@/lib/legacy-route-state";

type LegacyPageProps = {
  page: LegacyContentPageKey;
};

export function LegacyPage({ page }: LegacyPageProps) {
  const pageFragment = getLegacyPageFragment(page);

  return (
    <>
      <BodyRouteState page={page} />
      <div
        className="LegacyPageShell"
        dangerouslySetInnerHTML={{ __html: pageFragment }}
      />
    </>
  );
}
