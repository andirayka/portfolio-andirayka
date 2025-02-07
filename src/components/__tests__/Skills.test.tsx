import { render, screen } from "@testing-library/react";
import Skills from "../Skills";
import { portfolioConfig } from "@/config/portfolio";

jest.mock("@/config/portfolio", () => ({
  portfolioConfig: {
    skills: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Next.js"],
      },
      {
        category: "Tools",
        items: ["Git", "VS Code"],
      },
    ],
  },
}));

describe("Skills", () => {
  it("renders skills section with categories and items", () => {
    render(<Skills />);

    expect(screen.getByText("Skills & Technologies")).toBeInTheDocument();
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Tools")).toBeInTheDocument();

    ["React", "TypeScript", "Next.js", "Git", "VS Code"].forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("applies correct styling to skill items", () => {
    render(<Skills />);

    const skillItem = screen.getByText("React");
    expect(skillItem).toHaveClass("px-3", "py-1", "text-sm", "rounded-full");
  });
});
