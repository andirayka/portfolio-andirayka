"use client";

import { useRef } from "react";
import {
  FaBriefcase,
  FaCircle,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";
import { motion, useInView } from "framer-motion";

export default function Experience() {
  const { experiences } = portfolioConfig;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-32 px-4 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-1/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-3/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-foreground/80 text-sm font-medium mb-4">
            Work History
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-lg">
            My journey as a frontend developer across different projects and
            companies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16 relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-1/30 via-accent-2/30 to-accent-3/30 transform sm:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative flex flex-col sm:flex-row gap-8 ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot with pulse effect */}
              <div className="absolute left-0 sm:left-1/2 top-0 transform -translate-x-1/2 z-10">
                <div className="relative">
                  <FaCircle className="w-4 h-4 text-accent-2" />
                  <div className="absolute inset-0 rounded-full bg-accent-2/30 animate-ping opacity-75"></div>
                </div>
              </div>

              {/* Content card */}
              <div className="sm:w-1/2 ml-8 sm:ml-0 pl-0 sm:pl-8 sm:pr-8">
                <motion.div
                  className="p-6 rounded-xl bg-foreground/5 border border-foreground/10 hover:border-foreground/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col gap-4">
                    {/* Role and duration */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-foreground/10 group-hover:bg-foreground/15 transition-colors duration-300">
                          <FaBriefcase className="w-5 h-5 text-accent-1" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm whitespace-nowrap text-foreground/70 font-medium transition-colors duration-300 group-hover:text-foreground/90">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Company */}
                    <div className="flex items-center gap-2">
                      <FaBuilding className="w-4 h-4 text-foreground/60" />
                      <p className="text-lg text-foreground/80 font-medium transition-colors duration-300 group-hover:text-foreground/95">
                        {exp.company}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 transition-colors duration-300 group-hover:text-foreground/80 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 hover:bg-foreground/20 transition-all duration-200 hover:scale-105 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
