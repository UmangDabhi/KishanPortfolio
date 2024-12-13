import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const [project, setProject] = useState(location.state);
  console.log(location.state);
  return (
    <>
      <div className="bg-[#2A2A2A] h-screen overflow-hidden ">
        <Header Title={project.title} />
        <div className="flex flex-col h-full md:w-4/6 mx-auto">
          <div className="grid grid-cols-2 m-4 gap-3 h-full overflow-y-auto hide-scrollbar">
            {project.projectUrls.map((ele, index) => {
              return (
                <div
                  key={ele._id}
                  className={`${
                    index % 3 === 0 ? "col-span-2" : "col-span-2 md:col-span-1"
                  } px-3 rounded-3xl h-72 p-4 relative border-transparent border-4 `}
                >
                  <img
                    src={ele}
                    alt="Profile Pic"
                    className={`absolute top-4 left-4 rounded-3xl w-full h-full object-cover -m-4 `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
