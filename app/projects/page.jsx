"use client";

import {  motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Github-Clone",
    description:
      "The app uses the MERN stack (MongoDB, Express.js, React.js, Node.js) with React.js for the frontend. It features secure authentication via Passport.js and is deployed on Render.com. Key functions include user login, signup, profile management, and search, with GitHub tools for added authorization.",
    stack: [
      { name: "MongoDb" },
      { name: "ExpressJS" },
      { name: "ReactJS" },
      { name: "NodeJS" },
      { name: "TailwindCSS" },
      { name: "RESTAPI" },
      { name: "PassportJS" },
    ],
    image: "/assets/work/github.png",
    live: "https://github-clone-e2jr.onrender.com",
    github: "https://github.com/rajkaushal03/GitHub-Clone",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Tv-Flix",
    description:
      "The dynamic movie website uses HTML and CSS for the frontend and JavaScript for the backend. It integrates a REST API for real-time updates and accurate movie data, with a responsive design for a seamless user experience. The API is well-documented for easy integration and compatible with tools like Postman. The immersive interface includes smooth animations, providing an engaging cinematic experience right from the browser.",
    stack: [
      { name: "Html 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "Git" },
      { name: "RESTAPI" },
    ],
    image: "/assets/work/tvflix.png",
    live: "https://rajkaushal03.github.io/tvflix-project/",
    github: "",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Recipie App",
    description:
      "The frontend is crafted with ReactJS and styled using Tailwind CSS for a modern, responsive design. The backend leverages Node.js for efficient server-side processing, while deployment is managed through render.com, providing high availability and reliability.",
    stack: [
      { name: "ReactJS" },
      { name: "NodeJS" },
      { name: "ExpressJS" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/recipieapp.png",
    live: "https://recipie-app-i3me.onrender.com/",
    github: "https://github.com/rajkaushal03/Recipie_app",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Easy Hostel search",
    description:
      "Easy Hostel Search uses HTML, CSS, and JavaScript to provide a responsive, user-friendly platform. It features intuitive search, real-time updates, and user reviews for a stress-free hostel exploration experience. Start exploring now!",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/work/ehs.png",
    live: "https://rajkaushal03.github.io/easyhostelsearch/",
    github: "https://github.com/rajkaushal03/easyhostelsearch",
  },
  {
    num: "05",
    category: "Machine Learning",
    title: "Movie recommender System",
    description:
      "Our Movie Recommendation System leverages Python and machine learning to deliver personalized movie suggestions. By analyzing your viewing history and preferences, the system provides tailored recommendations through Streamlit’s intuitive interface. Designed for effortless and enjoyable discovery, it ensures you find new favorite movies quickly and easily.",
    stack: [
      { name: "Python" },
      { name: "Streamlit" },
      { name: "stemming" },
      { name: "CosineSimilarity" },
      { name: "Vectorization" },
    ],
    image: "/assets/work/mrsystem.png",
    live: "https://movie-recommender-system2023.streamlit.app/",
    github: "https://github.com/rajkaushal03/movie-recommedation_system",
  },
  {
    num: "06",
    category: "Machine Learning",
    title: "Flight Fare Predicttion",
    description:
      "The backend of the web application uses Python with machine learning and Flask. Flask handles the web interface where users can enter travel details and receive fare predictions. Python libraries assist with data preprocessing, and a Random Forest algorithm is employed for model training and prediction, ensuring accuracy and reliability. The goal is to offer precise and timely flight fare predictions to help users with budget planning and travel decisions.",
    stack: [
      { name: "Python" },
      { name: "Flask" },
      { name: "Decision Tree" },
      { name: "RandomForest Algorithm" },
    ],
    image: "/assets/work/flightfare.png",
    live: "https://flight-fare-prediction-model.onrender.com",
    github: "",
  },
  {
    num: "07",
    category: "Data Analysis",
    title: "Bengaluru_house_prices",
    description:
      "I analyzed Bengaluru real estate data using Python and machine learning to predict house prices. The project included thorough data preprocessing and model tuning, documented in a comprehensive report and summarized in a stakeholder presentation.",
    stack: [{ name: "Python" }, { name: "sklearn" }, { name: "Matplotlib" }],
    image: "/assets/work/benghouse.png",
    live: "https://drive.google.com/file/d/1UL7vNyux9dA8FxoVXjXtBLISGHfdV_Fx/view?usp=drive_link  ",
    github: "https://github.com/rajkaushal03/Bengaluru_house_prices",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    console.log(currentIndex);
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outlinenum */}
              <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60 text-sm leading-loose">
                {project.description}
              </p>
              {/* stack */}
              <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-md text-accent">
                      {item.name}

                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/60"></div>
              {/* button */}
              <div className="flex items-center gap-4 mt-2">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[45px] h-[45px] rounded-full bg-white/5 shadow-md shadow-black-500/50 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-inherit text-white border-none">
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[45px] h-[45px] rounded-full bg-white/5 shadow-md shadow-black-500/50 flex justify-center items-center group">
                        <BsGithub className="text-white text-xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-inherit text-white border-none">
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[350px] mb-12 h-96 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded-xl"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="h-[460x] relative group  flex justify-center items-center bg-pink-50/20"
                  >
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-fill"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-2 xl:right-2 z-20 w-full justify-between xl:w-max xl:justify-none shadow-2xl"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[20px] w-[40px] h-[40px] flex justify-center items-center transition-all rounded-full "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
