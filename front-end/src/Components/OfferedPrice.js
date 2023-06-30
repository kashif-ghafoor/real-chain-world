import React from "react";
import { FaGgCircle, FaRegCheckCircle } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";

function OfferedPrice({ title, company, price, button }) {
  return (
    <ul className="w-[1050px] h-[40px] rounded flex p-2 text-5xl justify-between font-medium ">
      <li className="text-white font-semibold">{title}</li>
      <li>
        <button className="py-1 text-white">
          <FaGgCircle className="mr-4 inline" />
          {company}
        </button>
      </li>

      <li>
        <button className="py-1 text-white">
          <IoMdPricetag className="mr-2 inline" />
          {price}
        </button>
      </li>
      <li className="mr-4">
        <button className="bg-white px-5 py-2 text-lightseagreen-100 rounded">
          <FaRegCheckCircle className="mr-2 inline" />
          {button}
        </button>
      </li>
    </ul>
  );
}

export default OfferedPrice;
