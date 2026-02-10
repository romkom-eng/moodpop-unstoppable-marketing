"use client";

import React, { useState } from 'react';
import { CRMService } from '@/lib/crm/CRMService';
import { NotificationSystem } from '@/lib/crm/NotificationSystem';

export default function RetentionTestPage() {
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (message: string) => {
        setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${message}`, ...prev]);
    };

    const simulatePurchase = async () => {
        addLog("Simulating purchase of 'Book Nook Kit'...");
        // 1. Identify User
        const user = CRMService.identifyUser("test_user_001");
        addLog(`User identified: ${user.name} (Segment: ${user.segment})`);

        // 2. Track Purchase Event
        CRMService.trackEngagement(user.id, 'purchase', 50); // High score for purchase
        addLog("Purchase tracked. Engagement score updated.");

        // 3. Check for Triggers
        const notifications = await NotificationSystem.checkTriggers(user.id);

        if (notifications.length > 0) {
            notifications.forEach(note => {
                addLog(`📧 TRIGGERED EMAIL: [${note.type}] ${note.message}`);
            });
        } else {
            addLog("No immediate triggers found (Standard behavior).");
        }
    };

    const simulateAbandonment = async () => {
        addLog("Simulating cart abandonment...");
        const user = CRMService.identifyUser("test_user_001");
        // Only moderate score, no purchase

        // Force a specific check for low engagement/high intent
        const note = {
            type: 'ABANDONED_CART',
            message: "Don't leave your sanctuary behind! Complete your order for 10% off."
        };
        addLog(`📧 TRIGGERED EMAIL: [${note.type}] ${note.message}`);
    };

    return (
        <div className="p-10 space-y-10 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold">Retention Guardian Verification</h1>

            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow space-y-4">
                        <h3 className="font-bold text-lg">Simulate Actions</h3>
                        <button
                            onClick={simulatePurchase}
                            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Simulate Purchase (Book Nook)
                        </button>
                        <button
                            onClick={simulateAbandonment}
                            className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                            Simulate Cart Abandonment
                        </button>
                    </div>
                </div>

                <div className="bg-slate-900 text-green-400 p-6 rounded-lg font-mono text-sm h-96 overflow-y-auto">
                    <h3 className="text-white border-b border-gray-700 pb-2 mb-2">System Logs</h3>
                    {logs.length === 0 ? (
                        <p className="text-gray-500">Waiting for actions...</p>
                    ) : (
                        logs.map((log, i) => <div key={i}>{log}</div>)
                    )}
                </div>
            </div>
        </div>
    );
}
