"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

type EventProperties = Record<string, string | number | boolean>;

export function trackConversion(eventName: string, properties?: EventProperties) {
  try {
    track(eventName, properties);
  } catch {
    // Analytics should never interfere with navigation or form behavior.
  }
}

function linkLocation(link: HTMLAnchorElement) {
  const explicitLocation = link.dataset.trackLocation;

  if (explicitLocation) {
    return explicitLocation;
  }

  if (link.closest("header")) {
    return "header";
  }

  if (link.closest("footer")) {
    return "footer";
  }

  return "page";
}

export function ConversionTracking() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("a") : null;

      if (!(target instanceof HTMLAnchorElement)) {
        return;
      }

      const href = target.getAttribute("href") || "";
      const text = target.textContent?.trim().replace(/\s+/g, " ").toLowerCase() || "";
      const location = linkLocation(target);

      if (href.startsWith("https://wa.me/")) {
        trackConversion("whatsapp_click", { location });
        return;
      }

      if (href.startsWith("tel:")) {
        trackConversion("phone_click", { location });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackConversion("email_click", { location });
        return;
      }

      if (href === "/privacy" || href.endsWith("/privacy")) {
        trackConversion("privacy_click", { location });
        return;
      }

      if (
        (href === "/contact" || href.endsWith("/contact")) &&
        (text.includes("start") ||
          text.includes("discuss") ||
          text.includes("conversation") ||
          text.includes("project") ||
          text.includes("brief"))
      ) {
        trackConversion("start_project_click", { location });
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
