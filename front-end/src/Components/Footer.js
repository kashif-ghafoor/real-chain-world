import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer
      className="absolute top-[3400px] left-[-7px] w-[1300px] h-[369px] text-left text-gray-100 "
      id="footer"
    >
      <div className="absolute top-[-1px] left-[0px] bg-white box-border w-[1300px] h-[369px] border-t-[1px] border-solid border-gray-600" />
      <div className="absolute top-[50px] left-[170px] ">
        <img className="h-15 w-48" src={require("../assets/logo.png")} alt="" />
      </div>

      <b className="absolute top-[49px] left-[700px] text-4xl text-lightseagreen-100">
        Investors
      </b>
      <b className="absolute top-[49px] left-[1000px] text-4xl text-lightseagreen-100">
        Sellers
      </b>
      <div className="absolute top-[110px] left-[700px] font-medium">
        Marketplace
      </div>
      <div className="absolute top-[110px] left-[1000px] font-medium">
        Tokenize Your Property
      </div>
      <div className="absolute top-[150px] left-[1000px] font-medium">
        Terms
      </div>
      <div className="absolute top-[150px] left-[700px] font-medium">
        Learn About Real Chain World
      </div>
      <div className="absolute top-[190px] left-[700px] font-medium">
        Our Team
      </div>
      <div className="absolute top-[300px] left-[42px] bg-lightseagreen-100 w-[1250px] h-[2px]" />

      <div className="absolute top-[320px] left-[500px] font-semibold">
        All Rights Reserved, 2023 © Real Chain World
      </div>
      <img
        className="absolute top-[146px] left-[240px] w-[25px] h-[25px] overflow-hidden"
        alt=""
        src="/biinstagram.svg"
      />
      <img
        className="absolute top-[148px] left-[280px] w-[25px] h-[25px] overflow-hidden"
        alt=""
        src="/bitwitter.svg"
      />
      <img
        className="absolute top-[148px] left-[320px] w-[25px] h-[25px] overflow-hidden"
        alt=""
        src="/bimedium.svg"
      />
    </footer>
  );
});

export default Footer;
