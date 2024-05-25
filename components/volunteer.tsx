import React from "react";
import Image from "next/image";

function Volunteer() {
  return (
    <section className="bg-gradient-to-b to-[#171738] from-[#41419E]  w-full py-[10%] flex justify-center items-center">
      <main className="w-5/6 p-4 bg-gradient-to-t from-[#FFF200] to-[#F1C900] rounded-md shadow-lg flex">
        <div className="w-1/2 py-[25%] flex justify-center items-center relative">
          <Image
            src={"/images/image-21.png"}
            width={175}
            height={175}
            alt="volunteer"
            className="absolute left-[25%] top-24"
          />
          <Image
            src={"/images/image-22.png"}
            width={150}
            height={150}
            alt="volunteer"
            className="absolute left-[5%] top-32"
          />
          <Image
            src={"/images/image-23.png"}
            width={150}
            height={150}
            alt="volunteer"
            className="absolute right-[15%] bottom-24"
          />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center ">
          <h1 className="text-8xl font-medium font-dmSans italic">
            Become a <span className="text-[#41419E] ">Volunteer</span>
          </h1>
          <p className="text-base mt-[5%] w-3/4">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <form className="flex items-center w-full">
            <input
              type="email" // Set the type attribute to "email" for email input
              placeholder="Volunteer"
              className="block w-3/4 px-4 py-2 mt-[5%]  border-b border-black text-black font-light bg-transparent focus:outline-none placeholder-black placeholder:text-sm placeholder:font-bold placeholder:text-black/75"
            />
            <button className="text-sm text-black border border-black w-20 h-20 font-bold italic font-dmSans flex justify-center items-center rounded-full">
              Register
            </button>
          </form>
        </div>
      </main>
    </section>
  );
}

export default Volunteer;
