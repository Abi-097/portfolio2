import { Avatar, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export const experiences = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZa2YfXRE0QXxrAO8c4WWNB4d6eV6N8WvGZBVQNct7wVt8d93F_ztj7mudXa5nrZpbB4&usqp=CAU",
    role: "MERN Stack - Intern",
    company: "Wemixt Pvt. Ltd.",
    date: "Nov 2023 - Current",
    desc: "I built full-responsive static websites using React.js and Material-UI, connecting it with Node.js/Express.js. I utilized the Nodemailer module to convert the application details into PDF format and send them through email. Concurrently, I'm learning Node.js and advanced React for future projects. Additionally, I'm learning Next.js and converting the React.js application into Next.js  for Search Engine Optimizataion.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      " Next Js",
    ],
    // doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1696514649120.jpeg?alt=media&token=e7f6757b-edfa-4138-a692-d6709eeef3e2",
  },
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/C4E0BAQFez_51yePKwg/company-logo_200_200/0/1630628678738?e=2147483647&v=beta&t=YPtj2wIKPCxIVi7xu3DF4NkHniStqzeEryEJl5JNPbc",
    role: "Junior - Software Developer",
    company: "Levant Business Experts Pvt. Ltd.",
    date: "Aug 2023 - Current",
    desc: "I am actively contributing to Odoo development projects using Python and XML. Additionally, I have worked closely with the database team to optimize SQL queries and ensure database performance. Moreover, I integrated SOAP API to facilitate communication between the frontend and backend systems.",
    skills: ["Odoo", "Python", "Zeep", "NodeJs", "HTML", "CSS", "JavaScript"],
    // doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Screenshot%20from%202024-01-25%2022-38-31.png?alt=media&token=2785903f-1a4e-41f5-afd2-6adcfe56d058",
  },

  {
    id: 2,
    img: "data:image/png;base64,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",
    role: "Trainee Front-end developer",
    company: "HotCat Pvt. Ltd.",
    date: "Feb 2023 - Aug 2023",
    desc: "I have created visually appealing and user-friendly responsive UIs using HTML, CSS, JavaScript, and ReactJS. I am proficient in ReactJS for performing REST API CRUD operations and have collaborated with cross-functional teams to ensure seamless integration of front-end components. Additionally, I am familiar with modern front-end frameworks and libraries such as Bootstrap and MUI. I have contributed to the development of interactive web applications and gained practical experience through working on real-world projects, including the Adiya Admin Panel and Restaurant LMS admin panel.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
      "Postman",
    ],
    // doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245",
  },
  {
    id: 3,
    img: "https://media.licdn.com/dms/image/D4D0BAQE_BLErPzSbnA/company-logo_200_200/0/1702969022396/infomateworld_infomate_pvt_ltd___jkh__logo?e=2147483647&v=beta&t=7N1NuK7iWzj380y06Wh6T4DVE7A1Otat8WQNsQ9GmYE",
    role: "Process Associate",
    company: "Infomate Pvt. Ltd.",
    date: "May 2021 - May 2023",
    desc: "In my role, I am responsible for entering customer and vendor payments, as well as account data, from source documents under tight time constraints. This involves compiling, verifying, and sorting invoice information to prepare the source data for computer entry. Additionally, I interact with consumers, addressing client inquiries, complaints, and requests for information, while also managing their mail obligations. As part of my responsibilities, I train and oversee new recruits, ensuring they are equipped to perform their duties effectively. Throughout these tasks, I prioritize maintaining a high level of client satisfaction and strive to develop and sustain strong customer relationships. Furthermore, I meticulously review data for any shortcomings or mistakes, correcting any incompatibilities and ensuring the accuracy of the output.",
    skills: ["CRM", "Email Handling", "MS-Office"],
    // doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1691181448873.jpeg?alt=media&token=ee85eb8f-7247-43cd-9a1d-ce9f58ea62a6",
  },
];

const ExperiencePopup = () => {
  return (
    <>
      <div className="light:bg-gray-50 h-full p-2 overflow-hidden">
        <h1 className="text-xl p-2 font-semibold dark:text-white text-black">
          Experience
        </h1>
        <hr className="mb-2" />

        {/* Scrollable Mapped Fields */}
        <div className="overflow-y-auto h-[calc(100%-4rem)] custom-scrollbar">
          {experiences.map((exp, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Button
                  // variant="secondary"
                  className="w-full h-auto mb-2 py-2 items-start justify-start dark:hover:bg-gray-100/10 dark:bg-gray-100/30 dark:hover:text-white dark:text-white/70 bg-blue-50 hover:bg-blue-100 rounded-lg hover:text-blue-600 text-blue-500"
                >
                  <div className="flex gap-2 items-center dark:text-white text-black font-normal">
                    <Avatar className="w-9 h-9 rounded-lg">
                      <AvatarImage src={exp.img} alt={exp.img} />
                    </Avatar>
                    <div>
                      <p className="text-[13px]">
                        <span className="dark:text-black/60 font-semibold text-purple-800">
                          {exp.role}
                        </span>
                      </p>
                      <p className="text-[13px] text-start">{exp.date}</p>
                    </div>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[650px] h-auto">
                <DialogHeader>
                  <DialogDescription>
                    <div className="flex items-center gap-3 dark:text-white text-black font-normal">
                      <Avatar className="w-14 h-14 rounded-lg">
                        <AvatarImage src={exp.img} alt={exp.img} />
                      </Avatar>
                      <div>
                        <p className="text-[15px]">
                          At{" "}
                          <span className="dark:text-purple-300 text-purple-800">
                            {exp.company}
                          </span>{" "}
                          as{" "}
                          <span className="dark:text-purple-300 text-purple-800">
                            {exp.role}
                          </span>
                        </p>
                        <p className="text-[15px] text-start">{exp.date}</p>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <p className="mt-2">{exp.desc}</p>
                {/* <div className="flex flex-wrap gap-2">
                  <span className="text-[15px] font-semibold px-4 py-2 bg-[#854CE6]/30 rounded-md dark:text-purple-500 text-purple-900">
                    React
                  </span>
                </div> */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[12px] font-semibold px-2 py-2 bg-[#854CE6]/30 rounded-md dark:text-purple-500 text-purple-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperiencePopup;
