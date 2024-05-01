import React from "react";
import Image from "next/image";

function Book() {
  return (
    <section className="w-full linear-gradient h-screen flex">
      <div className="w-1/2 h-full flex justify-center items-center">
        <Image
          src={"/images/thankYou.webp"}
          height={400}
          width={400}
          alt="book"
          className="shadow"
        />
      </div>
      <div className="w-[50%] flex justify-center items-center"></div>
    </section>
  );
}

export default Book;
