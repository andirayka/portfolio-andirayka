"use client";

import { FaBriefcase, FaCircle } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";

export default function Experience() {
  const { experiences } = portfolioConfig;

  return (
    <section className="py-16 sm:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <FaBriefcase className="w-6 h-6 text-foreground/90" />
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-8 border-l-2 border-foreground/20 hover:border-foreground/40 transition-all duration-300 hover:translate-x-1 shadow-sm hover:shadow-md shadow-foreground/5"
            >
              <FaCircle className="absolute w-3 h-3 -left-[7px] top-2 text-foreground/30" />

              <div className="space-y-2 group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1">
                  <h3 className="text-xl font-semibold text-foreground/90">
                    {exp.role}
                  </h3>
                  <span className="text-sm whitespace-nowrap text-foreground/80 font-medium transition-colors duration-300 group-hover:text-foreground">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-lg text-foreground/85 font-medium transition-colors duration-300 group-hover:text-foreground/95">
                  {exp.company}
                </p>
                <p className="text-foreground/70 transition-colors duration-300 group-hover:text-foreground/80">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-foreground/10 hover:bg-foreground/20 transition-all duration-200 hover:scale-105 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
