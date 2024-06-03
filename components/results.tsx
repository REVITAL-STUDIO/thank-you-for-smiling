import React from "react";
import Image from "next/image";

function Results() {
  return (
    <div className="w-full h-screen  bg-gradient-to-b to-[#171738] from-[#3423A6] flex justify-center items-center">
      <div className="w-full  flex flex-wrap justify-center content-center items-center gap-4 text-white">
        <div className="w-1/4 p-4 bg-[#090B0A]/90 shadow-md rounded-lg text-base  hover:scale-95 hover:shadow-xl transition ease-in-out duration-150">
          <div className="p-4  flex justify-center items-center">
            <Image
              src={"/images/Help.png"}
              alt="help"
              width={150}
              height={150}
            />
          </div>

          <h1 className="mt-[2%] px-4 font-cheapSignage">
            Mentorship & Support
          </h1>
          <p className="mt-[5%] text-sm px-4">
            Ongoing mentorship and support from experienced professionals to
            guide teens through their training and career development journey.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-[#090B0A]/90 shadow-md rounded-lg text-base  hover:scale-95 hover:shadow-xl transition ease-in-out duration-150">
          <div className="p-4  flex justify-center items-center">
            <Image
              src={"/images/launch.png"}
              alt="help"
              width={150}
              height={150}
            />
          </div>
          <h1 className="mt-[2%] px-4 font-cheapSignage">
            Industry Revelant Skills
          </h1>
          <p className="mt-[5%] text-sm px-4">
            Training teens in diverse industry skills—like computer literacy,
            culinary arts, and customer service—to prepare them for future jobs.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-[#090B0A]/90 shadow-md rounded-lg text-base  hover:scale-95 hover:shadow-xl transition ease-in-out duration-150">
          <div className="p-4  flex justify-center items-center">
            <Image
              src={"/images/support.png"}
              alt="help"
              width={150}
              height={150}
            />
          </div>
          <h1 className="mt-[2%] px-4 font-cheapSignage">
            Tailored Support Training
          </h1>
          <p className="mt-[5%] text-sm px-4 font-dmSans">
            Training teens in diverse industry skills—like computer literacy,
            culinary arts, and customer service—to prepare them for future jobs.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-[#090B0A]/90 shadow-md rounded-lg text-base  hover:scale-95 hover:shadow-xl transition ease-in-out duration-150">
          <div className="p-4  flex justify-center items-center">
            <Image
              src={"/images/placement.png"}
              alt="help"
              width={150}
              height={150}
            />
          </div>
          <h1 className="mt-[2%] px-4 font-cheapSignage">
            Job Placement Assistance
          </h1>
          <p className="mt-[5%] text-sm px-4 font-dmSans">
            Training teens in diverse industry skills—like computer literacy,
            culinary arts, and customer service—to prepare them for future jobs.
          </p>
        </div>
        <div className="w-1/4 p-4 bg-[#090B0A]/90 shadow-md rounded-lg text-base  hover:scale-95 hover:shadow-xl transition ease-in-out duration-150">
          <div className="p-4  flex justify-center items-center">
            <Image
              src={"/images/Mentor.png"}
              alt="help"
              width={150}
              height={150}
            />
          </div>
          <h1 className="mt-[2%] px-4 font-cheapSignage">Hands-On Learning</h1>
          <p className="mt-[5%] text-sm px-4 font-dmSans">
            Training teens in diverse industry skills—like computer literacy,
            culinary arts, and customer service—to prepare them for future jobs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Results;
