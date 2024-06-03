import React from "react";

function Donation() {
  return (
    <div className="bg-gradient-to-b from-[#3423A6] via-[#171738]  to-black h-screen flex justify-center items-center">
      <div className="w-[95%] h-5/6 flex flex-col items-center justify-center relative">
        <h1 className="uppercase top-[-15%]  text-[#F1C900] font-dmSans italic text-large absolute z-50 font-extrabold">
          Donate
        </h1>
        <div className="w-full h-[90%] rounded-bl-5xl rounded-br-5xl bg-[url('/images/kids-school.jpg')] z-10 bg-no-repeat bg-cover bg-center flex items-center justify-center shadow-xl">
          <div className="w-5/6 h-full flex flex-col justify-end gap-y-4">
            <p className=" text-white w-2/3 text-lg font-medium">
              With your help, we empower individuals and communities to overcome
              obstacles and achieve their full potential. Your donation fuels
              initiatives like career training, fostering resilience and
              self-reliance among those we serve.
            </p>
            <button className="rounded-3xl p-4 mb-4 w-fit border text-xl bg-transparent text-white italic">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
