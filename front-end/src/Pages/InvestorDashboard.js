import React from "react";
import SmallNavBar from "../Components/SmallNavBar";

const InvestorDashboard = () => {
  return (
    <>
      <div>
        <div className="absolute left-[1320px] m-6">
          <SmallNavBar />
        </div>
        <div className="absolute left-[600px] top-[160px]">
          <h1 className="font-serif text-7xl font-bold">Investor Dashboard</h1>
        </div>
      </div>
    </>
  );
};

export default InvestorDashboard;
