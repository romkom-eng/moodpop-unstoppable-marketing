export const siteConfig = {
  name: "The Unstoppable 5",
  description: "The world's most advanced marketing AI agent team.",
  url: "https://example.com", // TODO: Replace with actual deployment URL
  ogImage: "https://example.com/og.jpg",
  links: {
    twitter: "https://twitter.com/example",
    github: "https://github.com/example",
  },
  geo: {
    latitude: "37.7749", // Example: San Francisco
    longitude: "-122.4194",
    region: "US-CA",
    placename: "San Francisco",
  },
  // Authority quotes for 'Quotation Addition'
  authorityQuotes: [
    {
      author: "TechCrunch",
      quote: "The most revolutionary marketing AI since ChatGPT.",
      url: "https://techcrunch.com/example-article"
    },
    {
      author: "Forbes",
      quote: "Changing the landscape of automated growth hacking.",
      url: "https://forbes.com/example-article"
    }
  ],
  stats: {
    users: "10,000+",
    satisfaction: "99.9%",
    retention: "85%"
  }
}

export type SiteConfig = typeof siteConfig;
