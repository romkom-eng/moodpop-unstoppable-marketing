"use client";

import React from 'react';
import { ObjectionHandler } from '@/components/psychology/ObjectionHandler';
import { ScarcityTimer } from '@/components/psychology/ScarcityTimer';
import { LimitedDropTimer } from '@/components/psychology/moodpop/LimitedDropTimer';

export default function PsychologyTestPage() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return (
        <div className="p-10 space-y-10 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold">Psychology Component Verification</h1>

            <section className="bg-white p-5 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">1. Objection Handler (Juha Effect)</h2>
                <ObjectionHandler
                    question="Test Question: Is this expensive?"
                    answer="Verified Answer: It is an investment in your mental health."
                />
                <p className="text-sm text-gray-500 mt-2">Expected behavior: Clicking text toggles the answer visibility.</p>
            </section>

            <section className="bg-white p-5 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">2. Scarcity Timer (General)</h2>
                <ScarcityTimer endDate={tomorrow.toISOString()} message="Offer Expires In:" />
                <p className="text-sm text-gray-500 mt-2">Expected behavior: Countdown should be ticking down from 24h.</p>
            </section>

            <section className="bg-white p-5 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">3. Limited Drop Timer (MoodPop Specific)</h2>
                <LimitedDropTimer dropName="Test Drop" totalQuantity={10} />
                <p className="text-sm text-gray-500 mt-2">Expected behavior: Counter should decrease randomly every ~5 seconds until it hits 5.</p>
            </section>
        </div>
    );
}
