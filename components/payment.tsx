import React from "react";

function Payment() {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-[#171738]  to-black flex flex-col">
      <div className="w-fit h-[10%] flex items-center">
        <h1 className="text-4xl text-white p-4 font-dmSans font-extrabold italic">
          <span className=" text-5xl text-[#F1C900]">Empowering futures,</span>{" "}
          <br></br>
          <span className="font-light italic">donate today.</span>
        </h1>
      </div>
      <div className="w-1/2 h-[15%]  flex flex-col justify-center">
        <div className="w-full h-full flex justify-center gap-x-4 items-center px-4 text-white italic font-bold">
          <button className="w-[20%] h-[40%] rounded-xl border flex justify-center items-center ">
            <span>$10</span>
          </button>
          <button className="w-[20%] h-[40%] rounded-xl border flex justify-center items-center">
            <span>$25</span>
          </button>
          <button className="w-[20%] h-[40%] rounded-xl border flex justify-center items-center">
            <span>$50</span>
          </button>
          <button className="w-[20%] h-[40%] rounded-xl border flex justify-center items-center">
            <span>$100</span>
          </button>
          <button className="w-[20%] h-[40%] rounded-xl border flex justify-center items-center">
            <span>Custom</span>
          </button>
        </div>
      </div>
      <div className="w-full h-[75%] flex flex-col justify-evenly items-center">
        <form className="w-[35%] h-2/3 border shadow-lg p-8 rounded">
          <div className="mb-4">
            <label
              className="block text-white/75 text-sm font-light mb-2"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-700  font-light placeholder:text-sm"
              id="cardNumber"
              type="text"
              placeholder="Card number"
            />
          </div>
        </form>
        <button className="rounded-full shadow-xl w-16 h-16 text-sm border font-medium italic bg-[#F1C900]">
          donate
        </button>
      </div>
    </div>
  );
}

export default Payment;
