'use client'
import Image from "next/image";
import React, { useState } from 'react';
import { FaRegCreditCard } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";


const PaymentGateway = () => {

    const [selectedMethod, setSelectedMethod] = useState('');

    const handleMethodSelection = (method: string) => {
        setSelectedMethod(method)
    };

    return (
        <div className="px-[3rem]">
            <div className="min-h-screen flex justify-around ">
                <div className="flex flex-col gap-[2.5rem] text-black pt-[2rem]">
                    <h1 className="text-4xl border-b-[1px] border-b-black pb-[2%]">Payment</h1>
                    <div className="flex justify-center">
                        <div className={`w-[11rem] h-[3.3rem] border-2 border-r-[1px] border-[#000029] flex justify-center items-center gap-2 text-black hover:cursor-pointer ${selectedMethod == 'Card' ? 'bg-[#171738] text-white' : ''}`} onClick={() => handleMethodSelection("Card")}><FaRegCreditCard className={`w-[2rem] h-[2rem]  ${selectedMethod == 'Card' ? 'text-white' : 'text-[#3423A6]' }`} /><p>Card</p></div>
                        <div className={`w-[11rem] h-[3.3rem] border-2 border-l-[1px] border-[#000029] flex justify-center items-center gap-2 text-black hover:cursor-pointer ${selectedMethod == 'Paypal' ? 'bg-[#171738] text-white' : ''}`} onClick={() => handleMethodSelection("Paypal")}><FaPaypal className={`w-[2rem] h-[2rem] ${selectedMethod == 'Paypal' ? 'text-white' : 'text-[#3423A6]' }`} /><p>Paypal</p></div>
                    </div>
                    <div className="flex flex-col w-[25rem] gap-4">
                    <h2>Billing Information</h2>
                        <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] w-full px-2 focus:outline-none" placeholder="Card Number" />
                        <div className="w-full flex justify-between">
                            <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] w-[45%] px-2 focus:outline-none" placeholder="CCV" />
                            <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] w-[45%] px-2 focus:outline-none" placeholder="Expr" />
                        </div>
                        <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] w-full px-2 focus:outline-none" placeholder="Street Address" />
                        <div className="w-full flex justify-between">
                            <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] w-[45%] px-2 focus:outline-none" placeholder="City" />
                            <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] w-[25%] px-2 focus:outline-none" placeholder="State" />
                            <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] w-[25%] px-2 focus:outline-none" placeholder="Zip" />

                        </div>
                    </div>

                    <div>
                        <h2>Shipping Address</h2>
                        <div className="flex flex-col w-[25rem] mt-[5%] gap-4">
                            <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] w-full px-2 focus:outline-none" placeholder="Address line 1" />
                            <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] w-full px-2 focus:outline-none" placeholder="Address line 1" />
                            <div className="w-full flex justify-between">
                                <div className="flex w-[45%] gap-[4px]">
                                    <label className="text-[#656565] text-[12px]">city</label>
                                    <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] px-2 focus:outline-none w-full" />
                                </div>
                                <div className="flex w-[25%] gap-[4px]">
                                    <label className="text-[#656565] text-[12px]">state</label>
                                    <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] w-full px-2 focus:outline-none" />
                                </div>

                                <div className="flex w-[25%] gap-[4px]">
                                    <label className="text-[#656565] text-[12px]">zip</label>
                                    <input type="text" className="bg-transparent border-[2px] border-[#E8E8E8] rounded-lg py-[8px] w-full px-2 focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <button className="bg-[#F1C900] px-[4rem] py-[0.5rem]  text-black mt-[10%] w-full">Pay</button>

                    </div>
                </div>
                <div className="w-[40%] py-[2rem]">
                    <div className="bg-[#3423A6] flex flex-col gap-[4rem] text-white  px-[3rem] justify-center h-full rounded-xl">
                        <h2 className="text-3xl border-b-[1px] border-b-white relative pb-[2%] bottom-[10%]">Order Summary</h2>
                        <div className="w-full">
                            <h2 className="text-xl ">Order Details</h2>
                            <div className="flex gap-6 mt-[5%] justify-between border-b-[1px] border-b-white pb-[5%]">
                                <div>
                                    <Image
                                        src={"/images/placeholder.png"}
                                        height={50}
                                        width={50}
                                        alt="placeholder"
                                    />
                                </div>
                                <div>
                                    <p>Thank You For Smiling</p>
                                    <p className="text-[#A7A7A7]">by Soul Singh</p>
                                </div>
                                <div>
                                    <p>$15.00</p>
                                    <p className="text-[#A7A7A7]">Qty: 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full border-b-[1px] border-b-white pb-[5%]">
                            <div className="flex justify-between w-full">
                                <p>Sub total</p>
                                <p>$15.00</p>
                            </div>
                            <div className="flex justify-between w-full">
                                <p>Shipping</p>
                                <p>$4.00</p>
                            </div>
                            <div className="flex justify-between w-full">
                                <p>Tax</p>
                                <p>$2.00</p>
                            </div>
                        </div>
                        <div className="relative top-[5%] space-y-2">
                            <h2>Total</h2>
                            <p className="text-3xl">$21.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentGateway