import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
import { portfolioConfig } from "@/config/portfolio";

jest.mock("@/config/portfolio", () => ({
  portfolioConfig: {
    personal: {
      name: "Test Name",
      role: "Frontend Developer",
      bio: "Test bio",
      location: "Test Location",
    },
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com",
        icon: "github",
      },
    ],
  },
}));

describe("Hero", () => {
  it("renders hero section with personal information", () => {
    render(<Hero />);

    expect(screen.getByText("Test Name")).toBeInTheDocument();
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Test bio")).toBeInTheDocument();
    expect(screen.getByText("Test Location")).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Hero />);

    const socialLink = screen.getByRole("link", { name: "GitHub" });
    expect(socialLink).toHaveAttribute("href", "https://github.com");
    expect(socialLink).toHaveAttribute("target", "_blank");
  });
});
