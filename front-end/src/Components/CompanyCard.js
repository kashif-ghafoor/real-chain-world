import React from "react";

const CompanyCard = ({ companyName, description, imageSrc }) => {
  return (
    <div className="w-[350px] flex flex-col text-center justify-center items-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <img
        className="h-[200px] w-[350px] rounded-t-lg object-cover"
        alt=""
        src={imageSrc}
      />
      <div className="flex flex-col p-6">
        <h5 className="mb-2 text-9xl font-bold text-gray-100">{companyName}</h5>
        <p className="mb-4 text-center text-blue text-7xl">{description}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
