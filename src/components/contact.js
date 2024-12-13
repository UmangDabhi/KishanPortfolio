import React from "react";
import Gmail from "../assets/icons/gmail.png";
import Instagram from "../assets/icons/instagram.png";
import LinkedIn from "../assets/icons/linkedIn.png";
import Phone from "../assets/icons/phone.png";

const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 righteous-regular ">
      <div className="bg-[#4B4B4B] rounded-lg  w-11/12 md:w-1/3 h-1/3">
        <div className="flex relative justify-center items-center p-4 ">
          <button
            onClick={onClose}
            className="text-[#FFF477] md:text-4xl text-2xl absolute top-4 left-3 "
          >
            &times;
          </button>
          <p className="text-[#FFF477]">Contact</p>
        </div>
        <div className="flex justify-between px-7 text-white md:text-2xl text-md gap-4 ">
          <a
            href="mailto:kishanmaher5678@gmail.com"
            className="flex justify-between items-center flex-col"
          >
            <img src={Gmail} alt="Gmail" />
            <span>Mail</span>
          </a>
          <a
            href="tel:7285044177"
            className="flex justify-between items-center flex-col"
          >
            <img src={Phone} alt="Phone" />
            <span>Phone</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kishanmaher9999"
            className="flex justify-between items-center flex-col"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security feature
          >
            <img src={LinkedIn} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/kishanmaher9999?igsh=cTkyaW50dTR2YW45"
            className="flex justify-between items-center flex-col"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security feature
          >
            <img src={Instagram} alt="Instagram" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;