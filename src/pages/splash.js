import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center bg-[#2A2A2A] h-screen inter-100">
      <img
        src={logo}
        className="transition-all delay-200 duration-1000 animate-fade-from-top"
        alt="Logo"
      />

      <h2 className="text-3xl mb-5 text-white font-sans animate-slide-in duration-1000 delay-400">
        KISHAN ATIYA GODHANIYA
      </h2>

      <button
        onClick={() => navigate("/home")}
        className="text-2xl w-52 h-12 rounded-full font-bold border bg-gradient-to-r from-yellow-200 to-white hover:bg-gradient-to-r hover:from-white hover:to-yellow-200 transition-all duration-1000 ease-in delay-700 animate-fade-from-bottom"
      >
        Let's Go
      </button>
    </div>
  );
};

export default Splash;
