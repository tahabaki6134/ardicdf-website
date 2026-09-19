"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { conversionForHref } from "@/lib/conversion-events";

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
      const location = linkLocation(target);
      const eventName = conversionForHref(href, window.location.href);
      if (eventName) trackConversion(eventName, { location, language: document.documentElement.lang });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
