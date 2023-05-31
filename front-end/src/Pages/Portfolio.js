import React from "react";
import SmallNavBar from "../Components/SmallNavBar";

const Portfolio = () => {
  return (
    <div className="bg-gray-200" style={{ width: "100%" }}>
      <div className="absolute left-[820px] m-4">
        <SmallNavBar />
      </div>
      <div className="absolute left-[300px]">
        <h1 className="font-serif text-4xl font-bold mt-20 ml-16">
          Investors Portfolio
        </h1>
        <div className="border-t-2 border-lightseagreen-100 mt-10 ml-16 mb-16 w-[870px] h-[300px] shadow-lg bg-white"></div>
      </div>
    </div>
  );
};

export default Portfolio;
