"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  color?: string;
}

export default function ProjectHero({ title, subtitle, description, tag, color = "blue" }: ProjectHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-20 border-b border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] -z-10 opacity-20 ${color === 'purple' ? 'bg-purple-600' : 'bg-blue-600'}`} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full glass-panel text-[10px] uppercase tracking-[0.5em] font-black text-blue-500 border border-blue-500/30 w-fit"
      >
        <Zap size={14} fill="currentColor" /> {tag}
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[clamp(3.5rem,10vw,8rem)] font-black tracking-tighter leading-[0.85] mb-8 uppercase"
      >
        {title} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 opacity-50 italic">
          {subtitle}
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl text-xl md:text-2xl text-gray-400 font-medium leading-relaxed tracking-tight"
      >
        {description}
      </motion.p>
    </section>
  );
}
