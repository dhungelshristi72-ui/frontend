import { Projects } from "../../constants/ProjectsDatas";
import ProjectChild from "./ProjectChild";

function Projectparent() {
  return (
    <div className="bg-[#0B0B18] text-white">
      <h1 className="pt-25 text-center uppercase text-xl  sm:text-4xl font-bold text-[#A78BFA] mb-4">
        My Projects
      </h1>
      <div className="grid grid-cols-2 lg:grid-col-3 gap-6 max-w-7xl mx-auto border border-gray-600 m-5 p-4 ">
        {Projects.map((proj) => (
          <ProjectChild
            key={proj.id}
            image={proj.img}
            title={proj.title}
            desc={proj.description}
            url={proj.url}
            button={proj.button}
          />
        ))}
      </div>
    </div>
  );
}

export default Projectparent;
