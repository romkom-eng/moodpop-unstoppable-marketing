"use client";

import { useState, useEffect } from 'react';

// Growth Oracle - Prediction Logic
// 1. Exit Intent Prediction (Mouse movement)
// 2. Traffic Drop Prediction (Mock time-series analysis)

export const usePredictionModel = () => {
    const [exitIntentProb, setExitIntentProb] = useState(0);
    const [trafficTrend, setTrafficTrend] = useState<'stable' | 'declining' | 'growing'>('stable');

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Simple heuristic: if mouse moves quickly towards top of screen
            if (e.clientY < 50 && e.movementY < -10) {
                setExitIntentProb(prev => Math.min(prev + 20, 100));
                console.log("[Growth Oracle] High exit intent detected.");
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Mock traffic prediction interval
        const interval = setInterval(() => {
            // Randomly simulate a prediction
            const random = Math.random();
            if (random > 0.8) {
                setTrafficTrend('declining');
                console.warn("[Growth Oracle] ALERT: Predicted traffic drop in next 2 hours.");
            } else if (random > 0.5) {
                setTrafficTrend('growing');
            } else {
                setTrafficTrend('stable');
            }
        }, 10000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        }
    }, []);

    return { exitIntentProb, trafficTrend };
};
