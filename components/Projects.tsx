import { Avatar, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export const projects = [
  {
    id: 1,
    title: "Namaste Website (NGO)",
    date: "Dec 2023",
    description:
      "This is a site for the NGO: Neurodevelopment and Autism in South Asia.",

    image: "/namasthe.PNG",
    tags: [
      "React.JS",
      "CSS | MUI",
      "JavaScript",
      "Axios",
      "NodeJs",
      "Nodemailer",
      "Postman",
      "Rest API",
    ],
    category: "web_app",
    github: "",
    webapp: "https://namastesl.com",
  },

  {
    id: 2,
    title: "LMS - Education - Admin panel",
    date: "June 2023 - Aug 2023",
    description:
      "Developed the LMS panel to track fees, courses, student details, lecturer details, etc.",
    image:
      "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
    tags: [
      "React.JS",
      "CSS | MUI",
      "JavaScript",
      "Redux",
      "Axios",
      "Postman",
      "Rest API",
    ],
    category: "web_app",
    github: " ",
    webapp: " ",
  },
  {
    id: 3,
    title: "Adiya Admin Panel - Resturant Application",
    date: "Mar 2023 - June 2023",
    description:
      "It is a restaurant application that can be used by the admin to track products and customer purchases, seller and customer details",

    image:
      "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
    tags: [
      "React.JS",
      "CSS | MUI",
      "JavaScript",
      "Redux",
      "Axios",
      "Postman",
      "Rest API",
    ],
    category: "web_app",
    github: " ",
    webapp: " ",
    // member: [
    //   {
    //     name: "Rishav Chanda",
    //     img: "https://avatars.githubusercontent.com/u/64485885?v=4",
    //     linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
    //     github: "https://github.com/rishavchanda/",
    //   },
    //   {
    //     name: "Upasana Chaudhuri",
    //     img: "https://avatars.githubusercontent.com/u/100614635?v=4",
    //     linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
    //     github: "https://github.com/upasana0710",
    //   },
    // ],
  },

  {
    id: 4,
    title: "Quiz App- using API",
    date: "Jan 2023",
    description:
      "It is an application made with React.js, Bootstrap, and Rapid API. I fetch data from https://marcconrad.com/uob/smile/api. It validates answers and returns a score out of 20. There is also a time limit; each question needs to be submitted within 3 minutes, or it may be considered a wrong answer. Finally, the result is displayed.",

    image: "/questionfrom.PNG",
    tags: ["React.JS", "CSS | Bootstrap", "JavaScript", "Axios", "API"],
    category: "web_app",
    github: "https://github.com/Abi-097/Question_Form.git",
    webapp: "https://question-form-five.vercel.app/",

    // member: [
    //   {
    //     name: "Rishav Chanda",
    //     img: "https://avatars.githubusercontent.com/u/64485885?v=4",
    //     linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
    //     github: "https://github.com/rishavchanda/",
    //   },
    //   {
    //     name: "Upasana Chaudhuri",
    //     img: "https://avatars.githubusercontent.com/u/100614635?v=4",
    //     linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
    //     github: "https://github.com/upasana0710",
    //   },
    // ],
  },

  {
    id: 5,
    title: "IMDb site Clone- include API",
    date: "Jan 2023",
    description:
      "The app is built with ReactJS and fetch movie data from an IMDB API using Rapid API. Clicking on a movie takes you to a specific page.",
    image: "/imdb.PNG",
    tags: ["React.JS", "CSS | Bootstrap", "JavaScript", "Axios", "Rest API"],
    category: "web_app",
    github: "https://github.com/Abi-097/Clone-IMDB.git",
    webapp: "https://clone-imdb-a5at.vercel.app/",
  },
  {
    id: 6,
    title: "NIC tracker",
    date: "Dec 2022",
    description:
      "This is a NIC generator that shows date of birth and gender when a NIC number is inputted.",
    image: "/nictracker.PNG",
    tags: ["React.JS", "CSS | Bootstrap", "JavaScript", "Axios"],
    category: "web_app",
    github: "https://github.com/Abi-097/NIC_tracker.git",
    webapp: "https://nic-tracker.vercel.app/",
  },

  {
    id: 7,
    title: "Portfolio",
    date: "Dec 2022",
    description: "My personal portfolio with real information.",
    image: "/portfolio.PNG",

    tags: ["Next.JS", "CSS | MUI", "JavaScript", "Axios", "EmailJS"],
    category: "web_app",
    github: "https://github.com/Abi-097/Portfolio_2",
    webapp: "https://abisportfolio.vercel.app/",
  },
  {
    id: 8,
    title:
      "The problem I encountered when deploying the build — the white screen.",
    date: "Feb 2024",
    description:
      "When building our React application, I encountered this problem and found a solution for it.",
    image: "/blog1.PNG",
    tags: ["Deploy"],
    category: "blog",
    github: "",
    webapp:
      "https://medium.com/@abishekm84/the-problem-i-encountered-when-deploying-the-build-the-white-screen-5dc3aeea28f4",
  },
  {
    id: 9,
    title: "GIT - Tutorial",
    date: "Dec 2023",
    description:
      "GitHub hosts Git repositories and provides developers with tools to improve their code. These tools include command-line features, threaded discussions for issues, pull requests, code review capabilities, as well as access to a collection of free and for-purchase apps available in the GitHub Marketplace.",
    image: "/git.png",
    tags: ["Git", "GitHub"],
    category: "certificate",
    github: "",
    webapp:
      "https://www.youtube.com/watch?v=tRZGeaHPoaw&pp=ygUMZ2l0IHR1dG9yaWFs",
  },
  {
    id: 10,
    title: "Next.JS - Tutorial",
    date: "Jan 2024",
    description:
      "Next.js, the React Framework, aims to have the best-in-class developer experience and many built-in features, such as an intuitive page-based routing system (with support for dynamic routes) and pre-rendering. Both static generation (SSG) and server-side rendering (SSR) are supported on a per-page basis.",
    image: "/pf.jpeg",
    tags: ["React.JS", "Next.JS"],
    category: "certificate",
    github: "",
    webapp:
      "https://www.youtube.com/watch?v=wm5gMKuwSYk&pp=ygUQbmV4dCBqcyB0dXRvcmlhbA%3D%3D",
  },
  {
    id: 11,
    title: "ToDo Application using Next.JS",
    date: "Jan 2024",
    description:
      "It's a ToDo application connected to the MERN stack, utilizing CRUD methods.",
    image: "/todo.png",
    tags: [
      "Next.JS",
      "CSS | Tailwind CSS",
      "Javascript",
      "Axios",
      "Node.JS",
      "Express.JS",
      "MongoDB",
    ],
    category: "web_app",
    github: "https://github.com/Abi-097/todoapp_crud.git",
    webapp: "todoapp-crud.vercel.app",
  },
  {
    id: 12,
    title: "Git Commands",
    date: "Jan 2024",
    description:
      "Basic and very important Git commands that developers need to know.",
    image: "/git2.png",
    tags: ["Git", "GitHub"],
    category: "blog",
    github: "",
    webapp: "https://medium.com/@abishekm84/git-9dedeeb9d000",
  },
  {
    id: 13,
    title: "Ticketing App",
    date: "April 2024",
    description: "Application for Ticket Raising or Creating.",

    image: "/ticket_mgt.PNG",
    tags: [
      "Next.JS",
      "CSS | Tailwind CSS",
      "Javascript",
      "Axios",
      "Node.JS",
      "Postman",
      "Rest API",
    ],
    category: "web_app",
    github: "https://github.com/Abi-097/ticketing-app.git",
    webapp: "https://ticketing-app-swart.vercel.app",
  },
  {
    id: 14,
    title: "Rarely using HTML tags - Part1",
    date: "April 2024",
    description: "Basic and very important HTML Tag every developer must know.",
    image: "/0_Ff_qfeJSyyNgU8Na.png",
    tags: ["HTML"],
    category: "blog",
    github: "",
    webapp:
      "https://medium.com/@abishekm84/rarely-using-html-tags-part1-03473d0e986c",
  },
  {
    id: 15,
    title: "Build a JavaScript AI App with React and the OpenAI API",
    date: "April 2024",
    description:
      "In this course, I learned to integrate the OpenAI API into a React-based web app, adding a heavy dose of AI and creating an interactive experience that understands the location from which you want weather information, explains the weather data in simple language, and even suggests what to wear. Through this project, I learned about API integration, user-based authentication, storing user tokens in a ServiceWorker, task-based API configuration, and sending and receiving requests to the API.",
    image: "/LinkedIn Learning Certificate.png",
    tags: ["Vite.JS", "OpenAI API"],
    category: "certificate",
    github: "https://github.com/Abi-097/ai_weather_app.git",
    webapp: "https://ai-weather-app-six.vercel.app/",
  },
  {
    id: 16,
    title: "How can I use Google Sheets as a database for a React application?",
    date: "April 2024",
    description:
      "Typically, we connect to our database through a web application to store the data. Have you ever considered saving the data directly in a Google Sheet by linking it to a web application? You may now accomplish this without utilizing a database. This article describes how to store data from a simple application form in a Google Sheet.",
    image: "/excel.png",
    tags: ["Vite.JS", "GOOGLE SHEET"],
    category: "blog",
    github: "",
    webapp:
      "https://medium.com/@abishekm84/how-can-i-use-google-sheets-as-a-database-for-a-react-application-0ca74962a469",
  },
  {
    id: 16,
    title: "SEO Foundations",
    date: "May 2024",
    description:
      "In this course, we delve into the fundamentals of reading search engine results pages, understanding keyword attributes, optimizing the non-text components of a webpage, and long-term content planning strategies to maintain freshness on your site. We define your website’s audience, topics, angle, and style, providing insights into effective audience targeting and content creation. Furthermore, we outline the steps to take when building internal links within your website, enhancing navigation and link equity distribution. Additionally, we cover how to analyze links to measure SEO effectiveness, offering valuable insights into assessing your website’s performance and optimizing for better results. ",
    image: "/seo.PNG",
    tags: ["SEO"],
    category: "certificate",
    github: "",
    webapp:
      "https://www.linkedin.com/learning/seo-foundations-14828080?trk=learning-topics_trending-courses_related-content-card&upsellOrderOrigin=share_certificate",
  },
  {
    id: 17,
    title: "Code Colabrator",
    date: "June 2024",
    description:
      "Socket.IO-based code collaboration application allows multiple users to seamlessly work together on coding projects in real-time. Through synchronized editing and instant updates, collaborators can see each other's changes as they happen, facilitating efficient teamwork and enhancing productivity. The application supports simultaneous connections, ensuring smooth communication and interaction among all participants. It's ideal for remote teams, coding workshops, and educational purposes, offering a dynamic environment where ideas transform into code instantaneously.",
    image: "/code_colobrator.png",
    tags: ["React.JS", "CSS", "Socet.io", "Rest API"],
    category: "web_app",
    github: "https://github.com/Abi-097/code_editor.git",
    webapp: "",
  },
];

const Projects = () => {
  return (
    <>
      <div className="light:bg-gray-50 h-full p-2 overflow-hidden">
        <h1 className="text-xl p-2 font-semibold dark:text-white text-black">
          Projects
        </h1>{" "}
        <hr className="mb-2" />
        {/* Scrollable Mapped Fields */}
        <div className="overflow-y-auto h-[calc(100%-7rem)] custom-scrollbar">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  className="w-full h-auto mb-2 py-2 items-start justify-start"
                >
                  <div className="flex gap-2 items-center dark:text-white text-black font-normal text-wrap text-start">
                    <Avatar className="w-9 h-9 rounded-lg">
                      <AvatarImage src={project.image} alt={project.image} />
                    </Avatar>
                    <div>
                      <p className="text-[13px]">
                        <span className="dark:text-purple-300 text-purple-800">
                          {project.title}
                        </span>
                      </p>
                      <p className="text-[13px] text-start">{project.date}</p>
                    </div>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[825px] h-auto">
                <DialogHeader>
                  <DialogDescription>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={100}
                      height={100}
                      className="w-full mt-3 h-[400px]"
                    />
                    <p className="text-[22px] md:text-[34px] mt-6 dark:text-white text-black font-bold leading-relaxed">
                      {project.title}
                    </p>
                    <p className="text-[15px] md:text-[20px] my-5 dark:text-white text-black font-bold">
                      {project.date}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[15px] font-semibold px-4 py-2 bg-[#854CE6]/30 rounded-md dark:text-purple-500 text-purple-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-[15px]">{project.description}</p>
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter className="gap-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="w-full order-2"
                  >
                    <Button variant="secondary" className="w-full ">
                      View Code
                    </Button>
                  </Link>
                  <Link
                    href={project.webapp}
                    target="_blank"
                    className="w-full  order-1"
                  >
                    <Button variant="secondary" className="w-full">
                      View Live Application
                    </Button>
                  </Link>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <div className="w-full flex items-center gap-1">
          <div className="w-full p-2.5 mt-3 font-medium text-sm flex items-center justify-center dark:hover:bg-gray-100/10 dark:bg-gray-100/30 dark:hover:text-white dark:text-white/70 bg-blue-50 hover:bg-blue-100 rounded-lg hover:text-blue-600 text-blue-500 cursor-pointer">
            Blogs
          </div>{" "}
          <div className="w-full p-2.5 mt-3 font-medium text-sm flex items-center justify-center dark:hover:bg-gray-100/10 dark:bg-gray-100/30 dark:hover:text-white dark:text-white/70 bg-blue-50 hover:bg-blue-100 rounded-lg hover:text-blue-600 text-blue-500 cursor-pointer">
            Certificates
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
