import React from "react";
import { Link } from "react-router-dom";

const SingleProperty = ({ buttonText }) => {
  return (
    <>
      <div className="card w-full md:w-[350px] h-[450px]">
        <div className="bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.2)] w-full h-[410px] flex flex-col justify-between">
          <div>
            <img
              className="w-full h-[170px]"
              alt=""
              src={require("../assets/rectangle-10@2x.png")}
            />

            <h4 className="text-5xl md:text-5xl mt-2 pl-4 font-bold text-lightseagreen-100">
              PKR34.9 Lakh to 89.9 Lakh
            </h4>
            <p className="text-5xl md:text-5xl mt-2 pl-4 font-medium">
              30 Inlet Cove Cottage
            </p>
            <p className="text-4xl md:text-4xl mt-2 pl-4 font-light text-gray-700">
              Alexandria, Pakistan
            </p>
          </div>
          <Link to={buttonText === "View Property" ? "/property" : ""}>
            <button className="text-xl md:text-4xl font-medium text-white text-center cursor-pointer border-none ml-1 pl-4 mb-2 bg-lightseagreen-100 rounded w-full md:w-[340px] h-[50px]">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleProperty;
