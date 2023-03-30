import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer
      className="absolute top-[5792px] left-[-7px] w-[1922px] h-[470px] text-left text-5xl text-gray-100 font-h4"
      id="footer"
    >
      <div className="absolute top-[-1px] left-[0px] bg-white box-border w-[1922px] h-[471px] border-t-[1px] border-solid border-gray-600" />
      <div className="absolute top-[90px] left-[208px] text-13xl font-semibold">
        LOGO
      </div>
      <b className="absolute top-[59px] left-[1453px] text-13xl text-lightseagreen-100">
        Sellers
      </b>
      <b className="absolute top-[59px] left-[905px] text-13xl text-lightseagreen-100">
        Investors
      </b>
      <div className="absolute top-[134px] left-[906px] font-medium">
        Marketplace
      </div>
      <div className="absolute top-[134px] left-[1453px] font-medium">
        Tokenize Your Property
      </div>
      <div className="absolute top-[202px] left-[1453px] font-medium">
        Terms
      </div>
      <div className="absolute top-[199px] left-[906px] font-medium">
        Learn About Real Chain World
      </div>
      <div className="absolute top-[264px] left-[905px] font-medium">
        Our Team
      </div>
      <div className="absolute top-[374px] left-[42px] bg-lightseagreen-100 w-[1785px] h-[3px]" />
      <div className="absolute top-[402px] left-[969px] text-11xl font-material-icons text-black text-center">
        copyright
      </div>
      <div className="absolute top-[404px] left-[657px] font-semibold">
        All Rights Reserved, 2023 Real Chain World
      </div>
      <img
        className="absolute top-[184px] left-[190px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/biinstagram.svg"
      />
      <img
        className="absolute top-[184px] left-[265px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/bitwitter.svg"
      />
      <img
        className="absolute top-[186px] left-[340px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/bimedium.svg"
      />
    </footer>
  );
});

export default Footer;
