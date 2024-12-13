import React from "react";
import Header from "../components/header";
import AboutImage from "../assets/about.png";

const About = () => {
  return (
    <>
      <div className="bg-[#2A2A2A] h-screen righteous-regular">
        <Header Title={"About Me"} />
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center px-3 h-full overflow-y-scroll hide-scrollbar">
            <img
              src={AboutImage}
              alt="About Image"
              className="rounded-3xl md:w-auto w-52"
            />
            <p className="flex-grow text-white text-lg md:text-4xl m-4 text-center ">
              "Hi, I am Kishan Godhaniya, a versatile UI/UX Designer, IT
              student, and creative professional with a passion for designing
              user-friendly digital experiences. Beyond interfaces, I specialize
              in crafting impactful posters and book covers, merging visual
              appeal with meaningful storytelling. My work focuses on blending
              functionality with aesthetics, ensuring that every design is not
              only attractive but also practical. I am constantly driven to
              explore new creative avenues, learn, and deliver designs that
              leave a lasting impression."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
