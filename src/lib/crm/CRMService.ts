"use client";

// Retention Guardian - CRM Logic
// Handles user segmentation and "Demand-Driven" triggers.

export interface UserProfile {
    id: string;
    email: string;
    lastVisit: Date;
    engagementScore: number; // 0-100
    segments: string[]; // e.g., "high-intent", "window-shopper"
    name?: string;
}

export const CRMService = {

    // Mock database
    users: new Map<string, UserProfile>(),

    identifyUser: (userId: string): UserProfile => {
        // In a real app, this would fetch from DB/API
        const existing = CRMService.users.get(userId);
        if (existing) {
            existing.lastVisit = new Date();
            existing.engagementScore += 5; // Boost score on return
            return existing;
        }

        const newUser: UserProfile = {
            id: userId,
            email: `${userId}@example.com`,
            name: `User ${userId}`,
            lastVisit: new Date(),
            engagementScore: 10,
            segments: ["new-visitor"]
        };
        CRMService.users.set(userId, newUser);
        return newUser;
    },

    trackEngagement: (userId: string, action: string, score: number) => {
        const user = CRMService.users.get(userId);
        if (user) {
            user.engagementScore += score;
            if (action === 'purchase') {
                user.segments.push('customer');
            }
            console.log(`[CRM] User ${user.id} engagement score updated to ${user.engagementScore}`);
        }
    }
};
