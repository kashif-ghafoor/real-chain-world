import React from "react";
import SmallNavBar from "../Components/SmallNavBar";
import SingleProperty from "../Components/SingleProperty";

const Portfolio = () => {
  return (
    <>
      <div className="pl-6 bg-gray-200 ">
        <div className="absolute left-[820px] m-4">
          <SmallNavBar />
        </div>
        <div className="absolute left-[420px] top-[100px]">
          <h1 className="font-serif text-4xl font-bold">Investor Portfolio</h1>
          <div className=" m-6 flex flex-wrap gap-8 w-[90%] md:w-[1100px] xl:w-[1400px]">
            <SingleProperty buttonText="Withdraw Revenue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
