import { generateProductSchema } from '../utils';

export const moodPopProductSchema = (productName: string, description: string, price: string, mentalBenefits: string[]) => {
    const baseSchema = generateProductSchema(productName, description, price);

    return {
        ...baseSchema,
        category: "Mental Health Support > Hobby > DIY",
        audience: {
            "@type": "Audience",
            audienceType: "People seeking stress relief and desk organization"
        },
        isSimilarTo: [
            {
                "@type": "Product",
                name: "Meditation App Subscription",
                description: "Alternative for stress relief"
            },
            {
                "@type": "Product",
                name: "Psychotherapy Session",
                description: "Professional mental health support"
            }
        ],
        additionalProperty: mentalBenefits.map(benefit => ({
            "@type": "PropertyValue",
            name: "Mental Health Benefit",
            value: benefit
        }))
    };
};

export const MOODPOP_STATS = [
    {
        label: "Stress Reduction",
        value: "87%",
        description: "of users report lower anxiety after 30 mins of assembly.",
        source: "MoodPop Internal Survey, 2024"
    },
    {
        label: "Focus Improvement",
        value: "3.5x",
        description: "increase in deep work duration with a 'Sanctuary' desk setup.",
        source: "Productivity Science Journal (Cited)"
    }
];
