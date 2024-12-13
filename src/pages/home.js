import React, { useState } from "react";
import Profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import Contact from "../components/contact";

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const commonCardClass =
    "bg-[#FFF477] m-3 rounded-3xl grid place-content-center text-[#2A2A2A] hover:text-[#FFF477] hover:bg-black hover:scale-95 transition-all duration-500 ";
  return (
    <div className="grid grid-cols-4 justify-center items-center bg-[#2A2A2A] h-screen md:text-3xl text-lg  righteous-regular ">
      <div className="grid grid-rows-2 h-screen py-10 hover:cursor-pointer">
        <div
          className={` ${commonCardClass}`}
          onClick={() => navigate("/Projects")}
        >
          <p className="transform -rotate-90">Projects</p>
        </div>
        <div
          className={` ${commonCardClass}`}
          onClick={() => navigate("/AboutMe")}
        >
          <p className="transform -rotate-90">About Me</p>
        </div>
      </div>
      <div className="grid grid-rows-3 col-span-2 h-screen ">
        <div className="grid grid-cols-2">
          <div
            onClick={openModal}
            className={` ${commonCardClass}  hover:cursor-pointer`}
          >
            Contact
          </div>
          <a
            href="/Kishan_Godhaniya.pdf"
            download
            className={` ${commonCardClass}  hover:cursor-pointer`}
          >
            Resume
          </a>
        </div>
        <div className="px-3 bg-[#FFF477] rounded-3xl p-4 relative group border-transparent border-4 border-[#FFF477] hover:bg-black">
          <img
            src={Profile}
            alt="Profile Pic"
            className="absolute top-4 left-4 rounded-3xl w-full h-full object-cover -m-4 group-hover:opacity-50"
          />
          <div className="absolute flex justify-center items-center inset-1 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
            <div>Kishan Godhaniya</div>
          </div>
        </div>

        <div className="grid">
          <div
            className={` ${commonCardClass} text-center  hover:cursor-pointer`}
            onClick={() => navigate("/Posters")}
          >
            <p>Posters</p>
            <p>&</p>
            <p>Book Covers</p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 h-screen py-10">
        <div className={` ${commonCardClass}  hover:cursor-pointer`}>
          <p className="transform rotate-90 text-center">Design Process</p>
        </div>
        <div
          className={` ${commonCardClass}  hover:cursor-pointer`}
          onClick={() => navigate("/prototypes")}
        >
          <p className="transform rotate-90">Prototypes</p>
        </div>
      </div>
      <Contact isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
