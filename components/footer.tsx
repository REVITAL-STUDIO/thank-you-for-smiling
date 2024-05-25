import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between w-full bg-[#FFF] items-center p-4">
      <div className="flex flex-col gap-4 w-1/4 justify-center p-4">
        <Image src={"/images/logo.png"} height={150} width={150} alt="logo" />
      </div>

      <div className="flex flex-col  px-4 w-1/3 justify-center items-end  text-black ">
        <div className="  text-black flex  gap-x-4  text-left p-[4%]  text-sm font-cheapSignage">
          <div className="flex items-center   border-white min-w-1/2 p-4 rounded-full  ">
            <Link href="/">Programs</Link>
          </div>
          <div className="flex items-center   border-white min-w-1/2 p-4 rounded-full  ">
            <Link href="/">Donate</Link>
          </div>
          <div className="flex items-center   border-white min-w-1/2 p-4 rounded-full  ">
            <Link href="/">Book</Link>
          </div>
        </div>
        <div className="flex gap-x-4 p-4 justify-end w-full font-cheapSignage">
          <Link href="/" className="p-4 flex items-center justify-center">
            <FaFacebook className="h-6 w-6   rounded-full" />{" "}
            <span className="font-bold text-sm">Facebook</span>
          </Link>
          <Link href="/" className="p-4 flex items-center justify-center">
            <FaInstagram className="h-6 w-6" />
            <span className="font-bold text-sm">Instagram</span>
          </Link>
          <Link href="/" className="p-4 items-center justify-center">
            <FaXTwitter className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
