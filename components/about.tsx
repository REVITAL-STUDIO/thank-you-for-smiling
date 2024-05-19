import React from "react";

function About() {
  return (
    <section className="w-full">
      <div className="flex h-screen bg-gradient-to-b from-[#171738] via-[#726C00]/80 to-[#3423A6]">
        <div className="w-[60%] rounded-tr-xl rounded-br-xl relative flex justify-center items-center">
          <div className="bg-[url('/images/paint-hands.png')] w-[80%] h-2/3 rounded-lg bg-cover -rotate-[15deg]"></div>
        </div>
        <div className=" w-[40%] flex justify-center items-center ">
          <div className="flex flex-col gap-10 text-center w-full items-center relative top-[5%]">
            <h1 className="w-[85%] text-4xl text-[#F1C900] text-left font-cheapSignage font-medium">
              <span className="italic text-white">We</span> aim to help
              participants with the necessary skills, knowledge, and confidence
              to <span className="text-white italic">succeed</span> in their
              chosen career paths,{" "}
              <span className="text-white italic">together.</span>
            </h1>
            <p className="w-[85%] text-base text-white text-left">
              Prioritizing life skills development, offering workshops and
              activities designed to enhance communication, problem-solving, and
              resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
