import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="bg-gradient-to-b from-[#090B0A] to-[#3423A6]">
      <div className="flex flex-col md:flex-row justify-between w-full  items-center p-4">
        <div className="flex gap-4 md:w-1/4 w-full items-center  md:p-4 relative left-[1%]">
          <Image
            src={"/images/logo.png"}
            height={250}
            width={250}
            alt="logo"
            className="px-6 md:px-0 "
          />
        </div>

        <div className="flex flex-col md:flex-row  md:w-[35%] lg:w-fit w-full md:justify-center md:items-start text-black ">
          <div className="  text-white flex flex-col gap-x-4  text-left p-4 text-base ">
            <h2 className="p-4 font-cheapSignage text-xl">Explore</h2>
            <div className="flex items-center font-dmSans border-white min-w-1/2 p-4 rounded-full  ">
              <Link href="/">Programs</Link>
            </div>
            <div className="flex items-center   border-white min-w-1/2 p-4 rounded-full  ">
              <Link href="/">Donate</Link>
            </div>
            <div className="flex items-center   border-white min-w-1/2 p-4 rounded-full  ">
              <Link href="/">Book</Link>
            </div>
          </div>
          <div className="flex gap-x-4 p-4 flex-col text-base text-white text-left font-dmSans">
            <h2 className="p-4 font-cheapSignage text-xl">Socials</h2>
            <Link href="/" className="p-4  gap-x-2 flex items-center">
              <Image
                src="/images/facebook.png"
                width={20}
                height={20}
                alt="facebook"
              />
              <span className=" ">Facebook</span>
            </Link>
            <Link href="/" className="p-4 gap-x-2 flex items-center">
              <Image
                src="/images/instagram.png"
                width={20}
                height={20}
                alt="facebook"
              />
              <span className=" ">Instagram</span>
            </Link>
            <Link href="/" className="p-4 gap-x-2 items-center flex">
              <Image
                src="/images/linkedin.png"
                width={20}
                height={20}
                alt="facebook"
              />
              <span className=" ">Linkedin</span>
            </Link>
          </div>
          <button className="p-4 border shadow-md h-fit w-full max-w-[400px] mx-auto my-4 bg-white rounded-full md:hidden">
            Apply Today
          </button>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-between px-6 py-2">
        <h2 className="px-4  font-cheapSignage text-white text-[12px] relative  w-fit md:left-0">
          Thank You for Smiling © 2024{" "}
        </h2>
        <span className="px-4 text-sm font-dmSans text-white">
          Crafted & Designed by{" "}
          <span className="font-bold">REVITAL Studio</span>
        </span>
      </div>
    </main>
  );
};

export default Footer;
