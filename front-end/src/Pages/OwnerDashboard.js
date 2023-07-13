import React from "react";
import SmallNavBar from "../Components/SmallNavBar";
import SingleProperty from "../Components/SingleProperty";
import OfferedPrice from "../Components/OfferedPrice";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="absolute left-[1320px] m-6">
          <SmallNavBar />
        </div>
        <div className="absolute left-[600px] top-[160px]">
          <h1 className="font-serif text-7xl font-bold">Dashboard</h1>

          <div className="m-6 flex flex-wrap gap-5 w-[90%] md:w-[1100px] xl:w-[1400px]">
            <SingleProperty buttonText="Distribute Revenue" />
            <SingleProperty buttonText="Distribute Revenue" />
          </div>
        </div>

        {/* companies offered prices for property */}
        <div className="absolute left-[600px] top-[750px] pb-32">
          <div className="rounded-lg shadow-lg bg-lightseagreen-100 p-10 mt-5 flex flex-wrap gap-8 w-[1000px] ">
            <OfferedPrice
              title="Property 1"
              company="Trust Estate"
              price="800 ETH"
              button="Accept"
            />
            <OfferedPrice
              title="Property 1"
              company="Company 5"
              price="7000 ETH"
              button="Accept"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
