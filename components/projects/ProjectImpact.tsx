"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Stat {
  label: string;
  value: string;
}

interface ProjectImpactProps {
  stats: Stat[];
  conclusion: string;
}

export default function ProjectImpact({ stats, conclusion }: ProjectImpactProps) {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-10">
          <h4 className="text-blue-500 font-black tracking-[0.4em] uppercase text-[11px]">Final Outcome</h4>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            Scale <br /> <span className="text-gray-500 italic">& Impact.</span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed font-medium max-w-lg">
            {conclusion}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-10 rounded-[3rem] glass-panel border-white/5 flex flex-col justify-between group hover:bg-blue-600 transition-all duration-700"
            >
              <div className="text-gray-600 group-hover:text-white/50 transition-colors uppercase font-black text-[10px] tracking-widest">{stat.label}</div>
              <div className="text-4xl font-black tracking-tighter text-white mt-4">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
