'use client';

import dynamic from "next/dynamic";

// Lazy load non-critical components
export const Analytics = dynamic(() => import("@vercel/analytics/react").then(mod => ({ default: mod.Analytics })), {
  ssr: false
});

export const PerformanceMonitor = dynamic(() => import("@/components/ui/performance-monitor").then(mod => ({ default: mod.PerformanceMonitor })), {
  ssr: false
});

