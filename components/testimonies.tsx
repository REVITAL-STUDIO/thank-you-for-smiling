import React from "react";
import Image from "next/image";

function Testimonies() {
  return (
    <section>
      <div className="flex radial-gradient-testimonies py-[5rem] justify-between px-[3rem]">
        <div className="w-[40%]">
          <div className="flex flex-col items-center text-center">
            <Image
              src={"/images/testimonialPic-1.png"}
              height={300}
              width={300}
              alt="testimonial-pic"
              className="rounded-md"
            />
            <p className="text-[#FFF200] font-dmSans font-medium text-2xl mt-[5%]">
              Mary Wilkes
            </p>
            <p className="text-white">Parent of participant</p>
            <p className="text-white mt-[5%] text-sm">
              “Working with this non-profit has been life-changing for my child.
              They provided a safe and supportive environment where my child
              could learn and grow. I am forever grateful for the opportunities
              they have given us.”
            </p>
          </div>
        </div>
        <div>
          <div>
            <Image
              src={"/images/smile.jpeg"}
              height={600}
              width={600}
              alt="testimonial-pic"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonies;
