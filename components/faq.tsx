import React from "react";
import { IoMdAdd } from "react-icons/io";

function FAQ() {
  return (
    <section className="w-full h-600 bg-[#3423A6] flex flex-col justify-center">
      <h1 className="text-white text-5xl p-4 font-cheapSignage font-medium ">
        FAQ
      </h1>
      <div className="flex w-3/4 h-[66%] items-center ">
        <ul className="w-3/4 h-full   relative left-4 flex flex-col justify-center gap-12 text-white text-lg">
          <div className="w-full h-[12%] flex items-center justify-between border-b">
            <li className="w-full">Who is eligible for the Programs?</li>
            <button className="p-2 w-1/6 rounded-full border flex justify-center items-center">
              <IoMdAdd className="text-[#8E7DFF]" />
            </button>
          </div>
          <div className="w-full h-[12%] flex items-center justify-between border-b">
            <li className="w-full">Is there an application deadline?</li>
            <button className="p-2 w-1/6 rounded-full border flex justify-center items-center">
              <IoMdAdd className="text-[#8E7DFF]" />
            </button>
          </div>
          <div className="w-full h-[12%] flex items-center justify-between border-b">
            <li className="w-full">
              How would this help my childs future career?
            </li>
            <button className="p-2 w-1/6 rounded-full border flex justify-center items-center">
              <IoMdAdd className="text-[#8E7DFF]" />
            </button>
          </div>
          <div className="w-full h-[12%] flex items-center justify-between border-b">
            <li className="w-full">Who qualifies?</li>
            <button className="p-2 w-1/6 rounded-full border flex justify-center items-center">
              <IoMdAdd className="text-[#8E7DFF]" />
            </button>
          </div>
        </ul>
      </div>
      <button className="text-white rounded-full w-24 h-24 flex justify-center items-center border relative left-4 ">
        Contact
      </button>
    </section>
  );
}

export default FAQ;
