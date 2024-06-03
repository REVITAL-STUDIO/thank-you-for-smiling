"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const text1 =
    "We aim to help participants with the necessary skills, knowledge, and confidence to succeed in their chosen career paths, together.";
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

  return (
    <section className="w-full xl:flex py-[5%] xl:py-[2%] -mb-1 bg-gradient-to-b from-[#171738] via-[#726C00]/80 to-[#3423A6]">
      <div className="w-[100%] xl:w-[60%] py-[5%] xl:py-[5%] rounded-tr-xl rounded-br-xl relative flex justify-center items-center">
        <div className="bg-[url('/images/paint-hands.png')] w-[80%] py-[35%] rounded-lg bg-cover -rotate-[15deg]"></div>
      </div>
      <div className=" xl:w-[40%] w-[100%] py-[10%] xl:py-0 flex justify-center items-center ">
        <div className="flex flex-col gap-10 text-center w-full items-center relative top-[5%]">
          <h1 className="w-[85%] xl:text-4xl text-3xl text-[#F1C900] text-left font-cheapSignage font-medium">
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
                    delayChildren: index * 0.1,
                    staggerChildren: 0.05,
                  }}
                  className={[
                    "char",
                    word === "We" || word === "succeed" || word === "together."
                      ? "text-white"
                      : "",
                  ].join(" ")}
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
          </h1>
          <p className="w-[85%]  text-lg text-white text-left">
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
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
