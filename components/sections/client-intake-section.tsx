"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Monitor, 
  Smartphone, 
  Database, 
  Cloud, 
  LayoutDashboard, 
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap
} from "lucide-react";

const projectTypes = [
  { id: "Web Platform", label: "Web Platform", icon: Monitor },
  { id: "Mobile App", label: "Mobile App", icon: Smartphone },
  { id: "ERP System", label: "ERP System", icon: Database },
  { id: "SaaS Product", label: "SaaS Product", icon: Cloud },
  { id: "Dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "AI System", label: "AI System", icon: Cpu },
];



const schema = z.object({
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional().or(z.literal("")),
  vision: z.string().min(10, "Please describe your vision (at least 10 characters)"),
  name: z.string().min(2, "Name is required"),
  whatsapp: z.string().min(5, "WhatsApp number is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

export default function ClientIntakeSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      projectType: "",
      budget: "",
      vision: "",
      name: "",
      whatsapp: "",
      email: "",
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate initializing collaboration channel
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const message = `🚀 *New Collaboration Request*

👤 *Client:* ${data.name}
📱 *Contact:* ${data.whatsapp}
${data.email ? `📧 *Email:* ${data.email}\n` : ''}
🧩 *Project Type:*
${data.projectType}

${data.budget ? `💰 *Estimated Budget:*\n$${data.budget.replace(/^\$/, '')}\n\n` : ''}📝 *Project Vision:*
${data.vision}`;

    const encodedMessage = encodeURIComponent(message);
    const targetNumber = "967780500363";
    const waUrl = `https://wa.me/${targetNumber}?text=${encodedMessage}`;
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    window.open(waUrl, "_blank");
    
    // Reset success state after some time
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32 mb-12 overflow-hidden z-10 border-t border-glass-border">
      {/* Deep ambient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mood-blue to-transparent opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-mood-blue rounded-full blur-[120px] opacity-40" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col xl:flex-row gap-16 lg:gap-20">
          
          {/* LEFT SIDE: Visual Experience */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col justify-center space-y-12 relative"
          >
            <div className="space-y-8 relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-[10px] uppercase tracking-[0.5em] font-black text-primary border border-primary/30 shadow-[0_0_20px_var(--glow-primary)]">
                <Zap size={14} fill="currentColor" /> Enterprise Intake
              </span>
              
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-foreground break-normal" style={{ wordBreak: "normal", overflowWrap: "normal" }}>
                From Concept <br />
                <span className="text-muted italic">To Scalable</span><br />
                Digital Systems.
              </h2>
              
              <p className="text-muted text-lg md:text-xl max-w-md leading-relaxed font-medium">
                Initiate a secure collaboration channel. Provide the architectural blueprint of your vision, and let's engineer a resilient solution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {[
                { text: "Web Platforms", icon: Monitor },
                { text: "Mobile Apps", icon: Smartphone },
                { text: "ERP Systems", icon: Database },
                { text: "AI Integrations", icon: Cpu },
                { text: "Luxury Interfaces", icon: Sparkles }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl glass-panel border border-glass-border flex items-center justify-center text-muted group-hover:text-primary group-hover:border-primary/50 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_var(--glow-primary)]">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm md:text-base font-bold uppercase tracking-wider text-muted group-hover:text-foreground transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Geometric accents */}
            <div className="absolute top-1/2 -right-10 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-glass-border to-transparent hidden xl:block" />
          </motion.div>

          {/* RIGHT SIDE: Smart Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex-[1.2] relative"
          >
            {/* Form Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-[50px] -z-10" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="glass-panel border-white/10 p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col gap-10">
              
              {/* Form Content */}
              <div className="space-y-10 relative z-10">
                
                {/* Step 1: Project Type */}
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black uppercase tracking-widest text-muted">1. What are you building?</label>
                    {errors.projectType && <span className="text-[10px] text-red-500 uppercase tracking-widest font-bold bg-red-500/10 px-2 py-1 rounded">{errors.projectType.message}</span>}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    <Controller
                      name="projectType"
                      control={control}
                      render={({ field }) => (
                        <>
                          {projectTypes.map((pt) => {
                            const isSelected = field.value === pt.id;
                            return (
                              <button
                                type="button"
                                key={pt.id}
                                onClick={() => field.onChange(pt.id)}
                                className={`flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl border transition-all duration-300 ${isSelected ? 'bg-primary/10 border-primary shadow-[0_0_20px_var(--glow-primary)] text-primary scale-[1.02]' : 'bg-background/40 border-glass-border text-muted hover:border-muted hover:text-foreground hover:bg-background/60'}`}
                              >
                                <pt.icon size={22} className={isSelected ? "text-primary" : "text-subtle"} />
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-center leading-tight">
                                  {pt.label}
                                </span>
                              </button>
                            );
                          })}
                        </>
                      )}
                    />
                  </div>
                </div>

                {/* Step 2: Budget */}
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black uppercase tracking-widest text-muted">2. Project Budget (Optional)</label>
                    {errors.budget && <span className="text-[10px] text-red-500 uppercase tracking-widest font-bold bg-red-500/10 px-2 py-1 rounded">{errors.budget.message}</span>}
                  </div>
                  <div className="relative group max-w-sm">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-muted font-bold">$</span>
                    <input
                      {...register("budget")}
                      type="text"
                      placeholder="e.g. 5,000"
                      className="w-full bg-background/50 backdrop-blur-md border border-glass-border rounded-xl pl-10 pr-5 py-4 text-sm text-foreground font-medium placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 shadow-inner group-hover:border-white/20"
                    />
                  </div>
                </div>

                {/* Step 3: Vision */}
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black uppercase tracking-widest text-muted">3. Describe your vision</label>
                    {errors.vision && <span className="text-[10px] text-red-500 uppercase tracking-widest font-bold bg-red-500/10 px-2 py-1 rounded">{errors.vision.message}</span>}
                  </div>
                  <div className="relative group">
                    <textarea
                      {...register("vision")}
                      placeholder="Share the architectural blueprint of your idea..."
                      rows={5}
                      className="w-full bg-background/50 backdrop-blur-md border border-glass-border rounded-2xl p-5 md:p-6 text-sm text-foreground font-medium placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none shadow-inner group-hover:border-white/20"
                    ></textarea>
                  </div>
                </div>

                {/* Step 4: Contact */}
                <div className="space-y-5">
                  <label className="text-xs font-black uppercase tracking-widest text-muted">4. Your Contact</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 relative group">
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Full Name *"
                        className="w-full bg-background/50 backdrop-blur-md border border-glass-border rounded-xl px-5 py-4 text-sm text-foreground font-medium placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 shadow-inner group-hover:border-white/20"
                      />
                      {errors.name && <span className="absolute -bottom-6 left-2 text-[10px] text-red-500 uppercase tracking-widest font-bold">{errors.name.message}</span>}
                    </div>
                    <div className="space-y-2 relative group">
                      <input
                        {...register("whatsapp")}
                        type="text"
                        placeholder="WhatsApp Number *"
                        className="w-full bg-background/50 backdrop-blur-md border border-glass-border rounded-xl px-5 py-4 text-sm text-foreground font-medium placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 shadow-inner group-hover:border-white/20"
                      />
                      {errors.whatsapp && <span className="absolute -bottom-6 left-2 text-[10px] text-red-500 uppercase tracking-widest font-bold">{errors.whatsapp.message}</span>}
                    </div>
                    <div className="space-y-2 md:col-span-2 relative group mt-2 md:mt-0">
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="Email Address (Optional)"
                        className="w-full bg-background/50 backdrop-blur-md border border-glass-border rounded-xl px-5 py-4 text-sm text-foreground font-medium placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 shadow-inner group-hover:border-white/20"
                      />
                      {errors.email && <span className="absolute -bottom-6 left-2 text-[10px] text-red-500 uppercase tracking-widest font-bold">{errors.email.message}</span>}
                    </div>
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-6 mt-4 border-t border-glass-border relative z-10">
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full flex items-center justify-center gap-3 px-6 py-5 md:py-6 bg-primary/20 border border-primary/50 rounded-full text-primary font-black text-xs md:text-sm uppercase tracking-widest shadow-[0_0_30px_var(--glow-primary)] animate-pulse cursor-wait"
                    >
                      <Sparkles size={18} className="animate-spin-slow" />
                      Initializing Collaboration Channel...
                    </motion.div>
                  ) : isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full flex items-center justify-center gap-3 px-6 py-5 md:py-6 bg-green-500/20 border border-green-500/50 rounded-full text-green-500 font-black text-xs md:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                    >
                      <CheckCircle2 size={18} />
                      Redirecting to WhatsApp...
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group w-full flex items-center justify-center gap-3 px-6 py-5 md:py-6 bg-primary hover:bg-primary/90 rounded-full text-white font-black text-xs md:text-sm uppercase tracking-widest transition-all duration-500 shadow-[0_0_40px_var(--glow-primary)] hover:shadow-[0_0_60px_var(--glow-primary)]"
                    >
                      Start Your Project
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Internal Glass Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
