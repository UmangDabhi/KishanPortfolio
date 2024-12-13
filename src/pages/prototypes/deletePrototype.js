import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import axios from "axios";

const DeletePrototype = () => {
  const [prototypes, setPrototypes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios.get("https://kishan-portfolio-8byz.onrender.com/api/get-prototypes").then((res) => {
      console.log(res.data.result);
      setPrototypes(res.data.result);
    });
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://kishan-portfolio-8byz.onrender.com/api/delete-prototype/${id}`)
      .then((res) => alert("Deleted Successfully"))
      .catch((err) => alert("Fuck !!! Error, Contact Umang"));
    fetchData();
  };

  return (
    <>
      <div className="bg-[#2A2A2A] h-screen overflow-hidden ">
        <Header Title={"Prototypes"} />
        <div className="flex flex-col h-full md:w-4/6 mx-auto">
          <div className="m-4  gap-5 h-full overflow-y-auto  hide-scrollbar">
            {prototypes.map((ele, index) => {
              return (
                <div
                  onClick={() => handleDelete(ele._id)}
                  className="px-3 rounded-3xl h-fit p-4 hover:scale-95 relative group border-transparent border-4 transition-all duration-300 ease-linear  "
                >
                  <video controls className="rounded-3xl ">
                    <source src={ele.prototypeUrl} />
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

export default DeletePrototype;
