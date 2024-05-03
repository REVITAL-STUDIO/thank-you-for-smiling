import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between w-full bg-[#171738] items-center h-300">
      <div className="flex flex-col gap-4 w-1/4 h-full justify-center p-4">
        <Image src={"/images/logo.png"} height={200} width={200} alt="logo" />
        <p className="text-[#F1C900] text-xs">
          Thank You for Smiling. All rights reserved.
        </p>
        <p className="text-white  text-xs">
          Developed by <span className="font-bold">REVITAL Studio</span>
        </p>
      </div>

      <div className="flex flex-col text-white w-1/5  text-base  px-4">
        <div className="flex items-center   border-white min-w-1/2 py-2 ">
          <a>About Us</a>
        </div>
        <div className="flex items-center   border-white min-w-1/2 py-2 ">
          <a>Programs</a>
        </div>
        <div className="flex items-center   border-white min-w-1/2 py-2 ">
          <a>Donate</a>
        </div>
        <div className="flex items-center   border-white min-w-1/2 py-2 ">
          <a>Book</a>
        </div>
        <div className="flex gap-8 ">
          <FaFacebook className="h-6 w-6" />
          <FaInstagram className="h-6 w-6" />
          <FaXTwitter className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
