"use client";

import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import { portfolioConfig } from "@/config/portfolio";

export default function Skills() {
  const { skills } = portfolioConfig;

  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return <FaCode className="w-6 h-6" />;
      case "backend":
        return <FaDatabase className="w-6 h-6" />;
      default:
        return <FaTools className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 sm:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                {getIconForCategory(skillGroup.category)}
                <h3 className="text-xl font-semibold text-foreground/90">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-foreground/10 hover:bg-foreground/20 transition-all duration-200 hover:scale-105 cursor-default font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
