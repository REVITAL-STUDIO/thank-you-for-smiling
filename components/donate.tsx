import React from "react";

function Donate() {
  return (
    <section className="w-full h-300 flex items-center justify-center">
      <div className="flex w-[95%] justify-between text-black">
        <div className="flex flex-col gap-4 justify-center">
          <h3 className="text-3xl font-cheapSignage font-medium italic">
            Support Our Mission Today
          </h3>
          <p>
            Help us make a difference in the lives of special needs children and
            at-risk teenagers by donating your time or resources.
          </p>
        </div>
        <div className="flex items-center gap-8">
          <button className="w-24 h-24 border-[2px] border-[#171738] rounded-full">
            Volunteer
          </button>
          <button className="w-24 h-24 bg-[#000029] text-white rounded-full">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
}

export default Donate;
