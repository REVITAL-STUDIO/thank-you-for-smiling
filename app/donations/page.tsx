import Image from "next/image";



const donations = () => {


    return (
        <div>
            <div className="flex flex-col gap-6 ">
                <div className="bg-[#000029]/50 h-[40rem] flex justify-between px-[4rem] py-4">
                    <nav className="flex gap-4 text-white">
                        <a>About us</a>
                        <a>Programs</a>
                        <a>Get Involved</a>
                    </nav>
                    <div className="">
                        <Image
                            src={"/images/logo.png"}
                            height={200}
                            width={200}
                            alt="logo"
                        />
                    </div>
                </div>
                <h1 className="text-[#3423A6] text-4xl text-center">Inspire Action: Your Donation, Their Transformation</h1>
                <div className="flex">
                    <div className="w-[50%] px-[2rem] border-r-2 border-r-[#ACACAC]">
                        <p className="text-xl text-[#626262]">
                            With your help, we empower individuals and communities to overcome obstacles and achieve their full potential.
                            Your donation fuels initiatives like career training, fostering resilience and self-reliance among those we serve.
                        </p>
                    </div>
                    <div className="flex flex-col px-[3rem]">
                        <form>
                            <div>
                                <div>
                                    <h2>Amount</h2>
                                    <div className="flex">
                                        {/* price selection go here */}
                                    </div>
                                </div>
                                <div>
                                    <h2>Payment Information</h2>
                                    {/* Credit card info container */}
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default donations;