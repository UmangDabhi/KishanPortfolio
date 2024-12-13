import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import axios from "axios";

const DeleteProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios.get("https://kishan-portfolio-8byz.onrender.com/api/get-projects").then((res) => {
      console.log(res.data.result);
      setProjects(res.data.result);
    });
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://kishan-portfolio-8byz.onrender.com/api/delete-project/${id}`)
      .then((res) => alert("Deleted Successfully"))
      .catch((err) => alert("Error, Contact Umang"));
    fetchData();
  };

  return (
    <>
      <div className="bg-[#2A2A2A] h-screen overflow-hidden ">
        <Header Title={"Projects"} />
        <div className="flex flex-col text-[#FFF477] h-full md:w-2/6 mx-auto">
          <div className="flex flex-col m-4 h-full overflow-y-auto hide-scrollbar">
            {projects.map((ele, index) => {
              return (
                <div
                  onClick={() => handleDelete(ele._id)}
                  key={ele._id}
                  className={`inline-block w-72 bg-red-500 p-8 rounded-3xl`}
                >
                  <div className="grid overflow-hidden rounded-3xl">
                    <img
                      onClick={() => handleDelete(ele._id)}
                      src={ele.projectUrl[0]}
                      alt="Project"
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

export default DeleteProjects;
