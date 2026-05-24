"use client";

import React from "react";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";
import TIFGallery from "@/components/projects/TIFGallery";
import { Compass, MessageSquare, Sliders, Cpu, Sparkles, Zap, Shield, Key } from "lucide-react";

export default function TIFPage() {
  const architectureLayers = [
    { title: "WebGL Bottle Render", desc: "Three.js / React Three Fiber rendering the interactive 3D perfume bottle with real-time reflections and cinematic lighting.", icon: <Compass size={24} /> },
    { title: "Smart Keiro API", desc: "A robust chat backend featuring memory mapping and a 3-key Gemini API rotation pool bypassing free-tier rate limits.", icon: <Key size={24} /> },
    { title: "Olfactory Pyramid UI", desc: "Interactive sensory controls displaying Top, Heart, and Base fragrance notes with custom vector paths.", icon: <Sparkles size={24} /> },
    { title: "WhatsApp Checkout Mesh", desc: "Dynamic script compiler generating encrypted, structured WhatsApp purchase messages in 1-Click.", icon: <Sliders size={24} /> }
  ];

  const techStack = [
    { name: "Next.js 16", role: "RTL Core & App Router" },
    { name: "Three.js / R3F", role: "3D Bottle Simulator" },
    { name: "Gemini API", role: "AI Concierge 'Keiro'" },
    { name: "Framer Motion / GSAP", role: "Cinematic Transitions" },
    { name: "Tailwind v4", role: "Luxury Design Tokens" },
    { name: "WhatsApp Engine", role: "Order Compilation" }
  ];

  const stats = [
    { label: "Rendering Rate", value: "60 FPS WebGL" },
    { label: "API Key-Rotation Pool", value: "3 Keys" },
    { label: "AI Response Memory", value: "Last 10 Chats" },
    { label: "WhatsApp Checkout", value: "1-Click" }
  ];

  const images = {
    hero: "/images/projects/tif/1.png",
    gallery: []
  };

  return (
    <CaseStudyLayout
      title="TIF"
      subtitle="THE ART OF OLFACTORY LIGHT"
      tag="Interactive Perfume & AI Concierge • 2026"
      description="A cinematic luxury e-commerce platform for high-end perfumes, showcasing interactive Three.js 3D bottles and 'Keiro'—a glassmorphic AI perfume concierge powered by a rate-resilient Gemini API."
      accentColor="#d97706"
      glowColor="rgba(234, 179, 8, 0.12)"
      problemText="Perfumes are deeply sensory and emotional products, yet traditional online storefronts reduce them to flat 2D grids of images. Standard websites cannot convey the complex olfactory layers (Top, Heart, and Base notes) or simulate the luxury experience of exploring exclusive perfume ingredients."
      solutionText="We created a luxury interactive salon. The site displays high-fidelity 3D perfume bottles that reflect studio lighting, paired with a custom 'Olfactory Pyramid' note explorer. To guide consumers, we built 'Keiro'—a stylized, responsive AI assistant with dynamic expressions (wink, smile) powered by a Gemini key-rotating engine for uninterrupted queries."
      architectureLayers={architectureLayers}
      techStack={techStack}
      stats={stats}
      engineeringSummary="The platform redefines luxury food-and-fragrance tech, resulting in an immersive RTL-first digital experience with elegant animations, high-frequency WebGL rendering, and high customer conversion."
      githubUrl="https://github.com/bassamdev711/tif.git"
      liveUrl="https://tif-lyart.vercel.app/"
      images={images}
      customGallery={<TIFGallery accentColor="#d97706" />}
    />
  );
}
