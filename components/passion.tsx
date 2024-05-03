import React from "react";
import Image from "next/image";

function Passion() {
  return (
    <div className="w-full h-1000 bg-gradient-to-t to-[#171738] from-[#3423A6]">
      <div className="w-full h-1/5 flex justify-center items-center">
        <h1 className="font-cheapSignage font-bold text-[#FFF200] text-5xl text-center w-2/3">
          <span className="text-white italic">Our Passion: </span>Helping
          Vulnerable Youth Reach Their Full Potential
        </h1>
      </div>
      <div className="w-full h-3/4  flex justify-center items-center">
        <div className="w-[95%] h-full flex justify-center items-center bg-[url('/images/kids.jpg')] bg-cover bg-bottom ">
          <div className="w-full h-full bg-black/50 flex flex-col justify-end text-white">
            <h1 className="font-cheapSignage text-white p-4 text-3xl">
              <span className="text-[#FFF200] ">Empowering Change:</span> Our
              Dedication to Inclusive Impact
            </h1>{" "}
            <p className="p-4 w-1/2">
              Our commitment to making a positive impact extends beyond just
              providing programs; it's rooted in our unwavering dedication to
              serving those who need it most. We believe that every individual,
              regardless of their background or circumstances, deserves access
              to opportunities for growth, support, and empowerment.
            </p>
            <div className="h-[5%] w-full gap-x-4 flex items-center justify-center">
              <span className="w-4 h-4 rounded-full border"></span>
              <span className="w-4 h-4 rounded-full border"></span>
              <span className="w-4 h-4 rounded-full border"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passion;
