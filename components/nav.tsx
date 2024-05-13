import React from "react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <div className="w-full h-100 bg-[#171738] flex justify-center items-center">
      <div className="w-[95%] h-full flex justify-between items-center">
        <Link href="/">
          <Image src={"/images/logo.png"} height={135} width={135} alt="logo" />
        </Link>
        <ul className="flex gap-x-12 p-4 text-2xl font-medium font-dmSans  text-white ">
          <Link href="/program">Program</Link>
          <Link href="/donations">Donate</Link>
        </ul>

        <button className=" text-base font-dmSans shadow-lg font-bold italic w-20 h-20 rounded-full border text-white">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Nav;
