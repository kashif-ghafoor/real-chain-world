import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-5xl bg-gray-200 mt-8 md:mt-56 h-[400px] text-left text-gray-100 "
      id="footer"
    >
      <div className="box-border h-[1px] border-t-[1px] border-solid border-gray-600" />
      <div className="flex flex-col md:flex-row justify-around">
        <div className="w-[200px] m-4 md:m-16">
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
              className="w-[40px] h-[25px] overflow-hidden"
              alt=""
              src="/bitwitter.svg"
            />
            <img
              className="w-[25px] h-[25px] overflow-hidden"
              alt=""
              src="/bimedium.svg"
            />
          </div>
        </div>
        <div className="flex-col m-4 md:m-14 ">
          <p className="text-7xl font-bold text-lightseagreen-100">Support</p>
          <p className="mt-2 text-gray-500">Contact Us</p>
          <p className="mt-2 text-gray-500">FAQ's</p>
          <p className="mt-2 text-gray-500">Privacy Policy</p>
          <p className="mt-2 text-gray-500">Terms and Conditions</p>
        </div>
        <div className="flex-col m-4 md:m-14">
          <p className="text-7xl font-bold  text-lightseagreen-100">
            Investors
          </p>
          <Link to="/MarketPlace">
            <div className="mt-2 text-gray-500">Marketplace</div>
          </Link>
          <Link to="/Tokenization">
            <div className="mt-2 text-gray-500">Tokenize Your Property</div>
          </Link>
          <div className="mt-2 text-gray-500">Platform</div>
        </div>
        <div className="flex-col m-4 md:m-14 ">
          <p className="text-7xl font-bold text-lightseagreen-100">Sellers</p>
          <Link to="/Learn">
            <div className="mt-2 text-gray-500">
              Learn About Real Chain World
            </div>
          </Link>
          <Link to="/About">
            <div className="mt-2 text-gray-500">Our Team</div>
          </Link>
          <Link to="/About">
            <div className="mt-2 text-gray-500">About Us</div>
          </Link>
        </div>
      </div>
      <div className=" justify-center">
        <div className="m-4 bg-lightseagreen-100 w-[98%] md:w-[96%] h-[2px]" />

        <div className="pb-4 text-4xl text-gray-500 text-center">
          All Rights Reserved, 2023 © Real Chain World
        </div>
      </div>
    </footer>
  );
};

export default Footer;
