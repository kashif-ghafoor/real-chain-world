import React from "react";
import { FaGgCircle, FaRegCheckCircle } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { Link } from "react-router-dom";

function Requested({ title, status, price }) {
  return (
    <ul className="bg-lightseagreen-300 w-[1250px] h-[60px] rounded-xl flex p-4 text-5xl justify-between font-medium">
      <li className="font-semibold">{title}</li>
      <li className="pl-10">
        <Link to="/property">
          <button className="py-1 text-blue">
            <FaGgCircle className="mr-4 inline" />
            View Details
          </button>
        </Link>
      </li>
      <li className="mr-10">
        <button className="py-1 text-blue">
          <FaRegCheckCircle className="mr-2 inline" />
          {status}
        </button>
      </li>
      <li>
        <button className="py-1 text-blue">
          <IoMdPricetag className="mr-2 inline" />
          {price}
        </button>
      </li>
    </ul>
  );
}

export default Requested;
