import React from "react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <div className="w-full h-[100px] bg-[#3423A6] flex justify-center items-center">
      <div className="w-[95%] h-full flex justify-between items-center">
        <div className="w-1/4 flex justify-between items-center ">
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
          <ul className="flex gap-x-12 p-4 text-base font-medium font-cheapSignage  text-white ">
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

        <button className=" text-base border-dashed font-dmSans shadow-lg font-bold italic w-20 h-20 rounded-full border-[2px] text-white">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Nav;
