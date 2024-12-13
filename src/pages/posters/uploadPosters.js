import React from "react";
import Header from "../../components/header";
import axios from "axios";

const UploadPosters = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios
      .post("https://kishan-portfolio-8byz.onrender.com/api/upload-poster", formData, {})
      .then((res) => alert("Uploaded Successfully"))
      .catch((err) => alert(" Fuck Error, Contact Umang"));
  };
  return (
    <>
      <div className="bg-[#2A2A2A] h-screen overflow-hidden ">
        <Header Title={"Posters"} />
        <div className="flex flex-col text-[#FFF477] h-full amd:w-2/6 mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="poster" className=" font-semibold">
              Poster
            </label>
            <input
              type="file"
              id="poster"
              name="file"
              required
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadPosters;
