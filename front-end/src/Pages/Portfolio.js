import React from "react";
import SmallNavBar from "../Components/SmallNavBar";
import SingleProperty from "../Components/SingleProperty";

const Profile = () => {
  return (
    <>
      <div className="bg-gray-200 w-screen">
        <div className="absolute left-[820px] m-4">
          <SmallNavBar />
        </div>
        <div className="absolute left-[360px] top-[100px]">
          <h1 className="font-serif text-4xl font-bold">Investor Portfolio</h1>
          <div className="pt-4">
            <SingleProperty buttonText="Withdraw Revenue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
