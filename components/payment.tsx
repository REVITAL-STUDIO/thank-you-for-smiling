'use client'
import React from "react";
import { useState, useRef } from "react";
import { FaDollarSign } from "react-icons/fa";


function Payment() {

  const [selectedPrice, setSelectedPrice] = useState(0);
  const [billingFrequency, setBillingFrequency] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handlePriceSelection = (price: number) => {
    setSelectedPrice(price);
  };

  const handleDonationSubmit = async () => {

    if(selectedPrice && billingFrequency!='' ){
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedPrice)
      });

      if (!response.ok) {
        throw new Error("Error creating stripe checkout session")
      }
      const data = await response.json();
      window.location.assign(data);
      console.log("data")
    } catch (error) {
      console.error(error);
    }
  }
  else {
    console.log("must select or enter an amount and select a donation frequeancy")
  }
  };


  return (
    <div className="relative w-full min-h-screen bg-gradient-to-t from-[#171738]  to-black flex flex-col">
      <div className="w-fit h-[10%] flex items-center">
        <h1 className="text-4xl text-white p-4 font-dmSans font-extrabold italic">
          <span className=" text-5xl text-[#F1C900]">Empowering futures,</span>{" "}
          <br></br>
          <span className="font-light italic">donate today.</span>
        </h1>
      </div>

      <div className="mt-[5%] space-y-12 text-white px-8">
        <div className="flex gap-[5%] ">
          {/* price selection go here */}
          <div className={`px-14 py-4 border-[1px] bg-transparent border-white rounded-md text-3xl hover:cursor-pointer ${selectedPrice == 10 ? 'bg-yellow-400' : ''}`} onClick={()=>{handleClearInput();handlePriceSelection(10)}}>$10</div>
          <div className={`px-14 py-4 border-[1px] bg-transparent border-white rounded-md text-3xl hover:cursor-pointer ${selectedPrice == 25 ? 'bg-yellow-400' : ''}`} onClick={()=>{handleClearInput();handlePriceSelection(25)}}>$25</div>
          <div className={`px-14 py-4 border-[1px] bg-transparent border-white rounded-md text-3xl hover:cursor-pointer ${selectedPrice == 50 ? 'bg-yellow-400' : ''}`} onClick={()=>{handleClearInput();handlePriceSelection(50)}}>$50</div>
          <div className={`px-14 py-4 border-[1px] bg-transparent border-white rounded-md text-3xl hover:cursor-pointer ${selectedPrice == 100 ? 'bg-yellow-400' : ''}`} onClick={()=>{handleClearInput();handlePriceSelection(100)}}>$100</div>
        </div>
        <div>
          <h3 className="mb-4">Enter an Amount</h3>
          <div className="flex gap-[5%] items-center">
            <div className="relative w-[15%]">
              <FaDollarSign className="absolute bottom-6 left-2 w-[2rem] h-[2rem] text-[#F1C900]" />
              <input ref={inputRef} className="pl-10 py-6 border-[1px] bg-transparent border-white rounded-md text-2xl w-full" onChange={(e) => handlePriceSelection(parseFloat(e.target.value))} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <input id="one_time_donation" type="radio" name="donation_type" className="appearance-none border-[1px] border-[#D9D9D9] rounded-md w-4 h-4 bg-transparent checked:bg-[#F1C900]" onChange={()=>setBillingFrequency('recurring')}/>
                <label htmlFor="one_time_donation" >one time donation</label>
              </div>
              <div className="flex gap-4 ">
                <input id="monthly_donation" type="radio" name="donation_type" className="appearance-none border-[1px] border-[#D9D9D9] rounded-md w-4 h-4 bg-transparent checked:bg-[#F1C900]" onChange={()=>setBillingFrequency('one-time')}/>
                <label htmlFor="monthly_dontation" >monthly recurring donation</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => handleDonationSubmit()} className="absolute bottom-[20%] right-[5%] rounded-full shadow-xl w-[10rem] h-[10rem] text-3xl border font-medium italic bg-[#F1C900] hover:glow">
        donate
      </button>
    </div>
  );
}

export default Payment;
