"use client";

import { useEffect, useRef, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaEnvelope, FaFile, FaGithub } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";
import { motion } from "framer-motion";

export default function Hero() {
  const { personal, socialLinks } = portfolioConfig;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "FaLinkedin":
        return <FaLinkedin className="w-6 h-6" />;
      case "FaEnvelope":
        return <FaEnvelope className="w-6 h-6" />;
      case "FaFile":
        return <FaFile className="w-6 h-6" />;
      case "FaGithub":
        return <FaGithub className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center gap-8 px-4 py-16 sm:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 z-0"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="z-10 max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-foreground/80 text-sm font-medium mb-4 backdrop-blur-sm">
            Senior Frontend Developer
          </span>
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">{personal.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-foreground/90 font-medium">
            {personal.role}
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-foreground/80 text-lg leading-relaxed mb-8"
        >
          {personal.bio}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-foreground/5 hover:bg-foreground/15 border border-foreground/10 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
              aria-label={link.platform}
            >
              {getIconComponent(link.icon)}
              <span className="text-sm font-medium">{link.platform}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
        >
          <FiMapPin className="w-4 h-4" />
          <span>{personal.location}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
