import React, { useState } from 'react';

interface ObjectionProps {
    question: string;
    answer: string;
}

export const ObjectionHandler = ({ question, answer }: ObjectionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-4 transition-all duration-300 hover:border-blue-500/50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800/50 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                <span className="font-medium text-gray-900 dark:text-gray-100 pr-4">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>
            <div
                className={`bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-4 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800">
                    {answer}
                </div>
            </div>
        </div>
    );
};
