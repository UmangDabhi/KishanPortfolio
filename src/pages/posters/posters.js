import React from "react";
import p1 from "../../assets/posters/p1.png";
import p2 from "../../assets/posters/p2.png";
import p3 from "../../assets/posters/p3.png";
import p4 from "../../assets/posters/p4.png";
import p5 from "../../assets/posters/p5.png";
import p6 from "../../assets/posters/p6.png";
import p7 from "../../assets/posters/p7.png";
import p8 from "../../assets/posters/p8.png";
import Header from "../../components/header";

const Posters = () => {
  const posters = [p1, p2, p3, p4, p5, p6, p7, p8];

  return (
    <>
      <div className="bg-[#2A2A2A] h-screen overflow-hidden ">
        <Header Title={"Posters"} />
        <div className="flex flex-col h-full md:w-2/6 mx-auto">
          <div className="flex flex-col m-4 h-full overflow-y-auto hide-scrollbar">
            {posters.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`inline-block w-72 bg-[#FFF477] p-8 rounded-3xl   ${
                    index % 2 === 0
                      ? "self-start animate-slide-left"
                      : "self-end animate-slide-right"
                  }`}
                >
                  <div className="grid overflow-hidden rounded-3xl hover:scale-[1.1] transition-all duration-300 ">
                    <img
                      src={image}
                      alt="Profile Pic"
                      className="rounded-3xl object-contain"
                    />
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

export default Posters;
