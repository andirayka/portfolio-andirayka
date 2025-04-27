"use client";

import { useRef, useState } from "react";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";
import { motion, useInView } from "framer-motion";

export default function Skills() {
  const { skills } = portfolioConfig;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<string>(skills[0].category);

  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case "mobile development":
        return <FaMobileAlt className="w-6 h-6" />;
      case "web development":
        return <FaLaptopCode className="w-6 h-6" />;
      case "frontend":
        return <FaCode className="w-6 h-6" />;
      case "backend":
        return <FaServer className="w-6 h-6" />;
      case "database":
        return <FaDatabase className="w-6 h-6" />;
      default:
        return <FaTools className="w-6 h-6" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      className="py-16 sm:py-32 px-4 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-1/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-2/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-foreground/80 text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-lg">
            Technologies and tools I&apos;ve mastered throughout my professional
            journey
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skills.map((skillGroup) => (
            <button
              key={skillGroup.category}
              onClick={() => setActiveTab(skillGroup.category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === skillGroup.category
                  ? "bg-foreground/15 text-foreground shadow-md scale-105 border border-foreground/10"
                  : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:scale-105"
              }`}
            >
              <div className="flex items-center gap-2">
                {getIconForCategory(skillGroup.category)}
                <span>{skillGroup.category}</span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Skills display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills
            .find((group) => group.category === activeTab)
            ?.items.map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 backdrop-blur-sm hover:bg-foreground/10 transition-all duration-300 hover:shadow-lg group"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-foreground/90 font-medium group-hover:text-foreground transition-colors duration-300">
                    {skill}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < 4 ? "bg-accent-1/70" : "bg-foreground/20"
                        } transition-all duration-300 group-hover:scale-110`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
