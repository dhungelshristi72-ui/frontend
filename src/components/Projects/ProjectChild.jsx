import React from "react";

function ProjectChild(props) {
  return (
    <div className="bg-[#17132B] border border-[#8B5CF6]/30 rounded-2xl m-4 p-5 flex flex-col text-center item-center gap-4 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300">
   
        <img
          className="h-52 w-full object-cover rounded-xl"
          src={props.image}
          alt={props.title}
        />
        <h1 className="text-2xl front-bold text-[#C4B5FD]">{props.title}</h1>
        <p className="text-[#A1A1AA] text-base landing-7">{props.desc}</p>

        <a href={props.url}>
          <button className="cursor-pointer w-full py-3 px-5 border-none rounded-xl font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-lg shadow-purple-500/20 transition-all duration-300 ease-in-out">
            {props.button}
          </button>
        </a>
      </div>
   
  );
}

export default ProjectChild;
