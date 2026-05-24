"use client";

import { motion } from "framer-motion";

interface Tech {
  name: string;
  role: string;
}

interface ProjectStackProps {
  technologies: Tech[];
}

export default function ProjectStack({ technologies }: ProjectStackProps) {
  return (
    <section className="py-32">
      <div className="flex items-center gap-6 mb-20">
        <div className="h-[1px] w-20 bg-purple-600"></div>
        <h4 className="text-gray-500 font-black tracking-[0.4em] uppercase text-[11px]">Technical Decisions</h4>
      </div>

      <div className="flex flex-wrap gap-4">
        {technologies.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="px-8 py-6 rounded-[2rem] glass-panel border-white/5 flex flex-col gap-2 group hover:border-purple-500/30 transition-all duration-500"
          >
            <span className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-purple-400 transition-colors">{tech.name}</span>
            <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">{tech.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
