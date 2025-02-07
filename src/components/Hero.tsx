"use client";

import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";
import { FiMapPin } from "react-icons/fi";

export default function Hero() {
  const { personal, socialLinks } = portfolioConfig;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center gap-6 px-4 py-16 sm:py-32 bg-background">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
          {personal.name}
        </h1>
        <h2 className="text-xl sm:text-2xl text-foreground/90 transition-colors duration-300">
          {personal.role}
        </h2>
      </div>

      <p className="max-w-2xl text-foreground/80 transition-opacity duration-300 hover:text-foreground/95">
        {personal.bio}
      </p>

      <div className="flex gap-4 mt-4">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-foreground/10 transition-all duration-300 hover:scale-110"
            aria-label={link.platform}
          >
            <Image
              src={`/icons/${link.icon}.svg`}
              alt={`${link.platform} icon`}
              width={24}
              height={24}
              className="dark:invert transition-transform duration-300"
            />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300">
        <FiMapPin className="w-4 h-4" />
        <span>{personal.location}</span>
      </div>
    </section>
  );
}
