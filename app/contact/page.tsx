"use client";
import Image from "next/image";
import shapesCard from "../../public/images/contact_illustration.svg";
import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import useInView from "../../hooks/useInView";

const contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div ref={ref}>
      <div className="min-h-screen flex justify-around items-center gap-12 bg-[#3423A6] text-white px-[4rem]">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
                }
              : ""
          }
        >
          <motion.h1
            className="text-4xl w-fit relative "
            initial={{ opacity: 0, x: 40 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, delay: 2.4, ease: "easeInOut" },
                  }
                : ""
            }
          >
            Contact Us.
          </motion.h1>
          <form>
            <div className="flex flex-col gap-4 w-[23rem]">
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: -40 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 1,
                          delay: 0.5,
                          ease: "easeInOut",
                        },
                      }
                    : ""
                }
              >
                <label htmlFor="first_name">First Name</label>
                <input
                  id="first_name"
                  type="text"
                  className="bg-transparent border-[1px] border-white rounded-lg py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000"
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: -40 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 1,
                          delay: 0.4,
                          ease: "easeInOut",
                        },
                      }
                    : ""
                }
              >
                <label htmlFor="last_name">Last Name</label>
                <input
                  id="last_name"
                  type="text"
                  className="bg-transparent border-[1px] border-white rounded-lg py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000"
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: -40 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 1,
                          delay: 0.3,
                          ease: "easeInOut",
                        },
                      }
                    : ""
                }
              >
                <label htmlFor="first_name">Email</label>
                <input
                  id="email"
                  type="text"
                  className="bg-transparent border-[1px] border-white rounded-lg py-[10px] w-full px-2 focus:outline-none focus:bg-[#7a7aaa83]  transition duration-1000"
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: -40 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 1,
                          delay: 0.2,
                          ease: "easeInOut",
                        },
                      }
                    : ""
                }
              >
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="bg-transparent border-[1px] border-white rounded-lg py-[5px] w-full h-[10rem] px-2 focus:outline- focus:bg-[#7a7aaa83]  transition duration-1000"
                ></textarea>
              </motion.div>
              <div className="flex flex-col gap-2 mt-[5%]">
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 40 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 1,
                            delay: 1.2,
                            ease: "easeInOut",
                          },
                        }
                      : ""
                  }
                >
                  <input
                    id="register_child"
                    type="checkbox"
                    className="appearance-none border-[1px] border-white rounded-md w-4 h-4 bg-transparent checked:bg-blue-600"
                  />
                  <label htmlFor="register_child">
                    I want to register my child
                  </label>
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 40 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 1,
                            delay: 1.6,
                            ease: "easeInOut",
                          },
                        }
                      : ""
                  }
                >
                  <input
                    id="news"
                    type="checkbox"
                    className="appearance-none border-[1px] border-white rounded-md w-4 h-4 bg-transparent checked:bg-blue-600"
                  />
                  <label htmlFor="news">I’d like to get news and insight</label>
                </motion.div>
              </div>
            </div>
          </form>
          <motion.button
            className="bg-white px-[4rem] py-[1rem] rounded-3xl text-black my-[5%]"
            initial={{ opacity: 0, y: 40 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 2, ease: "easeInOut" },
                  }
                : ""
            }
          >
            Send Message
          </motion.button>
        </motion.div>
        <motion.div
          className="w-[40%]"
          initial={{ opacity: 0, x: 40 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 1, ease: "easeInOut" },
                }
              : ""
          }
        >
          <Image src={shapesCard} alt="shapes_illustration" />
        </motion.div>
      </div>
    </div>
  );
};

export default contact;
