'use client';

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Track page load performance
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        console.log(`Page load time: ${loadTime}ms`);
        
        // Track Core Web Vitals
        if ('web-vital' in window) {
          // This would be available if web-vitals package is installed
          console.log('Core Web Vitals tracking available');
        }
      });
    }
  }, []);

  return null;
} 