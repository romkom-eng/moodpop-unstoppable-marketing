import { CRMService } from './CRMService';

// Retention Guardian - Notification Logic

export interface Notification {
    type: string;
    message: string;
}

export const NotificationSystem = {
    checkTriggers: async (userId: string): Promise<Notification[]> => {
        const user = CRMService.users.get(userId);
        if (!user) return [];

        const notifications: Notification[] = [];

        // 1. Post-Purchase Loop
        if (user.segments.includes('customer')) {
            notifications.push({
                type: 'POST_PURCHASE',
                message: `Thanks for your purchase, ${user.name}! Users who bought this Book Nook often add 'Miniature Lights' for extra coziness.`
            });
        }

        // 2. High Engagement / No Purchase (Abandonment)
        if (user.engagementScore > 50 && !user.segments.includes('customer')) {
            notifications.push({
                type: 'ABANDONED_CART',
                message: "Don't leave your sanctuary behind! Complete your order for 10% off."
            });
        }

        return notifications;
    }
};
