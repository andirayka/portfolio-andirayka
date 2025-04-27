"use client";

import { useRef } from "react";
import { FaCode, FaGlobe, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";
import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function Projects() {
  const { projects } = portfolioConfig;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = ["All", "Web", "Mobile"];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) =>
      project.technologies.some((tech) =>
        activeCategory === "Web"
          ? ["React JS", "Next.js", "Vite"].includes(tech)
          : ["React Native"].includes(tech)
      )
    );
  }, [projects, activeCategory]);

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
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-2/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-3/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-foreground/80 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-lg">
            A showcase of my best work and technical expertise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-3 mb-12 justify-center"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-sm rounded-lg transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-foreground/15 text-foreground font-semibold shadow-md transform scale-105 border-foreground/20"
                  : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:scale-105 border-transparent"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 shadow-lg hover:shadow-xl"
                whileHover={{ y: -8 }}
              >
                {project.imageUrl && (
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0.8,
                      }}
                      className="flex gap-2"
                    >
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300"
                          aria-label="View live demo"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300"
                          aria-label="View source code"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                    </motion.div>
                  </div>

                  <p className="text-foreground/70 mb-4 transition-colors duration-300 group-hover:text-foreground/80">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 hover:bg-foreground/15 transition-all duration-200 hover:scale-105 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4 pt-4 border-t border-foreground/10">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
                      >
                        <FaGlobe className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
                      >
                        <FaCode className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
