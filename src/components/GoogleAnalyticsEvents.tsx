'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, parameters?: { [key: string]: any }) => void;
  }
}

export default function GoogleAnalyticsEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');

      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
      });
    }
  }, [pathname, searchParams]);

  return null;
}