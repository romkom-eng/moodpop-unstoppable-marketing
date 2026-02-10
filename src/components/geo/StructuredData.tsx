import Head from 'next/head';
import { siteConfig } from '@/config/site';

interface StructuredDataProps {
    type?: 'WebSite' | 'Organization' | 'Product' | 'Article';
    data?: Record<string, any>;
}

export const StructuredData = ({ type = 'Organization', data = {} }: StructuredDataProps) => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': type,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        logo: siteConfig.ogImage,
        sameAs: Object.values(siteConfig.links),
        ...data,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
