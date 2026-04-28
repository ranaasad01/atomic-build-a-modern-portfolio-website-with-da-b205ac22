"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={cn("h-9 w-9 rounded-full bg-muted animate-pulse", className)} />;
  }

  const isDark = theme === "dark";
  const sunClass = isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0";
  const moonClass = !isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative h-9 w-9 rounded-full flex items-center justify-center",
        "bg-slate-800/50 dark:bg-slate-700/50 hover:bg-slate-700 dark:hover:bg-slate-600",
        "border border-slate-700 dark:border-slate-600",
        "text-slate-300 hover:text-white transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-indigo-500",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className={cn("h-4 w-4 absolute transition-all duration-300", sunClass)} />
      <Moon className={cn("h-4 w-4 absolute transition-all duration-300", moonClass)} />
    </button>
  );
}
