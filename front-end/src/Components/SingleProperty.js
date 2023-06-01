import React from "react";
import { Link } from "react-router-dom";

const SingleProperty = ({ buttonText }) => {
  return (
    <>
      <card className="w-[300px] h-[380px]">
        <img
          className="w-[300px] h-[170px]"
          alt=""
          src={require("../assets//rectangle-10@2x.png")}
        />
        <div className="bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.2)] w-[300px] h-[200px]">
          <h4 className=" text-4xl mt-2 pl-4 font-bold text-lightseagreen-100">
            PKR34.9 Lakh to 89.9 Lakh
          </h4>
          <p className=" text-4xl mt-2 pl-4 font-medium">
            30 Inlet Cove Cottage
          </p>
          <p className=" text-3xl mt-2 pl-4 font-light text-gray-700">
            Alexandria, Pakistan
          </p>
          <Link to={buttonText === "View Property" ? "/property" : ""}>
            <button className="text-4xl font-medium text-white text-center cursor-pointer [border:none] mt-8 ml-1 pl-4 bg-lightseagreen-100 rounded w-[290px] h-[50px]">
              {buttonText}
            </button>
          </Link>
        </div>
      </card>
    </>
  );
};

export default SingleProperty;
