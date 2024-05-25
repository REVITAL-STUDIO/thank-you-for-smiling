import React from "react";
import Image from "next/image";
import rocket from "../public/images/rocket.svg";
import community from "../public/images/community.svg";
import career from "../public/images/career.svg";
import results from "../public/images/results.svg";
import "../app/globals.css";
function Development() {
  return (
    <section className="radial-gradient-development h-screen">
      {/* Title */}
      <div className="w-full py-[5%] flex justify-center">
        <div className="w-[95%] py-[5%] flex items-center justify-between">
          <h1 className="text-5xl font-cheapSignage font-medium text-[#F1C900] w-3/5">
            <span className="text-white italic">Unlocking Potential</span>{" "}
            Through Comprehensive Development Programs.
          </h1>
          <div className="flex items-center gap-8">
            <button className="w-24 h-24 border-[2px] border-dashed lifted text-white border-white rounded-full">
              Volunteer
            </button>
            <button className="w-24 h-24 bg-[#F1C900] lifted text-black rounded-full ">
              Donate
            </button>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="w-full flex items-center justify-center">
        <div className="flex w-[95%] justify-between font-dmSans">
          <div className="flex flex-col bg-[#090B0A]/90  w-[20%] rounded-md px-[2%] pt-[2%] pb-[5%] lifted">
            <Image src={rocket} alt="rocket" className="w-12 h-12" />
            <h3 className="text-white mt-[10%] text-lg">Launch Potential</h3>
            <p className="text-[#C8C8C8] mt-[10%] text-base">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus
            </p>
          </div>
          <div className="flex flex-col bg-[#090B0A]/90 w-[20%] rounded-md px-[2%] pt-[2%] pb-[5%] lifted">
            <Image src={community} alt="rocket" className="w-12 h-12" />
            <h3 className="text-white mt-[10%] text-lg">Community</h3>
            <p className="text-[#C8C8C8] mt-[10%] text-base">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus
            </p>
          </div>
          <div className="flex flex-col bg-[#090B0A]/90 w-[20%] rounded-md px-[2%] pt-[2%] pb-[5%] lifted">
            <Image src={career} alt="rocket" className="w-12 h-12" />
            <h3 className="text-white mt-[10%] text-lg">Career Preparation</h3>
            <p className="text-[#C8C8C8] mt-[10%] text-base">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus
            </p>
          </div>
          <div className="flex flex-col bg-[#090B0A]/90 w-[20%] rounded-md px-[2%] pt-[2%] pb-[5%] lifted">
            <Image src={results} alt="rocket" className="w-12 h-12" />
            <h3 className="text-white mt-[10%] text-lg">Real Results</h3>
            <p className="text-[#C8C8C8] mt-[10%] text-base">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Development;
