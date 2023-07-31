import { BsPatchCheckFill } from "react-icons/bs";

const mobileSkills = [
  { title: "React Native", value: "Experienced" },
  { title: "Unit Testing", value: "Intermediate" },
  { title: "Typescript", value: "Experienced" },
  { title: "REST API", value: "Experienced" },
  { title: "Design Slicing", value: "Experienced" },
  { title: "File Management", value: "Experienced" },
];

const webSkills = [
  { title: "React JS", value: "Experienced" },
  { title: "Unit Testing", value: "Intermediate" },
  { title: "Typescript", value: "Experienced" },
  { title: "REST API", value: "Experienced" },
  { title: "Design Slicing", value: "Experienced" },
  { title: "Responsive Design", value: "Intermediate" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="grid grid-cols-2 gap-8">
        <BoxItem title="Mobile Development" data={mobileSkills} />
        <BoxItem title="Web Development" data={webSkills} />
      </div>
    </section>
  );
};

const BoxItem = ({
  title,
  data,
}: {
  title: string;
  data: typeof mobileSkills;
}) => {
  return (
    <div className="bg-bg-variant py-10 px-20 rounded-[2rem] border border-transparent transition duration-300 ease-in hover:bg-transparent hover:border-primary cursor-default">
      <h3 className="text-center mb-8 text-primary">{title}</h3>
      <div className="grid grid-cols-2 gap-x-8">
        {data.map((item) => {
          return (
            <article key={item.title} className="flex gap-3">
              <BsPatchCheckFill className="mt-2 text-primary" />
              <div>
                <h4>{item.title}</h4>
                <small className="text-light">{item.value}</small>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
