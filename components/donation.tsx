import React from "react";

function Donation() {
  return (
    <div className="bg-gradient-to-b from-[#171738]  to-black h-screen flex justify-center items-center">
      <div className="w-5/6 h-5/6 flex flex-col items-center justify-center relative">
        <h1 className="uppercase top-[-15%] stroke text-transparent font-dmSans italic text-large absolute font-extrabold">
          Donate
        </h1>
        <div className="w-full h-5/6 rounded-bl-3xl rounded-br-3xl bg-[url('/images/bubble.jpg')] bg-no-repeat bg-cover bg-center justify-center shadow-xl flex flex-col items-start">
          <p className="p-4 text-white w-2/3 text-2xl font-light">
            With your help, we empower individuals and communities to overcome
            obstacles and achieve their full potential. Your donation fuels
            initiatives like career training, fostering resilience and
            self-reliance among those we serve.
          </p>
          <button className="rounded-full px-8 py-4 mt-8 border bg-transparent text-white italic">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Donation;
