import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const skills = [
  {
    name: "React Js",
    image: "/icons/react.svg",
  },
  {
    name: "Redux",
    image: "/icons/redux.svg",
  },
  {
    name: "Next Js",
    image: "/icons/nextjs2.svg",
  },

  {
    name: "HTML",
    image: "/icons/html.svg",
  },
  {
    name: "CSS",
    image: "/icons/css.svg",
  },
  {
    name: "JavaScript",
    image: "/icons/javascript.svg",
  },
  {
    name: "Bootstrap",
    image: "/icons/bootstrap.svg",
  },
  {
    name: "Material UI",
    image: "/icons/material-ui.svg",
  },
  {
    name: "Node Js",
    image: "/icons/nodejsLight.svg",
  },
  {
    name: "Express Js",
    image: "/icons/express-js.svg",
  },

  {
    name: "Python",
    image: "/icons/python-original.svg",
  },

  {
    name: "Django",
    image: "/icons/django.svg",
  },
  {
    name: "MySQL",
    image: "/icons/mysql-original-wordmark.svg",
  },
  {
    name: "Postgresql",
    image: "/icons/postgresql.svg",
  },
  {
    name: "MongoDB",
    image: "/icons/mongodb-original-wordmark.svg",
  },
  {
    name: "Git",
    image: "/icons/icons8-git.svg",
  },
  {
    name: "GitHub",
    image: "/icons/icons8-github.svg",
  },
  {
    name: "Vercel",
    image: "/icons/vercel.svg",
  },
  {
    name: "Netlify",
    image: "/icons/netlify.png",
  },
  {
    name: "VS Code",
    image: "/icons/vs-code.svg",
  },
  {
    name: "Postman",
    image: "/icons/postman.png",
  },

  {
    name: "Figma",
    image: "/icons/figma.svg",
  },
];

const Skills = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden">
      {/* Heading for Skills */}
      <h2 className="absolute top-2 hidden md1:block xl:text-xl font-semibold text-start text-black dark:text-white z-10 p-4">
        Skills
      </h2>

      {/* Container for scrolling icons */}
      <div className="flex animate-loop-scroll hover:paused w-[200%]">
        {[...skills, ...skills].map((skill, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex-shrink-0 flex flex-col items-center justify-center mx-4 w-[60px] md:w-[60px] lg:w-[80px]">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default Skills;
