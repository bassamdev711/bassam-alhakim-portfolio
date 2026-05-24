"use client";

import { motion } from "framer-motion";
import { Server, Database, Globe, Shield, Cpu } from "lucide-react";

interface Layer {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface ProjectArchitectureProps {
  layers: Layer[];
}

export default function ProjectArchitecture({ layers }: ProjectArchitectureProps) {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="flex items-center gap-6 mb-20">
        <div className="h-[1px] w-20 bg-blue-600"></div>
        <h4 className="text-gray-500 font-black tracking-[0.4em] uppercase text-[11px]">System Architecture</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {layers.map((layer, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel p-10 rounded-[2.5rem] border-white/5 space-y-6 group hover:bg-white/[0.05] transition-all duration-700"
          >
            <div className="p-4 w-fit rounded-2xl bg-white/5 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-700">
              {layer.icon}
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight">{layer.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">{layer.desc}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative System Flow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
