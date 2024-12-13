import React from "react";
import BackIcon from "../assets/icons/backIcon.png";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = ({ Title }) => {
  const navigate = useNavigate();
  return (
    <div className="flex p-2 justify-center relative righteous-regular tracking-tight  md:tracking-[0.7em] uppercase">
      <img
        onClick={() => navigate("/home")}
        src={BackIcon}
        alt="Back Icon"
        className=" w-8 h-8 absolute top-4 left-3 hover:cursor-pointer"
      />
      <p className="text-white font-bold md:text-5xl text-3xl  ">{Title}</p>
      <img
        onClick={() => navigate("/home")}
        src={Logo}
        alt="Back Icon"
        className=" w-16 absolute top-4 right-3 hover:cursor-pointer"
      />
    </div>
  );
};

export default Header;
