import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const nav = () => {


    return (
        <nav className="w-full">
        <div className="flex justify-between bg-[#171738] items-end px-[3rem] py-[1.5rem]">
          <div className="flex flex-col gap-6">
            <Image
              src={"/images/logo.png"}
              height={300}
              width={300}
              alt="logo"
            />
            <p className="text-[#F1C900]">Thank You for Smilining. All rights reserved.</p>
          </div>
          <p className="text-white relative ">Developed by <span className="font-bold">REVITAL Studio</span></p>
          <div className="flex flex-col text-white min-w-[24rem] text-lg gap-4">
            <div className="flex items-center justify-between border-b-[2px] border-white w-full py-2">
              <a>About Us</a>
              <MdOutlineArrowRightAlt className="h-[2rem] w-[2rem]" />
            </div>
            <div className="flex items-center justify-between border-b-[2px] border-white min-w-full py-2">
              <a>Programs</a>
              <MdOutlineArrowRightAlt className="h-[2rem] w-[2rem]" />

            </div>
            <div className="flex items-center justify-between border-b-[2px] border-white min-w-full py-2">
              <a>Donate</a>
              <MdOutlineArrowRightAlt className="h-[2rem] w-[2rem]" />
            </div>
            <div className="flex items-center justify-between border-b-[2px] border-white min-w-full py-2">
              <a>Book</a>
              <MdOutlineArrowRightAlt className="h-[2rem] w-[2rem]" />
            </div>
            <div className="flex gap-8 justify-end">
              <FaFacebook className="h-[2rem] w-[2rem]"/>
              <FaInstagram className="h-[2rem] w-[2rem]"/>
              <FaXTwitter className="h-[2rem] w-[2rem]"/>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default nav;