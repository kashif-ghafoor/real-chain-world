import React from "react";
import SmallNavBar from "../Components/SmallNavBar";
import SingleProperty from "../Components/SingleProperty";

const CompanyDashboard = () => {
  return (
    <>
      <div>
        <div className="absolute left-[1320px] m-6">
          <SmallNavBar />
        </div>
        <div className="absolute left-[500px] top-[160px]">
          <h1 className="font-sans text-gray-500 text-17xl font-bold">
            Dashboard
          </h1>

          <div className="m-6 flex flex-wrap gap-5 w-[90%] md:w-[1100px] xl:w-[1400px]">
            <SingleProperty buttonText="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDashboard;
