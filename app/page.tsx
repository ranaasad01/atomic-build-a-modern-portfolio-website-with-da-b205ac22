import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SkillsAndProjects } from "@/components/sections/SkillsAndProjects";
import { ContactAndFooterSection } from "@/components/sections/ContactAndFooterSection";

export default function Page() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────── */}
      <Hero />

      {/* ── About ────────────────────────────────────────── */}
      <About />

      {/* ── Skills + Projects ────────────────────────────── */}
      <SkillsAndProjects />

      {/* ── Contact ──────────────────────────────────────── */}
      <ContactAndFooterSection />
    </main>
  );
}
