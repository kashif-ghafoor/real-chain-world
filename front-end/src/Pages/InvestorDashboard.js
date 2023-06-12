import React from "react";
import SmallNavBar from "../Components/SmallNavBar";
import SingleProperty from "../Components/SingleProperty";

const InvestorDashboard = () => {
  return (
    <>
      <div>
        <div className="absolute left-[1320px] m-6">
          <SmallNavBar />
        </div>
        <div className="absolute left-[450px] top-[160px]">
          <h1 className="font-serif text-7xl font-bold">Investor Dashboard</h1>

          <div className="m-6 flex flex-wrap gap-5 w-[90%] md:w-[1100px] xl:w-[1400px]">
            <SingleProperty buttonText="Distribute Revenue" />
            <SingleProperty buttonText="Distribute Revenue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorDashboard;
