"use client";

import React from "react";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";
import RestaurantERPExplorer from "@/components/projects/RestaurantERPExplorer";
import { Server, Database, Layout, Shield } from "lucide-react";

export default function RestaurantERPPage() {
  const architectureLayers = [
    { title: "Core API", desc: "Laravel/Node high-concurrency orchestration for real-time order processing.", icon: <Server size={24} /> },
    { title: "Relational Data", desc: "PostgreSQL with optimized indexing for multi-branch financial reporting.", icon: <Database size={24} /> },
    { title: "Front-End Mesh", desc: "Next.js App Router for the ultimate restaurant management UX.", icon: <Layout size={24} /> },
    { title: "Security Layer", desc: "JWT-based branch isolation and role-based access control.", icon: <Shield size={24} /> }
  ];

  const techStack = [
    { name: "Next.js", role: "UI Orchestration" },
    { name: "Laravel", role: "Business Logic" },
    { name: "PostgreSQL", role: "Data Integrity" },
    { name: "Socket.io", role: "Real-time Sync" },
    { name: "Docker", role: "Deployment" },
    { name: "Tailwind v4", role: "Design System" }
  ];

  const stats = [
    { label: "Database Schema", value: "107 Tables" },
    { label: "UI Screens & Modules", value: "81 Views" },
    { label: "Access & RBAC Roles", value: "8 Roles" },
    { label: "Advanced Core Engines", value: "4 Engines" }
  ];

  const images = {
    hero: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115039.png",
    gallery: []
  };

  return (
    <CaseStudyLayout
      title="RESTAURANT"
      subtitle="ERP ECOSYSTEM"
      tag="System Architecture • 2026"
      description="A high-performance orchestration system designed for large-scale restaurant chains. Focused on real-time inventory, multi-branch financial integrity, and automated logistics."
      accentColor="#2563eb"
      glowColor="rgba(37, 99, 235, 0.15)"
      problemText="Managing a large-scale restaurant chain involves handling thousands of orders across different physical locations, each with its own inventory and financial cycle. The challenge was to build a centralized engine that could handle high-concurrency data flows while maintaining 100% data integrity for financial reporting and inventory tracking."
      solutionText="A unified architecture built on a high-concurrency backend API combined with a Next.js frontend client. Leveraging stateful caching, real-time Socket.io channels, and automated background jobs, the system guarantees instant menu syncing, real-time sales reporting, and isolated branch security profiles."
      architectureLayers={architectureLayers}
      techStack={techStack}
      stats={stats}
      engineeringSummary="The result is a robust enterprise ecosystem designed with multi-branch isolation, double-entry accounting integrity, and high-concurrency Laravel/Flutter orchestration."
      githubUrl="https://github.com/bassamdev711/restaurant-system.git"
      images={images}
      customGallery={<RestaurantERPExplorer accentColor="#2563eb" />}
    />
  );
}
