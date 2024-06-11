"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import rocket from "../public/images/rocket.svg";
import community from "../public/images/community.svg";
import career from "../public/images/career.svg";
import results from "../public/images/results.svg";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Development() {
  const text =
    "Unlocking Potential: Through Comprehensive Development Programs";
  const words = text.split(" ");

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const controls = useAnimation(); // Corrected the variable name

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section
      ref={container}
      className="radial-gradient-development min-h-screen"
    >
      {/* Title */}
      <div className="w-full flex  justify-center">
        <motion.div
          style={{ y: md }}
          className="w-[100%] flex flex-col lg:flex-row lg:items-center lg:justify-between"
        >
          <h1 className="text-5xl font-bold lg:text-6xl font-dmSans text-[#Fff] lg:w-3/5 w-full p-[4%] ">
            <motion.span initial="initial" animate={controls}>
              {words.map((word, index) => (
                <motion.span
                  ref={ref}
                  aria-hidden="true"
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={wordAnimation}
                  transition={{
                    delayChildren: index * 0.25,
                    staggerChildren: 0.05,
                  }}
                >
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      className="char"
                      variants={characterAnimation}
                    >
                      {char}
                    </motion.span>
                  ))}{" "}
                  {/* Space between words */}
                </motion.span>
              ))}
            </motion.span>
          </h1>
          <div className="flex items-center gap-8 px-8 xl:p-4">
            <button className="w-24 h-24 border-[2px] border-dashed lifted text-white border-white rounded-full">
              Volunteer
            </button>
            <button className="w-24 h-24 bg-[#F1C900] lifted text-black rounded-full ">
              Donate
            </button>
          </div>
        </motion.div>
      </div>
      {/* Cards */}
      <motion.div
        style={{ scale }}
        className="w-full lg:flex items-center justify-center"
      >
        <div className="flex flex-col xl:flex-row w-[95%] justify-between items-center font-dmSans gap-y-4">
          <div className="flex flex-col bg-[#090B0A]/90  xl:w-[23%] w-[85%] rounded-md px-[2%] pt-[2%] pb-[5%] lifted ">
            <div className="p-4 border border-[#F1C900] rounded-full w-fit shadow-md">
              <Image src={rocket} alt="rocket" className="w-12 h-12" />
            </div>
            <h3 className="text-white mt-[10%] text-lg px-4 font-cheapSignage">
              Launch Potential
            </h3>
            <p className="text-[#C8C8C8] mt-[10%] text-base px-4">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus
            </p>
          </div>
          <div className="flex flex-col bg-[#090B0A]/90  xl:w-[23%] w-[85%] rounded-md px-[2%] pt-[2%] pb-[5%] lifted ">
            <div className="p-4 border border-[#F1C900] rounded-full w-fit shadow-md">
              <Image src={community} alt="rocket" className="w-12 h-12" />
            </div>
            <h3 className="text-white mt-[10%] text-lg px-4 font-cheapSignage">
              Community
            </h3>
            <p className="text-[#C8C8C8] mt-[10%] text-base px-4">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus
            </p>
          </div>
          <div className="flex flex-col bg-[#090B0A]/90  xl:w-[23%] w-[85%] rounded-md px-[2%] pt-[2%] pb-[5%] lifted ">
            <div className="p-4  border border-[#F1C900] rounded-full w-fit shadow-md">
              <Image src={career} alt="rocket" className="w-12 h-12" />
            </div>
            <h3 className="text-white mt-[10%] text-lg px-4 font-cheapSignage">
              Career Preparation
            </h3>
            <p className="text-[#C8C8C8] mt-[10%] text-base px-4">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus
            </p>
          </div>
          <div className="flex flex-col bg-[#090B0A]/90  xl:w-[23%] w-[85%] rounded-md px-[2%] pt-[2%] pb-[5%] lifted ">
            <div className="p-4 border border-[#F1C900] rounded-full w-fit shadow-md">
              <Image src={results} alt="rocket" className="w-12 h-12" />
            </div>
            <h3 className="text-white mt-[10%] text-lg px-4 font-cheapSignage">
              Real Results
            </h3>
            <p className="text-[#C8C8C8] mt-[10%] text-base px-4">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus
            </p>
          </div>
        </div>
      </motion.div>
      {/* Learn More */}
      <motion.div
        style={{ y: sm }}
        className="flex justify-center items-center  "
      >
        <div className="w-[85%] xl:w-[95%] pt-[10%] mt-[5%]">
          <button className="p-8  bg-white shadow-md font-cheapSignage rounded-full text-black flex justify-center items-center text-lg">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Development;
