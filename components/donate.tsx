import React from "react";

function Donate() {
  return (
    <section className="w-full h-300   flex items-center justify-center relative">
      <div className="w-full h-full bg-[url('/images/image-10.jpg')] blur-sm blur-black bg-cover bg-center absolute"></div>
      <div className="flex w-[95%] justify-between text-black absolute">
        <div className="flex flex-col gap-4 justify-center">
          <h3 className="text-3xl font-cheapSignage font-bold italic text-white">
            Ready to make a difference?
          </h3>
          <p className="text-lg text-white font-dmSans">
            Help us make a difference in the lives of special needs children and
            at-risk teenagers by donating your time or resources.
          </p>
        </div>
        <div className="flex items-center gap-8">
          <button className="w-24 h-24 border-[2px] border-white text-white shadow-lg rounded-full">
            Volunteer
          </button>
          <button className="w-24 h-24 bg-[#000029] text-white rounded-full shadow-lg">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
}

export default Donate;
