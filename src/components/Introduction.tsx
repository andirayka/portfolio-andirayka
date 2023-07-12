import Image from "next/image";
import MeImage from "../../public/me-about.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const socialList = [
  { href: "https://www.linkedin.com/in/andirayka/", Icon: BsLinkedin },
  { href: "https://github.com/andirayka/", Icon: FaGithub },
  { href: "https://www.instagram.com/andirayka/", Icon: FiInstagram },
];

const Introduction = () => {
  return (
    <section className="flex flex-col items-center relative w-[90%]">
      {/* Name */}
      <h4 className="text-white text-center text-base font-semibold mt-24">
        Hello, I&apos;m
      </h4>
      <h1 className="text-white text-center text-6xl font-medium mt-3">
        Andi Rayka
      </h1>
      <h2 className="text-slate-300 text-center text-base mt-3">
        React Native Developer
      </h2>

      {/* Header Icons */}
      <div className="flex flex-col gap-6 absolute left-0 bottom-1/2">
        {socialList.map((item) => {
          return (
            <a
              className="text-primary hover:text-white transition duration-300 ease-in"
              key={item.href}
              href={item.href}
              target="_blank"
            >
              <item.Icon size={24} />
            </a>
          );
        })}
      </div>

      {/* Scroll Down */}
      <a
        className="rotate-90 text-primary text-lg absolute right-0 bottom-1/2 hover:text-white transition duration-300 ease-in"
        href=""
      >
        Scroll Down
      </a>

      {/* Call to Action */}
      <div className="flex gap-5 mt-12">
        <button
          type="button"
          className="inline-block bg-transparent rounded py-3.5 px-7 border border-primary text-primary transition duration-300 ease-in hover:bg-white hover:text-bg hover:border-white text-lg"
        >
          Download CV
        </button>
        <button
          type="button"
          className="inline-block bg-primary rounded py-3.5 px-7 text-bg transition duration-300 ease-in hover:bg-white hover:border-white text-lg"
        >
          Let&apos;s Talk
        </button>
      </div>

      {/* Image */}
      <div className="rounded-t-full mt-16 bg-gradient-to-b from-primary to-transparent w-[22rem] pt-20 px-6 pb-6">
        <Image src={MeImage} alt="Picture of Andi Rayka" priority />
      </div>
    </section>
  );
};

export default Introduction;
