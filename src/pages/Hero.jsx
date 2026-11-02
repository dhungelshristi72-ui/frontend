import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Hero() {
  const navigate = useNavigate();
  return (
   <div className="min-h-[90vh] bg-[#0B0B18] flex sm:flex-row flex-col-reverse justify-between items-center gap-12 px-16 py-12">
      {/* left content */}
      <div className="flex flex-col gap-4 sm:w-1/2 w-full text-4xl">
        <p className="text-purple-400 text-lg mt-10 font-medium tracking-widest">
          HELLO, I'M
        </p>

        <h1 className="font-semibold text-4xl text-white sm:text-6xl">
          Shristi Dhungel
        </h1>

        <h2 className="text-xl sm:text-2xl text-[#C4B5FD] font-medium">
          Full Stack Developer
        </h2>

        <p className="text-lg text-[#A1A1AA] sm:text-lg landing-8">
          Hello! I am Shristi Dhungel, a passionate Full Stack Developer from
          Nepal. I work with React, JavaScript, HTML, CSS, Tailwind CSS, and
          Node.js to build modern, responsive, and user-friendly web
          applications. Some of my projects include a Personal Portfolio
          Website, To-Do App, Weather Dashboard, Landing Page Template, and AI
          Content Helper. I have also successfully deployed my portfolio project
          using Netlify. I am continuously learning and improving my skills to
          create impactful digital experiences.
        </p>

        <div className="flex gap-4 sm:mt-0 mt-4">
          <a href="./cvshristi.pdf" target="_blank" rel="noreferrer">
            <button className="flex items-center gap-2 bg-[#8B5CF6] text-white text-lg py-3 px-6 rounded-xl hover:bg-[#7C3AED] shadow-purple-500/20 transition-all duration-300 cursor-pointer">
              Download CV
            </button>
          </a>
          <Link to="/projects">
            <button className="flex items-center gap-2 bg-white text-[#C4B5FD] sm:text-lg py-3 px-6 rounded-xl border border-[#8B5CF6] hover:bg-[#17132B] transition-all cursor-pointer">
              View Project
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <h1 className="text-lg text-gray-300 font-semibold tracking-wide">
            Connect With Me
          </h1>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500/40 text-[#8B5CF6] text-xl hover:bg-[#8B5CF6] hover:text-white hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500/40 text-[#8B5CF6] text-xl hover:bg-[#8B5CF6] hover:text-white hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500/40 text-[#8B5CF6] text-xl hover:bg-[#8B5CF6] hover:text-white hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* right content  */}
      <div className="inset-0 bg-purple-600/20 rounded-full ">
        <img
          src="/photo.png"
          alt="photo"
          className="sm:h-96 sm:w-96 w-72 h-72 object-cover rounded-full border-4 border-[#8B5CF6] shadow-2xl shadow-purple-500/20 animate-wiggle "
        />
      </div>
    </div>
  );
}

export default Hero;
