"use client";

import React from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useState, useEffect } from "react";

function FAQ() {
  const faqData = [
    {
      question: "Who is Eligible for the program",
      answer: "The application deadline is June 1st.",
    },
    {
      question: "Is there an application deadline?",
      answer: "The application deadline is June 1st.",
    },
    {
      question: "How would this help my child's future career?",
      answer:
        "This program provides essential skills and networking opportunities that can significantly enhance your child's career prospects.",
    },
    {
      question: "Who qualifies?",
      answer:
        "Any student aged 14-18 with a passion for learning qualifies for this program.",
    },
  ];

  // Initialize handleFAQ state with an array of false values to represent closed state for each question
  const [handleFAQ, setHandleFAQ] = useState(Array(faqData.length).fill(false));

  // Function to toggle the answer visibility for a specific question at the given index
  const toggleAnswers = (index: number) => {
    setHandleFAQ(handleFAQ.map((item, i) => (i === index ? !item : false)));
  };
  return (
    <section className="w-full p-4 bg-[#090B0A] flex flex-col justify-center">
      <h1 className="text-white text-5xl p-4 font-dmSans font-bold italic">
        FAQ
      </h1>
      <div className="flex w-full py-4 items-center justify-center">
        <ul className="w-full px-4 py-[2%]">
          {faqData.map((faq, index) => (
            <li key={index}>
              <div
                className={`w-full overflow-hidden transition-max-h ${
                  handleFAQ[index] ? "my-[5%] py-[2%]" : "my-[2%] py-[2%]"
                } transition-all duration-200 ease-in-out flex items-center justify-between border-b `}
              >
                <span className="font-bold text-xl text-white font-cheapSignage">
                  {faq.question}
                </span>
                <button
                  onClick={() => toggleAnswers(index)}
                  className="p-2 rounded-full hover:bg-[#F1C900] transition duration-150 ease-in-out bg-white flex justify-center items-center"
                >
                  {handleFAQ[index] ? (
                    <IoMdRemove className="text-[#8E7DFF]" />
                  ) : (
                    <IoMdAdd className="text-[#8E7DFF]" />
                  )}
                </button>
              </div>
              {handleFAQ[index] && (
                <div className="mt-2">
                  <p className="text-base text-white">{faq.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <button className="text-white border-dashed rounded-full w-24 h-24 flex justify-center items-center border-[2px] relative left-4 ">
        Reach Out
      </button>
    </section>
  );
}

export default FAQ;
