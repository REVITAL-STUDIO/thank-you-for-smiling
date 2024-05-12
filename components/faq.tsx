import React from "react";
import { IoMdAdd } from "react-icons/io";

function FAQ() {
  return (
    <section className="w-full h-screen bg-[#3423A6] flex flex-col justify-center">
      <h1 className="text-white text-5xl p-4 font-dmSans font-medium italic">
        FAQ
      </h1>
      <div className="flex w-full h-[66%] items-center justify-center ">
        <ul className="w-3/4 h-full   relative left-4 flex flex-col justify-center gap-12 text-white text-lg">
          <div className="w-full h-[12%] flex items-center justify-between border-b">
            <li className="w-full font-bold text-xl">
              Who is eligible for the Programs?
            </li>
            <button className="p-2 w-1/6 rounded-full border bg-white flex justify-center items-center">
              <IoMdAdd className="text-[#8E7DFF]" />
            </button>
          </div>
          <div className="w-full h-[12%] flex items-center justify-between border-b">
            <li className="w-full font-bold text-xl">
              Is there an application deadline?
            </li>
            <button className="p-2 w-1/6 rounded-full border bg-white  flex justify-center items-center">
              <IoMdAdd className="text-[#8E7DFF]" />
            </button>
          </div>
          <div className="w-full h-[12%] flex items-center justify-between border-b">
            <li className="w-full font-bold text-xl">
              How would this help my childs future career?
            </li>
            <button className="p-2 w-1/6 rounded-full border bg-white  flex justify-center items-center">
              <IoMdAdd className="text-[#8E7DFF]" />
            </button>
          </div>
          <div className="w-full h-[12%] flex items-center justify-between border-b">
            <li className="w-full font-bold text-xl">Who qualifies?</li>
            <button className="p-2 w-1/6 rounded-full border bg-white  flex justify-center items-center">
              <IoMdAdd className="text-[#8E7DFF]" />
            </button>
          </div>
        </ul>
      </div>
      <button className="text-white rounded-full w-24 h-24 flex justify-center items-center border relative left-4 ">
        Reach Out
      </button>
    </section>
  );
}

export default FAQ;
