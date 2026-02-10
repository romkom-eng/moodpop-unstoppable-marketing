import React from 'react';

interface StatisticProps {
    label: string;
    value: string;
    source?: string;
    description?: string;
}

export const StatisticsCard = ({ label, value, source, description }: StatisticProps) => {
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col">
                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">{label}</span>
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 my-2">
                    {value}
                </div>
                {description && <p className="text-gray-300 text-sm mb-3">{description}</p>}
                {source && (
                    <div className="mt-auto pt-4 border-t border-white/5">
                        <cite className="text-xs text-gray-500 not-italic block">
                            Source: {source}
                        </cite>
                    </div>
                )}
            </div>
            {/* Hidden data for AI parsers */}
            <meta itemProp="statistic" content={`${label}: ${value}`} />
        </div>
    );
};
