"use client";

import { StatisticsCard } from "@/components/geo/StatisticsCard";
import { ObjectionHandler } from "@/components/psychology/ObjectionHandler";
import { StructuredData } from "@/components/geo/StructuredData";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500/30">
      <StructuredData type="WebSite" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">UNSTOPPABLE AGENCY</span>
          <a href="#contact" className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-32 md:py-48 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-sm font-medium tracking-wide">
          SEO • PSYCHOLOGY • AUTOMATION
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          We Build Websites<br />That <span className="text-rose-500">Sell Themselves.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed">
          Stop waiting for traffic. We implement the <strong>"Unstoppable 5"</strong> framework to turn your website into a 24/7 psychological sales agent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform"
          >
            Apply for Transformation
          </a>
          <a
            href="/campaigns/moodpop/desk-sanctuary"
            className="px-8 py-4 bg-gray-900 border border-gray-700 text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
          >
            <span>See Live Demo</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">Featured Case Study: MoodPop Desk Sanctuary</p>
      </section>

      {/* The Problem / Solution */}
      <section className="px-6 py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Your website is invisible. <br /><span className="text-gray-500">Let's fix that.</span></h2>
            <p className="text-gray-400 text-lg mb-6">
              Most agencies build "pretty" sites that gather dust. We build <strong>Data-Driven Sales Engines</strong> engineered to dominate AI search results (GEO) and trigger dopamine loops in visitors.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-rose-500">✓</span>
                GEO Architect: Rank in AI answers (ChatGPT, Gemini)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-rose-500">✓</span>
                Psychology UI: Scarcity, Authority, & Social Proof
              </li>
              <li className="flex items-center gap-3">
                <span className="text-rose-500">✓</span>
                Retention Guardian: Automated CRM & Email loops
              </li>
            </ul>
          </div>
          <div className="relative">
            {/* Visual representation of 'Engine' */}
            <div className="aspect-square bg-gradient-to-tr from-rose-500/20 to-blue-500/20 rounded-2xl border border-white/10 p-8 flex flex-col justify-center items-center">
              <div className="text-6xl mb-4">⚙️ + 🧠</div>
              <h3 className="text-2xl font-bold mb-2">The Unstoppable Engine</h3>
              <p className="text-center text-gray-400">Technology meets Psychology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="px-6 py-24 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">See What We Built for MoodPop</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <StatisticsCard
              label="Conversion Rate"
              value="3.8%"
              description="vs 1.2% Industry Avg"
              source="Post-Launch Analytics"
            />
            <StatisticsCard
              label="Time on Site"
              value="4m 20s"
              description="Increased by 240%"
              source="GA4 Data"
            />
            <StatisticsCard
              label="Return Customers"
              value="85%"
              description="Powered by Retention Guardian"
              source="Cohort Analysis"
            />
          </div>

          <a
            href="/campaigns/moodpop/desk-sanctuary"
            className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-400 font-bold text-lg hover:underline underline-offset-4"
          >
            Visit the MoodPop Site &rarr;
          </a>
        </div>
      </section>

      {/* FAQ/Objections (Conversion Psychologist) */}
      <section className="px-6 py-24 bg-zinc-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <ObjectionHandler
            question="What is an 'Unstoppable Site'?"
            answer="It's not just a website. It's a system integrated with AI SEO (GEO), customer psychology triggers, and automated retention loops. It works while you sleep."
          />
          <ObjectionHandler
            question="Do you handle the design?"
            answer="Yes. We use 'Vibe-Coding' to create aesthetics that match your brand while optimizing for maximum conversion."
          />
          <ObjectionHandler
            question="How much does it cost?"
            answer="We offer custom packages based on your current stage. Submit your URL below for a free audit and quote."
          />
        </div>
      </section>

      {/* Contact Form (Lead Gen) */}
      <section id="contact" className="px-6 py-24 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to dominate?</h2>
        <p className="text-gray-400 mb-8">
          Enter your website URL. We'll show you exactly how we can transform it into an Unstoppable Sales Engine.
        </p>

        <form className="flex flex-col gap-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <input type="text" placeholder="Your Name" className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input type="email" placeholder="ceo@company.com" className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-500 transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Website URL</label>
            <input type="url" placeholder="https://your-business.com" className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-500 transition-colors" />
          </div>

          <button type="button" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-lg mt-4 transition-all hover:scale-[1.02]">
            Get My Free Audit
          </button>
          <p className="text-xs text-center text-gray-500 mt-2">No commitment required. We'll reply within 24 hours.</p>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© 2026 Unstoppable Agency. Powered by Advanced Agentic AI.</p>
      </footer>
    </div>
  );
}
