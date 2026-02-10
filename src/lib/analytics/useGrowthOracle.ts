"use client";

import { useEffect } from 'react';

// Growth Oracle - Analytics Integration
// Connected to GA4: G-CE3LCD87C0

export const useGrowthOracle = () => {
    useEffect(() => {
        // Log initialization check
        if (typeof window !== 'undefined' && (window as any).gtag) {
            console.log("Growth Oracle: GA4 Connected (G-CE3LCD87C0)");
        } else {
            console.warn("Growth Oracle: GA4 script not found.");
        }
    }, []);

    const trackEvent = (eventName: string, properties?: Record<string, any>) => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', eventName, properties);
            console.log(`[Growth Oracle] Sent event to GA4: ${eventName}`, properties);
        } else {
            console.log(`[Growth Oracle] (Mock) Event: ${eventName}`, properties);
        }
    };

    return { trackEvent };
};
