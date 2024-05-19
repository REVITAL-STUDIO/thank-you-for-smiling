import React from "react";
import Image from "next/image";

function Book() {
  return (
    <section className="w-full  bg-gradient-to-b to-[#171738] via-[#726C00]/80 from-[#3423A6] h-screen flex items-center justify-center">
      <div className="w-1/2 h-full flex justify-center items-center">
        <h1 className="text-8xl font-dmSans text-white p-4 font-bold italic">
          We're Building the Foundations for{" "}
          <span className="text-[#F1C900]">A Better Future.</span>
        </h1>
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[90%] h-4/5 relative flex justify-center items-center">
          <div className="absolute w-[40%] h-1/2 rounded-lg rotate-[25deg] top-0 left-0 shadow bg-[url('/images/image-10.jpg')] bg-cover z-20 brightness-90"></div>
          <div className="absolute w-[40%] h-1/2 rounded-lg rotate-[-25deg] shadow bg-[url('/images/testimonialPic-1.png')] bg-cover z-10 brightness-90"></div>
          <div className="absolute w-[40%] h-1/2 rounded-lg rotate-[25deg] bottom-0 right-6 shadow bg-[url('/images/hero-image.png')] bg-cover brightness-90"></div>
        </div>
      </div>
    </section>
  );
}

export default Book;
