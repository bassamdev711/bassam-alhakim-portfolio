"use client";

import React from "react";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";
import HouseOfSpicesGallery from "@/components/projects/HouseOfSpicesGallery";
import { BookOpen, ChefHat, ShoppingBag, Scroll, Sparkles, Map, Database } from "lucide-react";

export default function HouseOfSpicesPage() {
  const architectureLayers = [
    { title: "Heritage Archive", desc: "Interactive story flow displaying archival maps and trading history using lightweight vectors.", icon: <Map size={24} /> },
    { title: "Spicy AI Engine", desc: "A custom LLM model trained on flavor synergy charts and traditional Yemeni spice blending guides.", icon: <ChefHat size={24} /> },
    { title: "Dynamic Mixer UI", desc: "Real-time slider state calculations matching flavor balance algorithms (sweet, hot, aromatic).", icon: <Sparkles size={24} /> },
    { title: "Secure Checkout", desc: "High-speed transactions logging with Stripe integration and immediate warehouse dispatch.", icon: <Database size={24} /> }
  ];

  const techStack = [
    { name: "Next.js", role: "Storefront Client" },
    { name: "Laravel", role: "E-Commerce Core API" },
    { name: "PostgreSQL", role: "Relational Ledger" },
    { name: "Claude API", role: "Flavor Orchestrator" },
    { name: "Tailwind v4", role: "Atmospheric CSS" },
    { name: "Stripe", role: "Transaction Gate" }
  ];

  const stats: {label: string, value: string}[] = [];

  const images = {
    hero: "/images/projects/house-of-spices/1.png",
    gallery: []
  };

  return (
    <CaseStudyLayout
      title="SPICES"
      subtitle="HOUSE OF SPICES"
      tag="AI E-Commerce & Heritage • 2026"
      description="A premium e-commerce experience blending Yemen's spice trading heritage with a specialized AI assistant that helps culinary enthusiasts craft custom spice blends."
      accentColor="#b45309"
      glowColor="rgba(245, 158, 11, 0.1)"
      problemText="Traditional specialty stores struggle to convey sensory narratives online. Spices are a deeply historical, physical, and aromatic commodity; a standard, flat shopping grid does not capture the rich stories of Yemen's spice routes or help customers learn how to customize blends."
      solutionText="A heritage-first digital storefront incorporating a culinary timeline and a custom canvas. We built 'Spicy AI'—a virtual culinary assistant that analyses user taste profiles and dynamically recommends historical spice combinations, enabling users to order fully customized, weight-balanced canisters."
      architectureLayers={architectureLayers}
      techStack={techStack}
      stats={stats}
      engineeringSummary="The solution blends cultural preservation with e-commerce mechanics, yielding high user dwell time and driving sales through interactive mix-and-match personalization."
      githubUrl="https://github.com/bassamdev711/House_of_Spices.git"
      liveUrl="https://house-of-spices-linl.vercel.app/"
      images={images}
      customGallery={<HouseOfSpicesGallery accentColor="#b45309" />}
    />
  );
}
