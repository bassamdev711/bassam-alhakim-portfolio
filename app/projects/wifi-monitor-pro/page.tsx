"use client";

import React from "react";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";
import WiFiMonitorGallery from "@/components/projects/WiFiMonitorGallery";
import { Activity, Network, Cpu, Terminal, Radio, HardDrive, Wifi } from "lucide-react";

export default function WiFiMonitorProPage() {
  const architectureLayers = [
    { title: "Per-App Telemetry", desc: "Displays exact real-time network bytes consumed by each installed app, categorized by WiFi vs. Mobile Data, complete with progress bars and official application icons.", icon: <Wifi size={24} /> },
    { title: "Persistent Foreground Engine", desc: "A robust Android service that stays alive under heavy system load, displaying a live network bandwidth counter directly in the system tray.", icon: <Cpu size={24} /> },
    { title: "Security Overlay Shield", desc: "A highly restrictive SYSTEM_ALERT_WINDOW overlay that prompts and halts application access if essential location or usage statistics permissions are revoked, ensuring data integrity.", icon: <Terminal size={24} /> },
    { title: "Relational Cache", desc: "Encrypted local SQLite relational store to keep daily network usage histories, indexed by WiFi SSIDs/BSSIDs, ensuring complete user privacy without external API dependencies.", icon: <HardDrive size={24} /> }
  ];

  const techStack = [
    { name: "Flutter & Dart", role: "Glassmorphism UI & State" },
    { name: "Kotlin Native", role: "OS Kernel Binding & Channel" },
    { name: "Android SDK", role: "NetworkStats & UsageStats APIs" },
    { name: "SQLite (Sqflite)", role: "Local Relational Cache" },
    { name: "SharedPreferences", role: "Low-Latency Context Bridge" }
  ];

  const stats = [
    { label: "Polling Frequency", value: "3 Seconds" },
    { label: "Telemetry Accuracy", value: "100%" },
    { label: "Battery Overhead", value: "Sub-1%" },
    { label: "Device Coverage", value: "Android 8 - 15" }
  ];

  const images = {
    hero: "/images/projects/wifi-monitor/photo_1_2026-05-25_11-41-18.jpg",
    gallery: []
  };

  return (
    <CaseStudyLayout
      title="MONITOR"
      subtitle="WIFI MONITOR PRO"
      tag="Low-Level Systems & Mobile • 2026"
      description="A sophisticated hybrid systems utility (Flutter + Kotlin Native) for real-time per-app data consumption monitoring, backed by a persistent foreground engine, smart threshold alerts, and a strict security overlay shield."
      accentColor="#06b6d4"
      glowColor="rgba(6, 182, 212, 0.08)"
      problemText="Users and network administrators often struggle to track exactly where their mobile data and WiFi bandwidth is vanishing. Typical app store utilities provide cached, delayed, or heavily rounded network usage statistics, and fail to distinguish fine-grained background consumption. Additionally, strict Android 14 resource policies actively terminate background tasks and restrict low-level access to other package statistics."
      solutionText="WiFi Monitor Pro bridges the gap between premium design and system-level programming. Built on a hybrid architecture, it utilizes a custom-written Kotlin Native core to bind directly into Android’s low-level system services, utilizing MethodChannel to serialise data back to a beautiful Flutter UI. The system maintains a fully compliant Android Foreground Service that bypasses aggressive OS task-killers to poll NetworkStatsManager and UsageStatsManager in real-time, delivering granular per-app consumption telemetry."
      architectureLayers={architectureLayers}
      techStack={techStack}
      stats={stats}
      engineeringSummary="The result is a highly optimized systems tool that bridges low-level Android kernel APIs with an ultra-premium Flutter interface while maintaining a near-zero battery footprint."
      githubUrl="https://github.com/bassamdev711/wifi-monitor-pro.git"
      downloadUrl="https://github.com/bassamdev711/wifi-monitor-pro/releases/download/v1.1.0/WiFi_Monitor_Pro-1.apk"
      images={images}
      heroStyle="phone"
      customGallery={<WiFiMonitorGallery accentColor="#06b6d4" />}
    />
  );
}
