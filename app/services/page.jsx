"use client";

import { Description } from "@radix-ui/react-dialog";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Welcome to my digital workshop! I create dynamic web applications using the MERN stack—MongoDB, Express.js, React.js, and Node.js. Let’s turn your vision into a reality with cutting-edge, scalable solutions.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Machine Learning",
    description:
      "Explore intelligent solutions crafted with Python! I turn data into actionable insights with custom machine learning models and algorithms. Discover how we can unlock new possibilities together.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Data Structure & Algorithms",
    description:
      "Need help mastering data structures and algorithms? I offer expert guidance in C++ and Python to elevate your problem-solving skills. Let’s tackle complex challenges and enhance your coding prowess!",
    href: "/contact",
  },
  {
    num: "04",
    title: "DataBase",
    description:
      "Need help mastering data structures and algorithms? I offer expert guidance in C++ and Python to elevate your problem-solving skills. Let’s tackle complex challenges and enhance your coding prowess!",
    href: "/contact",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {services.num}
                  </div>
                  <Link href={services.href} className="w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-xl"/>
                  </Link>
                </div>
                {/* Heading */}
                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{services.title}</h2>
                {/* description */}
                <p className="text-white/60">{services.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
