import { memo } from "react";
import { Link } from "react-router-dom";

const Footer = memo(() => {
  return (
    <footer className="mt-56 h-[360px] text-left text-gray-100 " id="footer">
      <div className="box-border h-[1px] border-t-[1px] border-solid border-gray-600" />
      <div className="flex justify-around">
        <div className="w-[200px] m-16 ml-24">
          <div>
            <img
              className="h-15 w-48"
              src={require("../assets/logo.png")}
              alt=""
            />
          </div>
          <div className="m-6 ml-10 flex justify-between w-[100px]">
            <img
              className="w-[25px] h-[25px] overflow-hidden"
              alt=""
              src="/biinstagram.svg"
            />
            <img
              className="w-[25px] h-[25px] overflow-hidden"
              alt=""
              src="/bitwitter.svg"
            />
            <img
              className=" w-[25px] h-[25px] overflow-hidden"
              alt=""
              src="/bimedium.svg"
            />
          </div>
        </div>

        <div className="flex-col m-14 ml-24">
          <b className="text-4xl text-lightseagreen-100">Investors</b>
          <Link to="/MarketPlace">
            <div className=" mt-2 font-medium">Marketplace</div>
          </Link>
          <Link to="/Tokenization">
            <div className="mt-2  font-medium">Tokenize Your Property</div>
          </Link>
          <div className="mt-2  font-medium">Terms</div>
        </div>
        <div className="flex-col m-14 ml-24">
          <b className=" text-4xl text-lightseagreen-100">Sellers</b>
          <Link to="/Learn">
            <div className="mt-2 font-medium">Learn About Real Chain World</div>
          </Link>
          <Link to="/About">
            <div className="mt-2 font-medium">Our Team</div>
          </Link>
        </div>
      </div>
      <div className="justify-center">
        <div className="m-4 bg-lightseagreen-100 w-[1250px] h-[2px]" />
        <div className="pl-28 ml-96 font-semibold ">
          All Rights Reserved, 2023 © Real Chain World
        </div>
      </div>
    </footer>
  );
});

export default Footer;
