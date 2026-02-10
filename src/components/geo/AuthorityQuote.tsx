import React from 'react';

interface QuoteProps {
    quote: string;
    author: string;
    role?: string;
    company?: string;
    imageUrl?: string;
}

export const AuthorityQuote = ({ quote, author, role, company, imageUrl }: QuoteProps) => {
    return (
        <figure className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 text-6xl text-blue-500/20 font-serif">
                &ldquo;
            </div>
            <blockquote className="relative z-10 text-xl md:text-2xl font-light leading-relaxed text-gray-100 mb-6">
                "{quote}"
            </blockquote>
            <figcaption className="flex items-center gap-4">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30"
                    />
                )}
                <div>
                    <div className="font-bold text-white">{author}</div>
                    <div className="text-sm text-blue-400">
                        {role}{company ? ` @ ${company}` : ''}
                    </div>
                </div>
            </figcaption>
            {/* Schema.org markup for Quote */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Quotation",
                    "text": quote,
                    "author": {
                        "@type": "Person",
                        "name": author,
                        "jobTitle": role,
                        "worksFor": {
                            "@type": "Organization",
                            "name": company
                        }
                    }
                })
            }} />
        </figure>
    );
};
