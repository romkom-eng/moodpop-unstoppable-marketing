"use client";

import React, { useState, useEffect } from 'react';

interface LimitedDropTimerProps {
    dropName: string;
    totalQuantity: number;
}

export const LimitedDropTimer = ({ dropName, totalQuantity }: LimitedDropTimerProps) => {
    const [remaining, setRemaining] = useState(totalQuantity);

    useEffect(() => {
        // Simulate live sales dropping the count
        const interval = setInterval(() => {
            setRemaining(prev => {
                if (prev <= 5) return prev; // Stop at 5 to maintain tension without selling out
                // Randomly decrease by 1 every few seconds
                return Math.random() > 0.7 ? prev - 1 : prev;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-sm font-bold text-orange-800 dark:text-orange-200 uppercase tracking-wider">
                        Limited Drop: {dropName}
                    </h4>
                    <p className="text-xs text-orange-600 dark:text-orange-300 mt-1">
                        Restocking takes 3 months due to handmade process.
                    </p>
                </div>
                <div className="text-right">
                    <span className="block text-2xl font-mono font-bold text-orange-600 dark:text-orange-400">
                        {remaining}
                    </span>
                    <span className="text-[10px] uppercase text-orange-500 font-medium">units left</span>
                </div>
            </div>
        </div>
    );
};
