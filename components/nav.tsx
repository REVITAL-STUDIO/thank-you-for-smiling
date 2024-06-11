"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    // Prevent scrolling when either login or menu is open
    document.body.style.overflow = openMenu ? "hidden" : "auto";

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  // Resetting the state
  setOpenMenu(false);

  //Opening Mobile Menu
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="w-full p-4 bg-[#3423A6] flex justify-center items-center -mb-1">
      <div className="w-[95%] flex justify-between items-center">
        <div className="w-1/2  flex  items-center ">
          <Link
            href="/"
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow"
          >
            <Image
              src={"/images/logo.png"}
              height={100}
              width={100}
              alt="logo"
              className="relative left-4"
            />
          </Link>
          <ul className="lg:flex gap-x-12 p-4 hidden text-base font-medium font-cheapSignage  text-white ">
            <Link
              className="transition ease-in-out hover:text-[#F1C900] duration-100"
              href="/program"
            >
              Program
            </Link>
            <Link
              className="transition ease-in-out hover:text-[#F1C900] duration-100"
              href="/donations"
            >
              Donate
            </Link>
          </ul>
        </div>
        <Link
          href="/contact"
          className=" justify-center items-center relative hidden lg:flex"
        >
          <motion.div
            className="hidden md:block  border-dashed w-20 h-20 rounded-full"
            style={{
              borderWidth: "2px", // Set initial border width
              borderColor: "white", // Set initial border color
              borderStyle: "dashed", // Set initial border style
              overflow: "hidden", // Clip the border animation
            }}
            animate={{
              rotate: [0, 360], // Rotate the button's border from 0 to 360 degrees
              transition: { duration: 2, loop: Infinity }, // Repeat the animation infinitely
            }}
          ></motion.div>
          <h2 className="text-base absolute font-dmSans shadow-lg font-bold italic text-white">
            Contact
          </h2>
        </Link>

        {/* Mobile Responsive Menu */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden w-12 h-12 flex flex-col relative justify-center items-center rounded-full border-4 z-50 ${
            openMenu ? "border-[#3423A6]" : " border-[#F1C900]"
          } space-x-reverse  z-30`}
        >
          <span
            className={`block w-3/4 my-0.5 border  rounded-full ${
              openMenu
                ? "rotate-45 transition-transform duration-300 ease-in-out border-[#3423A6]"
                : "transition-transform duration-300 ease-in-out border-[#F1C900]"
            }`}
          ></span>
          <span
            className={`block w-3/4 my-0.5 border  rounded-full ${
              openMenu
                ? "-rotate-45 w-3/4 absolute top-2/5 transition-transform duration-300 ease-in-out border-[#3423A6]"
                : "transition-transform duration-300 ease-in-out border-[#F1C900]"
            }`}
          ></span>
        </button>
        {/* Mobile Menu */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="md:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-mist z-40"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1],
                  opacity: 1,
                  borderRadius: ["100%", "100%", "0%"],
                }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                className="lg:hidden absolute top-0 right-0 bottom-0  w-full min-h-screen bg-[#F1C900] shadow-xl p-4 gap-y-8"
              >
                {/* Explore */}
                <motion.section
                  initial={{ opacity: 0, y: -20 }} // Initial opacity 0 and move up by 20px
                  animate={{ opacity: 1, y: 0 }} // Animated to opacity 1 and original position
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
                  className=" p-4 bg-white shadow-md rounded-md flex justify-center items-center"
                >
                  <div className="flex flex-col justify-center w-full">
                    <ul className="flex flex-col gap-y-2 p-4 text-2xl font-medium font-cheapSignage  text-black ">
                      <h2 className="font-dmSans">Explore</h2>
                      <Link
                        className="transition ease-in-out border-b  pb-4  duration-100"
                        href="/program"
                      >
                        Program
                      </Link>
                      <Link
                        className="transition ease-in-out border-b pb-4  duration-100"
                        href="/donations"
                      >
                        Donate
                      </Link>
                      <Link
                        className="transition ease-in-out border-b pb-4  duration-100"
                        href="/donations"
                      >
                        Book
                      </Link>
                      <Link
                        className="transition ease-in-out pb-4 duration-100"
                        href="/contact"
                      >
                        Contact
                      </Link>
                    </ul>
                  </div>
                </motion.section>
                {/* Socials */}
                <motion.section
                  initial={{ opacity: 0, y: -20 }} // Initial opacity 0 and move up by 20px
                  animate={{ opacity: 1, y: 0 }} // Animated to opacity 1 and original position
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 1.4 }}
                  className="mt-[2%] bg-white shadow-md rounded-md flex justify-center items-center"
                >
                  <div className="flex flex-col justify-center w-full p-4">
                    <ul className="flex flex-col gap-y-2 p-4 text-2xl font-medium font-cheapSignage  text-black ">
                      <h2 className="font-dmSans">Socials</h2>
                      <Link
                        href="/"
                        className=" pb-4  gap-x-2 flex items-center"
                      >
                        <Image
                          src="/images/facebook.png"
                          width={20}
                          height={20}
                          alt="facebook"
                        />
                        <span className=" ">Facebook</span>
                      </Link>
                      <Link
                        href="/"
                        className=" pb-4  gap-x-2 flex items-center"
                      >
                        <Image
                          src="/images/instagram.png"
                          width={20}
                          height={20}
                          alt="facebook"
                        />
                        <span className=" ">Instagram</span>
                      </Link>
                      <Link
                        href="/"
                        className="pb-4  gap-x-2 items-center flex"
                      >
                        <Image
                          src="/images/linkedin.png"
                          width={20}
                          height={20}
                          alt="facebook"
                        />
                        <span className=" ">Linkedin</span>
                      </Link>
                    </ul>
                  </div>
                </motion.section>
                {/* Donate */}
                <motion.button
                  initial={{ opacity: 0, y: -20 }} // Initial opacity 0 and move up by 20px
                  animate={{ opacity: 1, y: 0 }} // Animated to opacity 1 and original position
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 1.8 }}
                  className="mt-[2%] p-4 bg-[#3423A6] w-full rounded-md text-xl font-cheapSignage text-white"
                >
                  Donate!
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Nav;
