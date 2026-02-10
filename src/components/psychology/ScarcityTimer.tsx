import React, { useState, useEffect } from 'react';

interface ScarcityProps {
    endDate: string; // ISO date string
    message?: string;
}

export const ScarcityTimer = ({ endDate, message = "Offer ends in:" }: ScarcityProps) => {
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(endDate) - +new Date();
            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        // Initial set
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    if (!timeLeft) return null; // Avoid hydration mismatch

    return (
        <div className="inline-block p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <div className="text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest mb-2 text-center">
                {message}
            </div>
            <div className="flex gap-3 justify-center text-center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col">
                        <span className="text-2xl font-mono font-bold text-gray-900 dark:text-gray-100">
                            {String(value).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] text-gray-500 uppercase">{unit}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
