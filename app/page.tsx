import Image from "next/image";
import rocket from "../public/images/rocket.svg"
import community from "../public/images/community.svg"
import career from "../public/images/career.svg"
import results from "../public/images/results.svg"
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full">
        <div className="flex min-h-[55rem]">
          <div className="flex bg-white  w-[30%] justify-center items-center">
            <div className="relative left-[10%]">
              <Image
                src={"/images/logo.png"}
                height={400}
                width={400}
                alt="logo"
              />
            </div>

          </div>
          <div className="bg-[url('/images/hero-image.png')] w-[70%] relative">
            <div className="flex flex-col gap-4 absolute left-[10%] bottom-[30%]">
              <h1 className="w-fit text-white text-4xl">Empowering Special Needs <br />Children and At Risk Teens</h1>
              <div className="flex bg-black/60 text-white w-fit">
                <a className="p-4 border-[1px] border-[#4F4F4F]">Our Story</a>
                <a className="p-4 border-[1px] border-[#4F4F4F]">Our Story</a>
                <a className="p-4 border-[1px] border-[#4F4F4F]">Our Story</a>
                <a className="p-4 border-[1px] border-[#4F4F4F]">Our Story</a>
                <a className="p-4 border-[1px] border-[#4F4F4F]">Our Story</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* second section */}
      <section className="w-full">
        <div className="flex min-h-[55rem]">
          <div className="bg-[url('/images/paint-hands.png')] w-[60%] relative">
          </div>
          <div className="bg-gradient-to-b from-[#171738] to-[#41419E] w-[40%] flex justify-center items-center ">
            <div className="flex flex-col gap-10 text-center w-full items-center relative top-[5%]">
              <h1 className="w-[95%] text-4xl text-[#FFF200]">Providing Job Opportunities for Special Needs Children and At-Risk Teenagers</h1>
              <p className="w-[80%] text-xl text-white">Our program offers job opportunities to special needs children and at-risk teenagers, helping them prepare for their future after school.</p>
            </div>
          </div>
        </div>
      </section>
      {/* third section */}
      <section>
        <div className="px-8 py-12 bg-[#171738]">
          <div>
            <h1 className="text-4xl text-[#FFF200]">Unlocking Potential Through Comprehensive <br />Development Programs.</h1>
            <p className="mt-[3%] w-[50%] text-white">Empowering Success Through our program, special needs children and at-risk teenagers gain valuable work experience.</p>
            <p className="mt-[2%] text-white">Building Confidence Our program helps special needs children and at-risk teenagers develop essential skills.</p>
          </div>
          {/* Cards */}
          <div className="flex gap-[5%] px-11 my-[5%] justify-between">
            <div className="flex flex-col bg-[#3D3D3D]/90 w-[28%] rounded-md px-[2%] pt-[2%] pb-[5%]">
              <Image
                src={rocket}
                alt="rocket"
              />
              <h3 className="text-white mt-[10%]">Launch Potential</h3>
              <p className="text-[#C8C8C8] mt-[10%] text-sm">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
                eget condimentum velit, sit amet feugiat lectus
              </p>
            </div>
            <div className="flex flex-col bg-[#3D3D3D]/90 w-[28%] rounded-md px-[2%] pt-[2%] pb-[5%]">
              <Image
                src={community}
                alt="rocket"
              />
              <h3 className="text-white mt-[10%]">Community</h3>
              <p className="text-[#C8C8C8] mt-[10%] text-sm">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
                eget condimentum velit, sit amet feugiat lectus
              </p>
            </div>
            <div className="flex flex-col bg-[#3D3D3D]/90 w-[28%] rounded-md px-[2%] pt-[2%] pb-[5%]">
              <Image
                src={career}
                alt="rocket"
              />
              <h3 className="text-white mt-[10%]">Career Preparation</h3>
              <p className="text-[#C8C8C8] mt-[10%] text-sm">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
                eget condimentum velit, sit amet feugiat lectus
              </p>
            </div>
            <div className="flex flex-col bg-[#3D3D3D]/90 w-[28%] rounded-md px-[2%] pt-[2%] pb-[5%]">
              <Image
                src={results}
                alt="rocket"
              />
              <h3 className="text-white mt-[10%]">Real Results</h3>
              <p className="text-[#C8C8C8] mt-[10%] text-sm">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
                eget condimentum velit, sit amet feugiat lectus
              </p>
            </div>
          </div>
          <button className="bg-white px-[4rem] py-[1rem]">Learn More</button>
        </div>
      </section>
      <section className="w-full">
        <div className="flex justify-between py-[3rem] px-12">
          <div className="flex flex-col gap-4 justify-center">
            <h3 className="text-4xl">Support Our Mission Today</h3>
            <p>Help us make a difference in the lives of special needs children and at-risk teenagers by donating your time or resources.</p>
          </div>
          <div className="flex items-center gap-8">
            <button className="w-[8rem] py-4 border-[2px] border-[#171738]">Volunteer</button>
            <button className="w-[8rem] py-4 bg-[#000029] text-white">Donate</button>
          </div>
        </div>
      </section>
      {/* testimonials section */}
      <section>
        <div className="flex bg-[#090B0A] py-[5rem] justify-between px-[3rem]">
          <div className="w-[40%]">
            <div className="flex flex-col items-center text-center">
              <Image
                src={'/images/testimonialPic-1.png'}
                height={300}
                width={300}
                alt="testimonial-pic"
              />
              <p className="text-[#FFF200] text-2xl mt-[5%]">Mary Wilkes</p>
              <p className="text-white">Parent of participant</p>
              <p className="text-white mt-[5%]">
                “Working with this non-profit has been life-changing for my child. They provided a safe and supportive environment where my child
                could learn and grow. I am forever grateful for the opportunities they have given us.”
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image
                src={'/images/testimonialPic-2.png'}
                height={700}
                width={700}
                alt="testimonial-pic"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex bg-[#E8C201] justify-between px-[8rem] py-[4rem]">
          <div>
            <Image
              src={'/images/book.png'}
              height={500}
              width={500}
              alt="book"
            />
          </div>
          <div className="w-[40%] flex items-center">
            <p className="text-white text-xl">“Dive into the inspiring story behind Thank You For Smiling, as told by its fearless founder Soul Singh. In 'Heartfelt Mission,'
              Soul shares her deeply personal journey of passion, purpose, and perseverance in creating a lifeline for vulnerable kids
              and teens. From her earliest aspirations to the challenges and triumphs along the way, this heartfelt memoir offers a candid look at
              the motivations, struggles, and moments of triumph that fueled her mission. difference in the world."</p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex flex-col gap-6 bg-[#171738] items-start px-[3rem] py-[4rem]">
          <h1 className="text-white text-4xl">FAQ</h1>
          <div></div>
          <button className="bg-white px-[4rem] py-[1rem]">Contact</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
