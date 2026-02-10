import { siteConfig } from '@/config/site';

export const generateArticleSchema = (title: string, description: string, url: string, datePublished: string) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        url: url,
        datePublished: datePublished,
        author: {
            '@type': 'Organization',
            name: siteConfig.name,
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: siteConfig.ogImage,
            },
        },
    };
};

export const generateProductSchema = (name: string, description: string, price: string) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: name,
        description: description,
        brand: {
            '@type': 'Brand',
            name: siteConfig.name
        },
        offers: {
            '@type': 'Offer',
            price: price,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
        }
    }
}
