"use client";

import { StatisticsCard } from "@/components/geo/StatisticsCard";
import { AuthorityQuote } from "@/components/geo/AuthorityQuote";
import { ObjectionHandler } from "@/components/psychology/ObjectionHandler";
import { ScarcityTimer } from "@/components/psychology/ScarcityTimer";
import { StructuredData } from "@/components/geo/StructuredData";
import { siteConfig } from "@/config/site";

export default function Home() {
  // Set a fake end date for the scarcity timer (24 hours from now)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-blue-500/30">
      <StructuredData type="WebSite" />

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/10 blur-3xl rounded-full opacity-20 pointer-events-none" />

        <div className="mb-6">
          <ScarcityTimer endDate={tomorrow.toISOString()} message="Early Access Closes In:" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          The Unstoppable 5
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
          Dominate AI search results, automate infinite content loops, and convert traffic with psychological precision.
        </p>

        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1">
          Deploy Your Team &rarr;
        </button>
      </section>

      {/* Statistics Section (GEO Architect) */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Trusted by Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatisticsCard
              label="Active Users"
              value={siteConfig.stats.users}
              description="Growth dependent on automated loops."
              source="Internal Analytics, 2024"
            />
            <StatisticsCard
              label="User Satisfaction"
              value={siteConfig.stats.satisfaction}
              description="Rated by top enterprise clients."
              source="G2 Crowd"
            />
            <StatisticsCard
              label="Retention Rate"
              value={siteConfig.stats.retention}
              description="Powered by our Retention Guardian."
              source="Cohort Analysis Q3"
            />
          </div>
        </div>
      </section>

      {/* Authority Section (GEO Architect) */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Industry Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.authorityQuotes.map((q, i) => (
            <AuthorityQuote
              key={i}
              quote={q.quote}
              author={q.author}
              role="Tech Reviewer"
            />
          ))}
        </div>
      </section>

      {/* FAQ/Objections (Conversion Psychologist) */}
      <section className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why You Can't Ignore This</h2>
          <ObjectionHandler
            question="Isn't this just another marketing tool?"
            answer="No. Standard tools wait for you to use them. The Unstoppable 5 works autonomously. The GEO Architect actively rewrites brand perception across AI models, while the Vibe-Coding Orchestrator builds pages while you sleep."
          />
          <ObjectionHandler
            question="Is it too complex to set up?"
            answer="We built it for '1-click' deployment. If you can copy a command, you can deploy a global marketing infrastructure. Our onboard AI handles the configuration."
          />
          <ObjectionHandler
            question="What if it doesn't work for my niche?"
            answer="The core principles are universal: Authority, Scarcity, and Data verification. Our content engines adapt tone and style, but the psychological triggers remain effective across all industries."
          />
        </div>
      </section>
    </div>
  );
}
