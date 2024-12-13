import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";

const Projects = () => {
  const projects = [
    {
      title: "Plantify",
      projectUrls: [
        "/projects/plantify/plantify1.jpg",
        "/projects/plantify/plantify2.jpg",
        "/projects/plantify/plantify3.jpg",
        "/projects/plantify/plantify4.jpg",
      ],
    },
    {
      title: "Runways",
      projectUrls: [
        "/projects/runways/runway1.jpg",
        "/projects/runways/runway2.jpg",
        "/projects/runways/runway3.jpg",
        "/projects/runways/runway4.jpg",
        "/projects/runways/runway5.jpg",
        "/projects/runways/runway6.jpg",
      ],
    },
    {
      title: "Tata Safari",
      projectUrls: [
        "/projects/tata_safari/ts1.jpg",
        "/projects/tata_safari/ts2.jpg",
        "/projects/tata_safari/ts3.jpg",
        "/projects/tata_safari/ts4.jpg",
      ],
    },
    {
      title: "The Coffee Station",
      projectUrls: [
        "/projects/the_coffee_station/tcs1.jpg",
        "/projects/the_coffee_station/tcs2.jpg",
        "/projects/the_coffee_station/tcs3.jpg",
        "/projects/the_coffee_station/tcs4.jpg",
        "/projects/the_coffee_station/tcs5.jpg",
        "/projects/the_coffee_station/tcs6.jpg",
      ],
    },
    {
      title: "Gujarat Tourism",
      projectUrls: [
        "/projects/gujarat_tourism/gt1.jpg",
        "/projects/gujarat_tourism/gt2.jpg",
      ],
    },
    {
      title: "Flappy Bird",
      projectUrls: [
        "/projects/flappy_bird/fp1.jpg",
        "/projects/flappy_bird/fp2.jpg",
        "/projects/flappy_bird/fp3.jpg",
        "/projects/flappy_bird/fp4.jpg",
        "/projects/flappy_bird/fp5.jpg",
        "/projects/flappy_bird/fp6.jpg",
        "/projects/flappy_bird/fp7.jpg",
      ],
    },
    {
      title: "Movie",
      projectUrls: [
        "/projects/movie/m1.jpg",
        "/projects/movie/m2.jpg",
        "/projects/movie/m3.jpg",
        "/projects/movie/m4.jpg",
        "/projects/movie/m5.jpg",
      ],
    },
  ];

  const navigate = useNavigate();
  const navigateToDetails = (project) => {
    navigate("/project/details", { state: project });
  };
  return (
    <>
      <div className="bg-[#2A2A2A] h-screen overflow-hidden ">
        <Header Title={"Projects"} />
        <div className="flex flex-col h-full md:w-4/6 mx-auto">
          <div className="grid m-4 gap-5 h-full overflow-y-auto hide-scrollbar">
            {projects.map((ele, index) => {
              return (
                <div
                  className="px-3 rounded-3xl h-72 p-4 relative group border-transparent border-4 hover:cursor-pointer"
                  onClick={() => navigateToDetails(ele)}
                >
                  <img
                    src={
                      ele?.projectUrls?.length
                        ? ele.projectUrls[
                            Math.floor(
                              Math.random() * (ele.projectUrls.length - 1)
                            )
                          ]
                        : ele.projectUrls
                    }
                    alt="Profile Pic"
                    className="absolute top-4 left-4  rounded-3xl w-full h-full object-cover -m-4 group-hover:opacity-50"
                  />
                  <div className="absolute flex justify-center items-center inset-1 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                    <div>{ele.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
