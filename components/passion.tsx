import React from "react";
import Image from "next/image";

function Passion() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-t to-[#171738] from-[#3423A6]">
      <div className="w-full p-[5%] flex justify-center items-center">
        <h1 className="font-cheapSignage font-bold text-[#FFF200] text-5xl text-center w-2/3">
          <span className="text-white italic">Our Passion: </span>Helping
          Vulnerable Youth Reach Their Full Potential
        </h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[95%] flex justify-center items-center bg-[url('/images/kids.jpg')] rounded-tl-full rounded-tr-full bg-cover bg-bottom ">
          <div className="w-full py-[15%]  bg-black/50 flex flex-col justify-center text-white">
            <h1 className="font-cheapSignage relative top-32 text-white p-4 text-3xl">
              <span className="text-[#FFF200] ">Empowering Change:</span> Our
              Dedication to Inclusive Impact
            </h1>{" "}
            <p className="p-4 w-3/4 relative top-32">
              Our commitment to making a positive impact extends beyond just
              providing programs; it's rooted in our unwavering dedication to
              serving those who need it most. We believe that every individual,
              regardless of their background or circumstances, deserves access
              to opportunities for growth, support, and empowerment.
            </p>
            <div className="relative top-40 w-full gap-x-4 flex items-center justify-center">
              <button className="w-4 h-4 rounded-full border"></button>
              <button className="w-4 h-4 rounded-full border"></button>
              <button className="w-4 h-4 rounded-full border"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passion;
