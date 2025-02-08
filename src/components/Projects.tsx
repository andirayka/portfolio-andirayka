"use client";

import { FaCode, FaGlobe } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";
import Image from "next/image";
import { useState, useMemo } from "react";

export default function Projects() {
  const { projects } = portfolioConfig;
  const [activeCategory, setActiveCategory] = useState<string>("All");

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

  return (
    <section className="py-16 sm:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <FaCode className="w-6 h-6 text-foreground/90" />
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground">
            My Projects
          </h2>
        </div>

        <div className="flex gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:scale-105 ${
                activeCategory === category
                  ? "bg-foreground/60 text-foreground font-semibold shadow-md transform scale-105 border border-foreground/20"
                  : "bg-foreground/10 text-foreground/70 hover:bg-foreground/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              {project.imageUrl && (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <h3 className="text-xl font-semibold text-foreground/90 mb-2">
                {project.title}
              </h3>

              <p className="text-foreground/70 mb-4 transition-colors duration-300 group-hover:text-foreground/80">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-foreground/10 hover:bg-foreground/20 transition-all duration-200 hover:scale-105 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
                  >
                    <FaGlobe className="w-4 h-4" />
                    Live Demo
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
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
