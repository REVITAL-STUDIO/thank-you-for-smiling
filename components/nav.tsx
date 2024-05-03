import React from "react";
import Image from "next/image";

function Nav() {
  return (
    <div className="w-full h-100 bg-[#171738] flex justify-center items-center">
      <div className="w-[95%] h-full flex justify-between items-center">
        <Image src={"/images/logo.png"} height={135} width={135} alt="logo" />
        <ul className="flex gap-x-12 p-4 text-sm text-white ">
          <li>Program</li>
          <li>About</li>
          <li>Donate</li>
          <li>Purchase</li>
        </ul>
        <button className=" text-base font-dmSans shadow-lg font-bold w-20 h-20 rounded-full border text-white">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Nav;
