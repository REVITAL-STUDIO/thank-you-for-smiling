import React from "react";
import Image from "next/image";

function Book() {
  return (
    <section className="w-full  bg-gradient-to-b from-[#171738] to-[#3423A6] h-screen flex items-center justify-center">
      <div className="w-1/2 h-full flex justify-center items-center"></div>
      <div className="w-[50%] flex justify-center items-center">
        <div className="w-[90%] h-2/5 bg-white shadow-xl rounded-xl"></div>
      </div>
    </section>
  );
}

export default Book;
