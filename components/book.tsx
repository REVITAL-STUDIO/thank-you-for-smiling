import React from "react";
import Image from "next/image";

function Book() {
  return (
    <section className="w-full bg-[#171738] h-screen flex items-center justify-center">
      <div className="w-[90%] h-[80%] linear-gradient flex rounded-lg">
        <div className="w-1/2 h-full flex justify-center items-center">
          <Image
            src={"/images/thankYou.webp"}
            height={350}
            width={350}
            alt="book"
            className="shadow"
          />
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="w-[90%] h-2/5 bg-white shadow-xl rounded-xl"></div>
        </div>
      </div>
    </section>
  );
}

export default Book;
