import React from "react";
import SmallNavBar from "../Components/SmallNavBar";
import SingleProperty from "../Components/SingleProperty";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-200 w-screen" style={{ width: "78%" }}>
        <div className="absolute left-[1320px] m-6">
          <SmallNavBar />
        </div>
        <div className="absolute left-[450px] top-[160px]">
          <h1 className="font-serif text-7xl font-bold">Dashboard</h1>

          <div className="m-6 flex flex-wrap gap-5 w-[90%] md:w-[1100px] xl:w-[1400px]">
            <SingleProperty buttonText="Distribute Revenue" />
            <SingleProperty buttonText="Distribute Revenue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
