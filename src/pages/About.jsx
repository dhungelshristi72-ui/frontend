import React from "react";

function About() {
  return (
     <div className="bg-[#0B0B18] text-white py-12 px 6">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold sm:text-4xl text-[#A78BFA] mb-8">
          About Me
        </h1>
      </div>
      <div className="max-w-3xl mx-auto">
        <p className="sm:text-lg text-base mb-4 text-center text-[#A1A1AA] lending-8 ">
          Hello, I am Shristi Dhungel , a passionate fill stack developer from
          Nepal . I enjoy building responsive and user frendly web applications
        </p>
        <p className="sm:text-lg text-base mb-4 text-center text-[#A1A1AA] lending-8">
          I love learning new technologys, solving problems and creating modern
          website that provide great user experiences.
        </p>
      </div>
      <div className="flex flex-col justify-center max-w-4xl items-center gap-6 text-lg mb-4 border border-[#8B5CF6]/30 bg-[#17132B] p-6 sm:p-10 rounded-lg h-100 w-200 ml-78 shadow-xl shadow-purple-500/10">
        <h1 className="text-2xl sm:text-2xl font-bold text-[#C4B5FD] text-center">
          MY FULL STACK KNOWLEDGE AND SKILLS
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-base">
          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-2 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] teansition-all duration-300">HTML,CSS AND JAVASCRIPT</li>
          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-2 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] teansition-all duration-300">REACT JS AND TAILWIND CSS</li>
          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-2 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] teansition-all duration-300">NODE JS AND EXPRESS JS</li>
          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-2 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] teansition-all duration-300">MONGODB</li>
          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-2 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] teansition-all duration-300">GIT AND GITHUB</li>
          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-2 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] teansition-all duration-300">RESPONSIVE WEB DESIGN</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
