"use client";

import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-foreground/15 backdrop-blur-sm shadow-lg">
        <button
          onClick={() => setTheme("light")}
          className={`p-2 rounded-md transition-all ${
            theme === "light" ? "bg-foreground/30" : "hover:bg-foreground/20"
          }`}
          aria-label="Light mode"
        >
          <FiSun className="w-5 h-5" />
        </button>

        <button
          onClick={() => setTheme("dark")}
          className={`p-2 rounded-md transition-all ${
            theme === "dark" ? "bg-foreground/30" : "hover:bg-foreground/20"
          }`}
          aria-label="Dark mode"
        >
          <FiMoon className="w-5 h-5" />
        </button>

        <button
          onClick={() => setTheme("system")}
          className={`p-2 rounded-md transition-all ${
            theme === "system" ? "bg-foreground/30" : "hover:bg-foreground/20"
          }`}
          aria-label="System theme"
        >
          <FiMonitor className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
