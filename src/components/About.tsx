import Image from "next/image";
import Me from "../../public/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const experience = [
  {
    Icon: FaAward,
    title: "Experience",
    value: "3+ Years Working",
  },
  {
    Icon: FiUsers,
    title: "Clients",
    value: "10+ Clients",
  },
  {
    Icon: VscFolderLibrary,
    title: "Projects",
    value: `${"portfolioList.length"} Completed`,
  },
];

const About = () => {
  return (
    <section className="flex flex-col items-center relative">
      <h5 className="text-slate-300 text-center text-base">Get to Know</h5>
      <h2 className="text-primary text-center text-3xl mt-3">About Me</h2>

      <div className="grid grid-cols-[35%_50%] gap-[15%] my-0 mx-auto">
        {/* Left */}
        <section className="about_me w-full aspect-square rounded-[2rem] grid items-center">
          <div className="rounded-[2rem] overflow-hidden rotate-[10deg] transition duration-200 ease-in hover:rotate-0">
            <Image src={Me} alt="Picture of Andi Rayka" />
          </div>
        </section>

        {/* Right */}
        <section>
          {/* Cards */}
          <div className="grid grid-cols-3 gap-6">
            {experience.map((item) => {
              return (
                <article
                  key={item.title}
                  className="bg-bg-variant border border-transparent rounded-2xl transition duration-300 ease-in hover:bg-transparent hover:border-primary cursor-default flex flex-col items-center p-8"
                >
                  <FaAward className="text-primary text-3xl" />
                  <h5 className="text-lg text-center mt-6">{item.title}</h5>
                  <small className="text-base text-light text-center mt-4 leading-7">
                    {item.value}
                  </small>
                </article>
              );
            })}
          </div>

          <p className="mt-8 mb-10 mx-0 text-light text-lg">
            I am a React Native and React Js developer with 3+ years of
            experience. I&apos;m used to working with Backend Developers and
            UI/UX designers in building online mobile apps from scratch until
            production and maintenance. I&apos;m familiar with RESTFUL API,
            state management, Github, Gitlab, also slicing design from Figma and
            Zeplin.
          </p>

          <a href="#contact" className="btn btn-primary mt-3">
            Let&apos;s Talk
          </a>
        </section>
      </div>
    </section>
  );
};

export default About;
