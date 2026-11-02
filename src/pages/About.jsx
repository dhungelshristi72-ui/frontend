import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-[#0B0B18] text-white py-12 px-4 sm:px-6">
      {/* Heading */}
      <div className="flex justify-center items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#A78BFA] mb-8">
          About Me
        </h1>
      </div>

      {/* Introduction */}
      <div className="max-w-3xl mx-auto">
        <p className="text-base sm:text-lg mb-4 text-center text-[#A1A1AA] leading-7 sm:leading-8">
          Hello, I am Shristi Dhungel, a passionate full stack developer from
          Nepal. I enjoy building responsive and user-friendly web applications.
        </p>

        <p className="text-base sm:text-lg mb-10 text-center text-[#A1A1AA] leading-7 sm:leading-8">
          I love learning new technologies, solving problems and creating modern
          websites that provide great user experiences.
        </p>
      </div>

      {/* Skills Section */}
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center gap-6 border border-[#8B5CF6]/30 bg-[#17132B] p-5 sm:p-10 rounded-lg shadow-xl shadow-purple-500/10">
        <h1 className="text-xl sm:text-2xl font-bold text-[#C4B5FD] text-center">
          MY FULL STACK KNOWLEDGE AND SKILLS
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-sm sm:text-base">
          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-3 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] transition-all duration-300">
            HTML, CSS AND JAVASCRIPT
          </li>

          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-3 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] transition-all duration-300">
            REACT JS AND TAILWIND CSS
          </li>

          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-3 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] transition-all duration-300">
            NODE JS AND EXPRESS JS
          </li>

          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-3 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] transition-all duration-300">
            MONGODB
          </li>

          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-3 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] transition-all duration-300">
            GIT AND GITHUB
          </li>

          <li className="bg-[#241D3B] border border-[#8B5CF6]/20 p-3 rounded-xl text-center hover:border-[#8B5CF6] hover:bg-[#30234B] transition-all duration-300">
            RESPONSIVE WEB DESIGN
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
