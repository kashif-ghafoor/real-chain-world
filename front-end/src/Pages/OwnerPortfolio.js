import React from "react";
import SmallNavBar from "../Components/SmallNavBar";
import SingleProperty from "../Components/SingleProperty";

const OwnerPortfolio = () => {
  return (
    <>
      <div>
        <div className="absolute left-[1420px] m-6">
          <SmallNavBar />
        </div>
        <div className="absolute left-[600px] top-[140px]">
          <h1 className="font-serif text-7xl font-bold">Owner Portfolio</h1>
          <div className=" m-6 flex flex-wrap gap-8 w-[90%] md:w-[1100px] xl:w-[1400px]">
            <SingleProperty buttonText="Withdraw Revenue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerPortfolio;
