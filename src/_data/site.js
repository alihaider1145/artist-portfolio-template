// src/_data/site.js
// This file controls ALL artist-specific content across the site.
// To set up a new client: just update this file, nothing else.

module.exports = {
  // ─── Artist Identity ─────────────────────────────────────────────────
  artistName: "Thomas Windsor",
  tagline: "Artist | Painting Therapy",
  bio: "Join artist Thomas Windsor as he shares his emotions and celebrates nature.",
  
  // ─── Contact Info ────────────────────────────────────────────────────
  email: "contact@thomaswindsor.art",  // update per client
  phone: null,  // set to null to hide, or "+1 (555) 123-4567"
  
  // ─── Social Media ────────────────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/thomaswindsorstudio/?hl=en",
    youtube: "https://www.youtube.com/@Thomas_Windsor",
    facebook: "https://www.facebook.com/thomaswindsorstudio/?locale=en_GB",
    tiktok: "https://www.tiktok.com/@thomas_windsor",
    // Set any to null to hide that platform
  },
  
  // ─── YouTube Series ────────────────────────────────────────────────────
  youtubeSeriesName: "Painting Therapy",
  youtubeSeriesDescription: "A Youtube series that features artist Thomas Windsor as he shares his emotions and celebrates nature through art.",
  latestYoutubeVideoId: "k1onUZNmCxI",  // the ID from youtube.com/watch?v=ID
  hasYoutubeSeries: true,  // set to false for clients without a series
  
  // ─── Branding & Colors ───────────────────────────────────────────────
  // (Note: You'd eventually move CSS color variables here too, but start with content first)
  colors: {
    primary: "#your-hex-here",   // placeholder for future CSS integration
    accent: "#your-hex-here",
  },
  
  // ─── Shipping & Policies ─────────────────────────────────────────────
  shipsInternationally: true,
  shippingTime: "3-7 days, depending on your location",
  doesCommissions: true,
  signsAllPaintings: true,
  
  // ─── Homepage Content ────────────────────────────────────────────────
  heroImage: "/assets/images/painting-therapy-hero-pic.jpg",
  heroImageAlt: "Painting Therapy",
  
  // Card content (the four cards on homepage)
  cards: [
    {
      image: "/assets/images/card-one.png",
      title: "Painting Therapy",
      text: "A way to bring peace and happiness in your life."
    },
    {
      image: "/assets/images/card-two.png",
      title: "Support an Artist",
      text: "Your purchase directly supports an independent creator and his craft."
    },
    {
      image: "/assets/images/card-three.png",
      title: "From Studio to Home",
      text: "Each painting is carefully packaged and shipped from Thomas's studio."
    },
    {
      image: "/assets/images/card-four.png",
      title: "Created with Joy",
      text: "AI can't enjoy making art."
    }
  ],
  
  // ─── SEO ─────────────────────────────────────────────────────────────
  siteTitle: "Thomas Windsor Portfolio",
  siteDescription: "Original paintings by Thomas Windsor. Watch free painting therapy episodes on YouTube.",
  
  // ─── Copyright ───────────────────────────────────────────────────────
  copyrightYear: new Date().getFullYear(),  // auto-updates every year
};