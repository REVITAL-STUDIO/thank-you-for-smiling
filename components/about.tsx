"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAnimation, motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const text1 =
    "We Aim to Help Participants With the Necessary Skills, Knowledge, and Confidence to Succeed in Their Chosen Career Paths, Together.";
  const words = text1.split("");
  const text2 =
    "Prioritizing life skills development, offering workshops and activities designed to enhance communication, problem-solving, and resilience.";

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView1, inView2]);

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
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: "/images/image-10.jpg",
      y: 0,
    },
    {
      src: "/images/smile.jpeg",
      y: lg,
    },
    { src: "/images/testimonialPic-1.png", y: md },
  ];

  return (
    <section
      ref={container}
      className="w-full lg:flex-row flex flex-col-reverse  lg:py-[2%] lg:min-h-screen  -mb-1 bg-gradient-to-b from-[#171738] via-[#726C00]/80 to-[#3423A6]"
    >
      <div className="w-[100%] lg:w-[50%] relative hidden xl:flex lg:justify-center items-center">
        <div className="images">
          {images.map(({ src, y }, i) => {
            return (
              <motion.div
                style={{ y }}
                key={`i_${i}`}
                className="imageContainer"
              >
                <Image src={src} alt="image" layout="fill" />
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className=" xl:w-[50%] w-[100%] py-[1%] lg:py-[3%] flex  flex-col-reverse lg:flex-row justify-center items-center ">
        <div className="flex flex-col gap-10  text-center w-full items-center relative top-[5%] p-[4%]">
          <motion.h1
            style={{ y: lg }}
            className="w-[100%] lg:text-6xl text-5xl text-white text-left font-dmSans font-bold  lg:p-0"
          >
            <motion.span initial="initial" animate={controls}>
              {words.map((word, index) => (
                <motion.span
                  ref={ref1}
                  aria-hidden="true"
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={wordAnimation}
                  transition={{
                    delayChildren: index * 0.05,
                    staggerChildren: 0.08,
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
                  ))}
                  {""}
                  {/* Space between words */}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>
          <motion.p
            style={{ y: lg }}
            className="w-[100%] font-cheapSignage text-lg text-[#F1C900] text-left"
          >
            <motion.span
              initial="hidden"
              animate={controls}
              variants={textAnimation}
              ref={ref2}
            >
              Prioritizing life skills development, offering workshops and
              activities designed to enhance communication, problem-solving, and
              resilience.
            </motion.span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;
