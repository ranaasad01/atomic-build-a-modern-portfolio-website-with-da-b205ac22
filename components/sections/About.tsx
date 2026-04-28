"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { Download, MapPin, Calendar, Coffee } from "lucide-react";
import Image from "next/image";

const highlights = [
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: Calendar, label: "Experience", value: "5+ Years" },
  { icon: Coffee, label: "Projects", value: "50+ Shipped" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-slate-900/50 dark:bg-slate-950/50">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
              About Me
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              Crafting Digital Experiences
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              A passionate developer who loves building things that live on the internet.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/50">
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  {/* Placeholder avatar */}
                  <div className="text-center space-y-4">
                    <div className="h-32 w-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-5xl font-bold shadow-xl shadow-indigo-500/30">
                      AC
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Alex Chen</p>
                      <p className="text-slate-400 text-sm">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow-lg shadow-indigo-500/30 text-sm font-semibold"
              >
                Open to Work 🚀
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Hey! I&apos;m Alex, a Full Stack Developer based in San Francisco with over 5 years
                  of experience building web applications that users love. I specialize in the
                  JavaScript ecosystem — React, Next.js, Node.js — and I&apos;m deeply passionate
                  about performance, accessibility, and developer experience.
                </p>
                <p>
                  I&apos;ve had the privilege of working with startups and established companies alike,
                  helping them ship products that scale. Whether it&apos;s architecting a complex
                  microservices backend, crafting pixel-perfect UIs, or optimizing Core Web Vitals,
                  I bring the same level of care and attention to every project.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me contributing to open source, writing
                  technical articles, or exploring the latest in AI/ML tooling. I believe in
                  continuous learning and sharing knowledge with the community.
                </p>
              </div>

              {/* Highlights */}
              <StaggerContainer className="grid grid-cols-3 gap-4 pt-2">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <motion.div
                    key={label}
                    variants={staggerItem}
                    className="bg-slate-800/50 dark:bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center hover:border-indigo-500/30 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-indigo-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">{value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{label}</div>
                  </motion.div>
                ))}
              </StaggerContainer>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
