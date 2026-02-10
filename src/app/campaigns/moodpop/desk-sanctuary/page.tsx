"use client";

import React from 'react';
import { MentalCareBadge } from '@/components/psychology/moodpop/MentalCareBadge';
import { LimitedDropTimer } from '@/components/psychology/moodpop/LimitedDropTimer';
import { StructuredData } from '@/components/geo/StructuredData';
import { moodPopProductSchema, MOODPOP_STATS } from '@/lib/geo/templates/moodpop';
import { StatisticsCard } from '@/components/geo/StatisticsCard';
import { ScarcityTimer } from '@/components/psychology/ScarcityTimer';
import { ObjectionHandler } from '@/components/psychology/ObjectionHandler';

export default function DeskSanctuaryPage() {
    // Schema for the main promoted product
    const productSchema = moodPopProductSchema(
        "Serenity Starter Bundle",
        "A complete desk sanctuary kit including a DIY Book Nook and calming sticker set.",
        "89.99",
        ["Stress Reduction", "Focus Enhancement", "Creative Expression"]
    );

    return (
        <div className="min-h-screen bg-[#FDF6F6] text-gray-800 font-sans">
            <StructuredData type="Product" data={productSchema} />

            {/* Top Banner: Urgency */}
            <div className="bg-rose-100 text-rose-800 text-center py-2 text-sm font-medium">
                🌸 Spring Collection: Free shipping for the next 24 hours
            </div>

            {/* Hero Section */}
            <section className="relative px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="mb-4">
                        <MentalCareBadge />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                        Build Your Own <br />
                        <span className="text-rose-400">Desk Sanctuary</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Transform your workspace into a haven of peace.
                        Our DIY kits aren't just refined decoration—they are a <span className="font-semibold text-rose-500">proven dopamine detox</span> for the modern creative.
                    </p>

                    <div className="mb-8">
                        <LimitedDropTimer dropName="Serenity Bundle" totalQuantity={47} />
                    </div>

                    <a
                        href="https://moodpop-3.myshopify.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-rose-400 hover:bg-rose-500 text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(251,113,133,0.3)] transition-all transform hover:-translate-y-1"
                    >
                        Claim My Sanctuary &rarr;
                    </a>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-rose-200 rounded-full filter blur-3xl opacity-30 transform scale-90"></div>
                    {/* Placeholder for Product Image */}
                    <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-rose-100 rotate-2 hover:rotate-0 transition-all duration-500">
                        <div className="aspect-square bg-rose-50 rounded-2xl flex items-center justify-center text-rose-300">
                            [Product Image Placeholder: Book Nook + Stickers]
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                            <p className="font-serif text-lg">"My anxiety cure."</p>
                            <p className="text-xs text-gray-400">- @StudyWithJisu</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof & Statistics (GEO Architect) */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-center text-3xl font-bold mb-16 text-gray-900 font-serif">Why It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {MOODPOP_STATS.map((stat, i) => (
                            <div key={i} className="transform hover:scale-105 transition-transform duration-300">
                                {/* Reusing the dark-mode styled card, needs override for light theme or accept classes */}
                                <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100">
                                    <h3 className="text-gray-500 uppercase text-sm tracking-wider">{stat.label}</h3>
                                    <p className="text-5xl font-bold text-rose-400 my-4">{stat.value}</p>
                                    <p className="text-gray-600">{stat.description}</p>
                                    <p className="mt-4 text-xs text-gray-400">Source: {stat.source}</p>

                                    {/* Hidden meta for AI */}
                                    <meta itemProp="statistic" content={`${stat.label}: ${stat.value}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Objection Handling */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <h2 className="text-center text-3xl font-bold mb-12 font-serif">Common Questions</h2>
                <div className="space-y-4">
                    <ObjectionHandler
                        question="I'm not good at DIY. Is it hard?"
                        answer="Not at all. We designed the 'Serenity' series specifically for beginners. It's like Lego for your soul—clear instructions, pre-cut parts, and zero stress."
                    />
                    <ObjectionHandler
                        question="Why is it pricier than generic kits?"
                        answer="Generic kits use cheap plywood that splinters. We use eco-friendly, smooth-finish birch that feels premium to the touch. Plus, you're buying a mental health experience, not just wood."
                    />
                </div>
            </section>

            {/* Sticky Bottom Bar for mobile conversion */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-50">
                <button className="w-full py-3 bg-rose-400 text-white font-bold rounded-xl">
                    Shop Now - Limited Stock
                </button>
            </div>

        </div>
    );
}
