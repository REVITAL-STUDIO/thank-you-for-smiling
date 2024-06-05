"use client";
import React from "react";
import { delay, motion } from "framer-motion";
import { useRef } from "react";
import useInView from "../hooks/useInView";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  slideRight: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeInOut",
    },
  },
  slideBottom: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeInOut",
    },
  },
};

function Donation() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-[#3423A6]  to-black h-screen flex justify-center items-center"
    >
      <motion.div
        className="w-[95%] h-5/6 flex flex-col items-center justify-center relative"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={pageVariants}
      >
        <motion.h1
          className="uppercase top-[-15%]  text-[#F1C900] font-dmSans italic text-large absolute z-50 font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? "slideBottom" : ""}
          variants={pageVariants}
        >
          Donate
        </motion.h1>
        <div className="w-full h-[90%] rounded-bl-5xl rounded-br-5xl bg-[url('/images/kids-school.jpg')] z-10 bg-no-repeat bg-cover bg-center flex items-center justify-center shadow-xl">
          <div className="w-5/6 h-full flex flex-col justify-end gap-y-4">
            <motion.p
              className=" text-white w-2/3 text-lg font-medium mb-[5%] "
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? "slideRight" : ""}
              variants={pageVariants}
            >
              With your help, we empower individuals and communities to overcome
              obstacles and achieve their full potential. Your donation fuels
              initiatives like career training, fostering resilience and
              self-reliance among those we serve.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Donation;
