import { useCallback } from "react";
import OurListing from "../components/OurListing";
import Footer2 from "../components/Footer2";
import NavBar2 from "../components/NavBar2";
import { useNavigate } from "react-router-dom";

const MarketPlace = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[3866px] overflow-hidden">
      <OurListing />
      <section
        className="absolute top-[2797px] left-[167px] flex flex-col items-start justify-start gap-[36px] text-left text-13xl text-gray-100 font-h4"
        id="callout"
      >
        <div className="relative font-semibold">
          Have a property to list or project to fund?
        </div>
        <div className="relative rounded-xl bg-lightseagreen-100 w-[120px] h-2.5 shrink-0" />
        <div className="relative text-5xl font-medium">
          We're eager to hear from you, contact us today so we can discuss it
          further
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[378px] h-[83px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-blue-for-button w-[378px] h-[83px]" />
          <div className="absolute top-[25px] left-[32px] text-9xl font-semibold font-h4 text-white text-left">
            Tokenize your property
          </div>
        </button>
      </section>
      <footer className="absolute top-[3396px] left-[-7px] w-[1922px] h-[470px] text-left text-5xl text-gray-100 font-h4">
        <Footer2
          rectangle68Top="-1px"
          rectangle68BorderRadius="unset"
          rectangle68BoxShadow="unset"
          rectangle68Width="1922px"
          rectangle68Height="471px"
          rectangle68BorderTop="1px solid rgba(43, 40, 51, 0.2)"
          rectangle68BoxSizing="border-box"
        />
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
          src="/biinstagram2.svg"
        />
        <img
          className="absolute top-[184px] left-[265px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/bitwitter2.svg"
        />
        <img
          className="absolute top-[186px] left-[340px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/bimedium2.svg"
        />
      </footer>
      <header
        className="absolute top-[0px] left-[0px] w-[1920px] h-[148px] text-left text-5xl text-gray-700 font-h2"
        id="nav-bar"
      >
        <NavBar2
          rectangle29="/rectangle-11.svg"
          rectangle29Height="148px"
          rectangle29ObjectFit="unset"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[72px] left-[413px] flex flex-row items-end justify-center">
          <b className="relative text-5xl font-h2 text-lightseagreen-100 text-left">
            Marketplace
          </b>
        </button>
        <div className="absolute top-[72px] left-[614px] font-semibold">
          Tokenize Your Real Estate
        </div>
        <div className="absolute top-[72px] left-[984px] font-semibold">
          About
        </div>
        <div className="absolute top-[72px] left-[1107px] font-semibold">
          Learn
        </div>
        <button
          className="cursor-pointer [border:none] py-[18px] px-[57px] bg-blue-for-button absolute top-[56px] left-[1593px] rounded-3xs flex flex-row items-center justify-center"
          onClick={onFrameButton1Click}
        >
          <b className="relative text-5xl font-h2 text-white text-left">
            Sign In
          </b>
        </button>
        <div className="absolute top-[72px] left-[118px] font-semibold text-gray-100">
          LOGO
        </div>
      </header>
    </div>
  );
};

export default MarketPlace;
