import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import axios from "axios";

const Prototypes = () => {
  const prototypes = [
    "/prototypes/prototype3.mp4",
    "/prototypes/prototype4.mp4",
    "/prototypes/prototype5.mp4",
    "/prototypes/prototype6.mp4",
    "/prototypes/prototype1.mp4",
    "/prototypes/prototype2.mp4",
  ];

  return (
    <>
      <div className="bg-[#2A2A2A] h-screen overflow-hidden ">
        <Header Title={"Prototypes"} />
        <div className="flex flex-col h-full md:w-4/6 mx-auto">
          <div className="m-4 grid gap-5 h-full overflow-y-auto  hide-scrollbar">
            {prototypes.map((ele, index) => {
              return (
                <div className="px-3 mx-auto rounded-3xl h-fit p-4 hover:scale-95 relative group border-transparent border-4 transition-all duration-300 ease-linear  ">
                  <video controls className="rounded-3xl ">
                    <source src={ele} />
                  </video>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Prototypes;
