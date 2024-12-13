import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import axios from "axios";

const DeletePosters = () => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios.get("https://kishan-portfolio-8byz.onrender.com/api/get-posters").then((res) => {
      console.log(res.data.result);
      setPosters(res.data.result);
    });
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://kishan-portfolio-8byz.onrender.com/api/delete-poster/${id}`)
      .then((res) => alert("Deleted Successfully"))
      .catch((err) => alert("Error, Contact Umang"));
    fetchData();
  };

  return (
    <>
      <div className="bg-[#2A2A2A] h-screen overflow-hidden ">
        <Header Title={"Posters"} />
        <div className="flex flex-col text-[#FFF477] h-full md:w-2/6 mx-auto">
          <div className="flex flex-col m-4 h-full overflow-y-auto hide-scrollbar">
            {posters.map((ele, index) => {
              return (
                <div
                  onClick={() => handleDelete(ele._id)}
                  key={ele._id}
                  className={`inline-block w-72 bg-red-500 p-8 rounded-3xl`}
                >
                  <div className="grid overflow-hidden rounded-3xl">
                    <img
                      onClick={() => handleDelete(ele._id)}
                      src={ele.posterUrl}
                      alt="Poster"
                      className="rounded-3xl object-contain"
                    />
                  </div>
                  <button className="text-red-600">DELETE</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletePosters;
