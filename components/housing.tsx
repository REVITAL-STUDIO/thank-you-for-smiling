import React from "react";

function Housing() {
  return (
    <section className="w-full h-screen bg-gradient-to-t to-[#171738] from-[#41419E] flex justify-center items-center">
      <main className="w-5/6 h-5/6 flex items-start flex-col justify-between ">
        <div className="w-full h-1/3 flex items-center relative">
          <div className=" flex items-center w-fit h-full">
            <div className="w-[215px] h-[215px] bg-[url('/images/teach.jpg')] bg-center border rounded-xl shadow-xl  left-0"></div>
            <div className="w-48 border-b border-white  left-[18%]"></div>
            <span className="w-2 h-2 bg-white rounded-full  left-[34%]"></span>
          </div>
          <p className="text-white text-sm w-1/3 px-4">
            Round-the-clock staff support and supervision to ensure the safety
            and well-being of residents and provide immediate assistance when
            needed.
          </p>
        </div>
        <div className="w-full h-1/3 flex items-center relative">
          <div className="relative  left-[355px]  flex items-center w-fit h-full">
            <div className="w-[215px] bg-[url('/images/playground.jpg')] h-[215px] border rounded-xl shadow-xl   "></div>
            <div className="w-48 border-b border-white"></div>
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>
          <p className="text-white text-sm w-1/3 px-4 relative left-[355px]">
            Access to safe and supportive housing facilities designed to meet
            the unique needs of teens with special needs, disabilities, and
            at-risk backgrounds.
          </p>
        </div>
        <div className="w-full h-1/3  flex items-center relative">
          <div className="relative left-[50px]  flex items-center w-fit h-full">
            <div className="w-[215px] h-[215px] bg-[url('/images/park.jpg')] bg-center border rounded-xl shadow-xl   "></div>
            <div className="w-48 border-b border-white"></div>
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>
          <p className="text-white text-sm w-1/3 px-4 relative left-[50px]">
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
