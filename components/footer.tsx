import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between w-full bg-[#171738] items-center h-300">
      <div className="flex flex-col gap-4 w-1/4 h-full justify-center p-4">
        <Image src={"/images/logo.png"} height={150} width={150} alt="logo" />
        <p className="text-[#F1C900] text-xs font-cheapSignage">
          Thank You for Smiling. All rights reserved.
        </p>
        <p className="text-white  text-xs font-cheapSignage">
          Developed by <span className="font-bold">REVITAL Studio</span>
        </p>
      </div>
      <div className="text-white w-1/4 flex gap-x-8 justify-center items-center text-left text-base font-cheapSignage">
        <div className="flex items-center   border-white min-w-1/2 py-2 ">
          <a>Programs</a>
        </div>
        <div className="flex items-center   border-white min-w-1/2 py-2 ">
          <a>Donate</a>
        </div>
        <div className="flex items-center   border-white min-w-1/2 py-2 ">
          <a>Book</a>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-4 w-1/6 justify-center items-center  text-white">
        <FaFacebook className="h-6 w-6" />
        <FaInstagram className="h-6 w-6" />
        <FaXTwitter className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Footer;
