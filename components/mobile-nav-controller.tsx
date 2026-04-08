"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function setMobileNavState(isOpen: boolean) {
  document.body.dataset.mobileNavOpen = isOpen ? "true" : "false";
}

export function MobileNavController() {
  const pathname = usePathname();

  useEffect(() => {
    const openButtons = Array.from(
      document.querySelectorAll<HTMLElement>(".Mobile-bar-menu"),
    );
    const closeButtons = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".Mobile-overlay-close, .Mobile-overlay-back, .Mobile-overlay-nav-item",
      ),
    );

    const handleOpen = () => setMobileNavState(true);
    const handleClose = () => setMobileNavState(false);
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    openButtons.forEach((button) => button.addEventListener("click", handleOpen));
    closeButtons.forEach((button) =>
      button.addEventListener("click", handleClose),
    );
    document.addEventListener("keydown", handleEscape);

    handleClose();

    return () => {
      openButtons.forEach((button) =>
        button.removeEventListener("click", handleOpen),
      );
      closeButtons.forEach((button) =>
        button.removeEventListener("click", handleClose),
      );
      document.removeEventListener("keydown", handleEscape);
    };
  }, [pathname]);

  return null;
}
