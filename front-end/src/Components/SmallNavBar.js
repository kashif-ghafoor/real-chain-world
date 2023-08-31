import React from "react";
import { Link } from "react-router-dom";

const SmallNavBar = () => {
  return (
    <div>
      <ul className="text-4xl flex font-semibold">
        <Link to="/marketplace">
          <li>Marketplace </li>
        </Link>
        <Link to="/tokenization">
          <li className="pl-6">Tokenize your Real Estate </li>
        </Link>
        <Link to="/">
          <button className="ml-8 bg-lightseagreen-100 w-[100px] h-[50px]">
            <li className=" text-white">Logout </li>
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default SmallNavBar;
