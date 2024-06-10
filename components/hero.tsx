"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useAnimation, motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  const slides = [
    "/images/AdobeStock_408616.webp",
    "/images/AdobeStock_108656245.webp",
    "/images/AdobeStock_565244032.webp",
    "/images/AdobeStock_282289502.webp",
    "/images/AdobeStock_97724364.webp",
    "/images/AdobeStock_271631079.webp",
    "/images/AdobeStock_495088080.webp",
  ];

  const text =
    " Empowering Our Youth: Supporting Special Needs Children and At-Risk Teens";
  const words = text.split(" ");

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const { ref: ref2, inView: inView2 } = useInView({
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
  }, [controls, inView, inView2]);

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

  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const sm = useTransform(scrollYProgress, [0, 1], [0, -125]);

  return (
    <section
      ref={container}
      className="w-full flex flex-col xl:flex-row bg-gradient-to-b -mb-1 to-[#171738] via-black  from-[#3423A6] relative min-h-screen"
    >
      {/* Title */}
      <motion.div
        style={{ y: md }}
        className=" w-full xl:w-1/2 flex flex-col justify-center  p-[4%] relative top-[4%] lg:top-8  mt-16 lg:mt-4"
      >
        <motion.h1 className="lg:text-7xl   text-6xl w-full   font-bold italic text-[#fff] font-dmSans z-10">
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
                  delayChildren: index * 0.05,
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
        </motion.h1>

        <motion.h3
          initial="hidden"
          animate={controls}
          variants={textAnimation}
          ref={ref2}
          className="lg:mt-[10%] mt-4 text-[#F1C900] text-base font-cheapSignage z-10"
        >
          {" "}
          Making Our Kids of Today Develop Skills for Tomorrow.
        </motion.h3>
      </motion.div>

      {/* Carousel */}
      <div className="xl:w-1/2 w-full h-auto">
        <div className="w-full flex  overflow-x-hidden gap-x-4">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
              }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeIn" }} // Specify ease-in transition
              className="relative w-1/2 shadow-md py-[56.25%] flex-nowrap justify-center items-center gap-8 my-8 p-2"
            >
              <Image
                src={slide}
                alt="At-Risk Children"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="absolute"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
