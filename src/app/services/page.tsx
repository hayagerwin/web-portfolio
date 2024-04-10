"use client";
import { Bulb, Circles, ServiceSlider } from "@/components";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="h-full bg-primary/60 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 xl:mt-8">
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden" className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Crafting tailored solutions to precisely meet your unique needs, ensuring seamless integration and unparalleled user satisfaction.
            </motion.p>
          </div>
          {/* Slider */}
          <motion.div variants={fadeIn("down", 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%]">
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
