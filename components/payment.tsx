'use client'
import React from "react";
import { useState, useRef } from "react";
import { FaDollarSign } from "react-icons/fa";
import { motion, Variants } from 'framer-motion';
import useInView from '../hooks/useInView';


function Payment() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const [selectedPrice, setSelectedPrice] = useState(0);
  const [billingFrequency, setBillingFrequency] = useState('');
  const [buttonHover, setButtonHover] = useState(false);

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

    if (selectedPrice && billingFrequency != '') {
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
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    },
    slideRight: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    },
    slideBottom: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
        ease: 'easeInOut'
      }
    },
  };

  const buttonVariants: Variants = {
    initial: { scale: 1, backgroundColor: '#F1C900' },
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
    hover: { backgroundColor: '#FFEE00' },
    tap: { backgroundColor: '#FFFFFF' }

  };

  return (
    <div ref={ref} className="relative w-full min-h-screen bg-gradient-to-t from-[#171738]  to-black flex flex-col">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={pageVariants}>
        <div className="flex flex-col w-fit h-[10%] items-center">
          <motion.h1 className="text-4xl  p-4 font-dmSans font-extrabold italic" initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0, transition: { duration: 1, delay: 1, ease: 'easeInOut' } } : ''}>
            <span className=" text-5xl text-[#F1C900]" >Empowering futures,</span>{" "}
            <br></br>
          </motion.h1>
          <motion.p className='mr-auto p-4' initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0, transition: { duration: 1, delay: 1, ease: 'easeInOut' } } : ''}>
            <span className="text-4xl font-light italic text-white" >donate today.</span>
          </motion.p>
        </div>

        <div className="mt-[5%] space-y-12 text-white px-8">
          <div className="flex justify-center sm:justify-start gap-[1.5rem] sm:gap-[3rem] flex-wrap ">
            {/* price selection go here */}
            <motion.div className={`px-8 py-2 md:px-14 md:py-4 border-[1px] bg-transparent border-white rounded-md text-3xl hover:cursor-pointer transition-colors duration-500 ease-in-out ${selectedPrice == 10 ? 'bg-yellow-400' : ''}`} onClick={() => { handleClearInput(); handlePriceSelection(10) }} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0, transition: { duration: 1, delay: 0, ease: 'easeInOut' } } : ''}>$10</motion.div>
            <motion.div className={`px-8 py-2 md:px-14 md:py-4 border-[1px] bg-transparent border-white rounded-md text-3xl hover:cursor-pointer  transition-colors duration-500 ease-in-out ${selectedPrice == 25 ? 'bg-yellow-400' : ''}`} onClick={() => { handleClearInput(); handlePriceSelection(25) }} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5, ease: 'easeInOut' } } : ''}>$25</motion.div>
            <motion.div className={`px-8 py-2 md:px-14 md:py-4 border-[1px] bg-transparent border-white rounded-md text-3xl hover:cursor-pointer  transition-colors duration-500 ease-in-out ${selectedPrice == 50 ? 'bg-yellow-400' : ''}`} onClick={() => { handleClearInput(); handlePriceSelection(50) }} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0, transition: { duration: 1, delay: 1, ease: 'easeInOut' } } : ''}>$50</motion.div>
            <motion.div className={`px-8 py-2 md:px-14 md:py-4 border-[1px] bg-transparent border-white rounded-md text-3xl hover:cursor-pointer  transition-colors duration-500 ease-in-out ${selectedPrice == 100 ? 'bg-yellow-400' : ''}`} onClick={() => { handleClearInput(); handlePriceSelection(100) }} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0, transition: { duration: 1, delay: 1.5, ease: 'easeInOut' } } : ''}>$100</motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0, transition: { duration: 1, delay: 2, ease: 'easeInOut' } } : ''}>
            <h3 className="mb-4">Enter an Amount</h3>
            <div className="flex flex-col sm:flex-row gap-[1.5rem] sm:gap-[5%] items-center">
              <div className="relative w-[28%] md:w-[15%] min-w-[12rem]">
                <FaDollarSign className="absolute bottom-6 left-2 w-[2rem] h-[2rem] text-[#F1C900]" />
                <input ref={inputRef} className="pl-10 py-6 border-[1px] bg-transparent border-white rounded-md text-2xl w-full" onChange={(e) => handlePriceSelection(parseFloat(e.target.value))} />
              </div>
              <div className="flex flex-col gap-2">
                <motion.div className="flex gap-4" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0, transition: { duration: 1, delay: 2.5, ease: 'easeInOut' } } : ''}>
                  <input id="one_time_donation" type="radio" name="donation_type" className="appearance-none border-[1px] border-[#D9D9D9] rounded-md w-4 h-4 bg-transparent checked:bg-[#F1C900]" onChange={() => setBillingFrequency('recurring')} />
                  <label htmlFor="one_time_donation" >one time donation</label>
                </motion.div>
                <motion.div className="flex gap-4 " initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0, transition: { duration: 1, delay: 3, ease: 'easeInOut' } } : ''}>
                  <input id="monthly_donation" type="radio" name="donation_type" className="appearance-none border-[1px] border-[#D9D9D9] rounded-md w-4 h-4 bg-transparent checked:bg-[#F1C900]" onChange={() => setBillingFrequency('one-time')} />
                  <label htmlFor="monthly_dontation" >monthly recurring donation</label>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center md:justify-start">
          <motion.button
            onClick={() => handleDonationSubmit()
            }
            variants={buttonVariants}
            initial="initial"
            animate={selectedPrice !== 0 && billingFrequency != '' && !buttonHover ? 'pulse' : 'initial'}
            className="relative mb-[5rem] md:mb-[10rem] top-[2rem] sm:top-[5.5rem] md:top-[6rem]  md:left-[80%] rounded-full shadow-xl w-[7rem] h-[7rem] sm:w-[7.5rem] sm:h-[7.5rem] lg:w-[10rem] lg:h-[10rem] text-3xl border font-medium italic bg-[#F1C900]"
            onHoverStart={() => setButtonHover(true)}
            onHoverEnd={() => setButtonHover(false)}
            whileHover={'hover'}
            whileTap={'tap'}
          >
            donate
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Payment;
