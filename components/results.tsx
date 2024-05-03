import React from "react";

function Results() {
  return (
    <div className="w-full h-screen  bg-gradient-to-b to-[#171738] from-[#3423A6] flex justify-center items-center">
      <div className="w-full h-5/6  flex flex-wrap justify-center content-center items-center gap-4 text-white">
        <div className="w-1/4 h-2/5 bg-[#3423A6] shadow-md rounded-lg text-base hover:scale-105 hover:shadow-xl transition ease-in-out duration-150">
          <h1 className="mt-[10%] px-4">Mentorship & Support</h1>
          <p className="mt-[10%] text-xs px-4">
            Ongoing mentorship and support from experienced professionals to
            guide teens through their training and career development journey.
          </p>
        </div>
        <div className="w-1/4 h-2/5 bg-[#3423A6]  shadow-md rounded-lg text-base hover:scale-105 hover:shadow-xl transition ease-in-out duration-150">
          <h1 className="mt-[10%] px-4">Industry Revelant Skills</h1>
          <p className="mt-[10%] text-xs px-4">
            Training in a variety of industry-relevant skills, including (list
            specific skills such as computer literacy, culinary arts, customer
            service, etc.), to prepare teens for future employment
            opportunities.
          </p>
        </div>
        <div className="w-1/4 h-2/5 bg-[#3423A6]  shadow-md rounded-lg text-base hover:scale-105 hover:shadow-xl transition ease-in-out duration-150">
          <h1 className="mt-[10%] px-4">Tailored Support Training</h1>
          <p className="mt-[10%] text-xs px-4">
            Customized skill development programs designed to meet the unique
            needs and abilities of teens with special needs, disabilities, and
            at-risk backgrounds.
          </p>
        </div>
        <div className="w-1/4 h-2/5 bg-[#3423A6]  shadow-md rounded-lg text-base hover:scale-105 hover:shadow-xl transition ease-in-out duration-150">
          <h1 className="mt-[10%] px-4">Job Placement Assistance</h1>
          <p className="mt-[10%] text-xs px-4">
            Supportive services to help teens secure meaningful employment,
            including resume building, interview preparation, and job placement
            assistance.
          </p>
        </div>
        <div className="w-1/4 h-2/5 bg-[#3423A6]  shadow-md rounded-lg text-base hover:scale-105 hover:shadow-xl transition ease-in-out duration-150">
          <h1 className="mt-[10%] px-4">Hands-On Learning</h1>
          <p className="mt-[10%] text-xs px-4">
            Practical, hands-on training in a supportive environment to build
            confidence, competence, and independence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Results;
