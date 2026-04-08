"use client";

import { useEffect } from "react";

import {
  LEGACY_BODY_CLASS,
  type LegacyPageKey,
  getRouteState,
  knownBodyExtraClasses,
} from "@/lib/legacy-route-state";

type BodyRouteStateProps = {
  page: LegacyPageKey;
};

export function BodyRouteState({ page }: BodyRouteStateProps) {
  useEffect(() => {
    const body = document.body;
    const routeState = getRouteState(page);

    body.className = LEGACY_BODY_CLASS;
    body.classList.remove(...knownBodyExtraClasses);

    if (routeState.bodyExtraClasses.length > 0) {
      body.classList.add(...routeState.bodyExtraClasses);
    }

    if (routeState.bodyId) {
      body.id = routeState.bodyId;
    } else {
      body.removeAttribute("id");
    }

    body.dataset.mobileNavOpen = "false";
  }, [page]);

  return null;
}
