import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const experiences = [
  {
    avatar: {
      src: "https://github.com/shadcn.png",
      alt: "@shadcn",
      fallback: "CN",
    },
    role: "MERN Stack - Intern",
    company: "Wemixt Pvt. Ltd.",
    date: "Nov 2023 - Current",
    description:
      "I built full-responsive static websites using React.js and Material-UI, connecting it with Node.js/Express.js. I utilized the Nodemailer module to convert the application details into PDF format and send them through email. Concurrently, I'm learning Node.js and advanced React for future projects. Additionally, I'm learning Next.js and converting the React.js application into Next.js for Search Engine Optimization.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "HTML",
      "Material UI",
      "CSS",
      "JavaScript",
      "Next Js",
    ],
  },
  {
    avatar: {
      src: "https://github.com/shadcn.png",
      alt: "@shadcn",
      fallback: "CN",
    },
    role: "MERN Stack - Intern",
    company: "Wemixt Pvt. Ltd.",
    date: "Nov 2023 - Current",
    description:
      "I built full-responsive static websites using React.js and Material-UI, connecting it with Node.js/Express.js. I utilized the Nodemailer module to convert the application details into PDF format and send them through email. Concurrently, I'm learning Node.js and advanced React for future projects. Additionally, I'm learning Next.js and converting the React.js application into Next.js for Search Engine Optimization.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "HTML",
      "Material UI",
      "CSS",
      "JavaScript",
      "Next Js",
    ],
  },
];

const Experience = () => {
  return (
    <>
      <div className="flex flex-col relative z-[1px]" key={1}>
        <div className="relative flex flex-col w-full p-2">
          <h1 className="text-xl text-center font-semibold dark:text-white text-black">
            Experience
          </h1>

          <div className="w-full mt-[10px] flex flex-col items-start gap-3">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-2 w-full h-full border rounded-lg shadow-lg border-[#306ee8]"
              >
                <div className="flex items-center gap-2 dark:text-white text-black font-normal">
                  <Avatar className="size-9">
                    <AvatarImage src={exp.avatar.src} alt={exp.avatar.alt} />
                    <AvatarFallback>{exp.avatar.fallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs">{exp.role}</p>
                    <p className="text-xs">{exp.company}</p>
                    <p className="text-xs">{exp.date}</p>
                  </div>
                </div>
                <div className="mt-3 dark:text-white text-black font-normal">
                  <p className="text-[14px]">{exp.description}</p>
                </div>
                <div className="mt-3 dark:text-white text-black font-normal">
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <p className="text-[14px] flex-shrink-0">Skills:</p>
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-[12px] px-2 py-1 bg-[#854CE6]/30 rounded-md uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
