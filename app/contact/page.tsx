import Image from "next/image";
import shapesCard from "../../public/images/contact_illustration.svg"


const contact = () => {


    return (
        <div>
            <div className="min-h-screen flex justify-around items-center gap-12 bg-[#41419E] text-white px-[4rem]">
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl w-fit relative ">Contact Us.</h1>
                    <form>
                        <div className="flex flex-col gap-4 w-[23rem]">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="first_name" >First Name</label>
                                <input id="first_name" type="text" className="bg-transparent border-[1px] border-white rounded-lg py-[10px] w-full px-2 focus:outline-none" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="last_name" >Last Name</label>
                                <input id="last_name" type="text" className="bg-transparent border-[1px] border-white rounded-lg py-[10px] w-full px-2 focus:outline-none" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="first_name" >Email</label>
                                <input id="email" type="text" className="bg-transparent border-[1px] border-white rounded-lg py-[10px] w-full px-2 focus:outline-none" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" >Message</label>
                                <textarea id="message" className="bg-transparent border-[1px] border-white rounded-lg py-[5px] w-full h-[10rem] px-2 focus:outline-none"></textarea>
                            </div>
                            <div className="flex flex-col gap-2 mt-[5%]">
                                <div className="flex gap-4">
                                    <input id="register_child" type="checkbox" className="appearance-none border-[1px] border-white rounded-md w-4 h-4 bg-transparent checked:bg-blue-600" />
                                    <label htmlFor="register_child" >I want to register my child</label>
                                </div>
                                <div className="flex gap-4">
                                    <input id="news" type="checkbox" className="appearance-none border-[1px] border-white rounded-md w-4 h-4 bg-transparent checked:bg-blue-600" />
                                    <label htmlFor="news" >I’d like to get news and insight</label>
                                </div>
                            </div>
                        </div>
                    </form>
                    <button className="bg-white px-[4rem] py-[1rem] rounded-3xl text-black mt-[5%]">Send Message</button>
                </div>
                <div className="w-[40%]">
                    <Image
                        src={shapesCard}
                        alt="shapes_illustration"
                    />
                </div>
            </div>
        </div>
    )
}

export default contact;