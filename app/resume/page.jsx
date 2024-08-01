"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiFlask,
  SiPowerbi,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I am a MERN stack developer and machine learning enthusiast who began my journey in 2021 during my first year of college. In my second year, I focused on web development using the MERN stack, building dynamic applications while simultaneously exploring machine learning algorithms. This unique combination allows me to effectively integrate both fields, and I am committed to continuous learning as I strive to create innovative solutions that leverage data-driven insights ",
  info: [
    {
      fieldName: "Name :",
      fieldValue: "Swayam Kaushal",
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+91) 9044964243",
    },
    {
      fieldName: "Nationality :",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email:",
      fieldValue: "rajkaushal18092003@gmail.com",
    },
    {
      fieldName: "CGPA :",
      fieldValue: "7.6",
    },
    {
      fieldName: "Languages :",
      fieldValue: "English, Hindi",
    },
  ],
};

// const experience ={
//   icon:'/public/assets/resume/badge.svg',

// }

const education = {
  icon: "/public/assets/resume/cap.svg",
  title: "My Education",
  description: "My educational background and professional qualifications reflect a strong commitment to continual learning and development in my field. I have pursued a diverse range of courses and training programs that have equipped me with a comprehensive skill set and a deep understanding of my industry. For a detailed overview of my education and qualifications, please refer to the sections below.",
  items: [
    {
      institution: "Galgotia College of Engineering and Technology",
      degree: "Artificial Intelligence and Data Science",
      duration: "2021 - 2025",
    },
    {
      institution: "John Hopkins university",
      degree: "HTML, CSS, and Javascript for Web Developers",
      duration: "2022",
    },
    {
      institution: "S.J.S Public School",
      degree: "10th & 12th",
      duration: "2018 & 2020",
    },
    {
      institution: "GOOGLE",
      degree: "Foundations: Data, Data, Everywhere",
      duration: "2023",
    },
    {
      institution: "GOOGLE",
      degree: "Ask Questions to Make Data-Driven Decisions",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Throughout my journey in learning and applying web development and data science, I have acquired a diverse skill set that reflects my commitment to continuous improvement and growth in these fields.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html-5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
    },
    {
      icon: <SiMysql />,
      name: "Sql",
    },
    {
      icon: <SiPowerbi />,
      name: "PowerBI",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[800px] text-sm leading-loose text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] shadow-lg shadow-black-500/50 h- [184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className=" text-accent">{item.duration}</span>
                          <h3 className="text-sm max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[800px] text-sm leading-loose text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] shadow-lg shadow-black-500/50  rounded-xl flex justify-center items-center group">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-inherit text-white border-none">
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className=" text-white/60 text-sm leading-loose  xl-mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-md">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
