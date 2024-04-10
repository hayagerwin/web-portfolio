"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { FaAnglesRight } from "react-icons/fa6";
import { useState } from "react";

const projectData = [
  {
    title: "Lynn Villamor Dental Clinic",
    image: "/thumb1.png",
    path: "/work/lynn-villamor-dental-clinic",
    category: "Reservation",
  },
  {
    title: "Lucky Star Grocery Store",
    image: "/thumb2.png",
    path: "/work/lucky-star-grocery-store",
    category: "E-commerce",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  return (
    <div className="z-30 flex h-[100vh] w-full flex-row pt-60">
      {/* LEFT */}
      <div className="relative h-full w-full pr-6">
        {/* Image Group */}
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`absolute h-full w-11/12 overflow-hidden rounded-tr-3xl`}
          >
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
                opacity: hoveredIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="relative h-full w-full"
            >
              <Image
                src={project.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                width={1920}
                height={1080}
              />
            </motion.div>
          </div>
        ))}
      </div>
      {/* RIGHT */}
      <div className="h-full w-full flex-col pl-6 pr-60">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex items-baseline">
            <h2 className="h2 m-0 w-full overflow-ellipsis text-left ">
              Projects
            </h2>
            <h5 className="text-2xl">{projectData.length}</h5>
          </div>
          <hr />
        </motion.div>
        <ul className="h-full">
          {projectData.map((project, index) => (
            <motion.li
              key={index}
              variants={fadeIn("down", 0.2 + index * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <div
                className="flex items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <motion.div
                  initial={{ x: -35, opacity: 0 }}
                  animate={{
                    x: hoveredIndex === index ? 0 : -35,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <FaAnglesRight />
                </motion.div>
                <Link href={project.path} className="w-full">
                  <div className="flex w-full justify-between py-6">
                    <div className="w-full ">
                      <motion.h4
                        initial={{ x: -15 }}
                        animate={{ x: hoveredIndex === index ? 10 : -15 }}
                        transition={{ duration: 0.4 }}
                        className="mr-6 overflow-hidden overflow-ellipsis whitespace-nowrap text-2xl font-bold"
                      >
                        {project.title}
                      </motion.h4>
                    </div>
                    <div className="w-full text-right">
                      <p className="text-xl font-light">{project.category}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;