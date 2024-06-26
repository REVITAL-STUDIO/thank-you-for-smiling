import React from "react";

function Housing() {
  return (
    <section className="w-full py-[5%] bg-gradient-to-t to-[#171738] from-[#41419E] flex justify-center items-center">
      <main className="mt-[6rem] md:mt-0 w-5/6 py-4 flex items-start flex-col justify-between gap-[4rem] lg:[3.5rem] xl:gap-0">
        <div className="w-full h-1/3 flex flex-col md:flex-row items-center md:justify-center lg:justify-start relative gap-3 md:gap-0">
          <div className=" flex flex-col md:flex-row items-center w-fit h-full">
            <div className="w-[215px] h-[215px] bg-[url('/images/teach.jpg')] bg-center border rounded-xl shadow-xl  left-0"></div>
            <div className="w-[1px] h-[3rem] md:h-0 md:w-48 border-b border-white  md:left-[18%] bg-white md:bg-transparent"></div>
            <span className="w-2 h-2 bg-white rounded-full  left-[34%]"></span>
          </div>
          <p className="text-white text-sm md:w-1/3 px-4">
            Round-the-clock staff support and supervision to ensure the safety
            and well-being of residents and provide immediate assistance when
            needed.
          </p>
        </div>
        <div className="w-full h-1/3 flex flex-col md:flex-row items-center md:justify-center lg:justify-start relative gap-3 md:gap-0">
          <div className="relative  lg:left-[200px] xl:left-[355px]  flex flex-col md:flex-row items-center w-fit h-full ">
            <div className="w-[215px] bg-[url('/images/playground.jpg')] h-[215px] border rounded-xl shadow-xl   "></div>
            <div className="w-[1px] h-[3rem] md:h-0 md:w-48 border-b border-white bg-white md:bg-transparent"></div>
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>
          <p className="text-white text-sm md:w-1/3 px-4 relative lg:left-[200px] xl:left-[355px]">
            Access to safe and supportive housing facilities designed to meet
            the unique needs of teens with special needs, disabilities, and
            at-risk backgrounds.
          </p>
        </div>
        <div className="w-full h-1/3  flex flex-col md:flex-row items-center md:justify-center lg:justify-start relative gap-3 md:gap-0">
          <div className="relative lg:left-[50px]  flex flex-col md:flex-row items-center w-fit h-full">
            <div className="w-[215px] h-[215px] bg-[url('/images/park.jpg')] bg-center border rounded-xl shadow-xl   "></div>
            <div className="w-[1px] h-[3rem] md:h-0 md:w-48 border-b border-white bg-white md:bg-transparent"></div>
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>
          <p className="text-white text-sm md:w-1/3 px-4 relative lg:left-[50px]">
            Transitional housing options available for teens transitioning out
            of foster care, homelessness, or other challenging circumstances, to
            help them successfully transition to independent living.
          </p>
        </div>
      </main>
    </section>
  );
}

export default Housing;
