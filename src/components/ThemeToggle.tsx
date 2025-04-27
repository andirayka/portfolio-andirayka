"use client";

import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        className="flex items-center justify-center gap-2 p-1.5 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/10 shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.button
          onClick={() => setTheme("light")}
          className={`p-2.5 rounded-full transition-all duration-300 ${
            theme === "light"
              ? "bg-foreground/20 shadow-inner text-accent-1"
              : "hover:bg-foreground/10 text-foreground/80"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Light mode"
        >
          <FiSun className="w-5 h-5" />
        </motion.button>

        <motion.button
          onClick={() => setTheme("dark")}
          className={`p-2.5 rounded-full transition-all duration-300 ${
            theme === "dark"
              ? "bg-foreground/20 shadow-inner text-accent-2"
              : "hover:bg-foreground/10 text-foreground/80"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Dark mode"
        >
          <FiMoon className="w-5 h-5" />
        </motion.button>

        <motion.button
          onClick={() => setTheme("system")}
          className={`p-2.5 rounded-full transition-all duration-300 ${
            theme === "system"
              ? "bg-foreground/20 shadow-inner text-accent-3"
              : "hover:bg-foreground/10 text-foreground/80"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="System theme"
        >
          <FiMonitor className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
