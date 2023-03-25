import { useCallback } from "react";
import DiscoverSection from "../components/DiscoverSection";
import Footer from "../components/Footer";
import PropertyComp2 from "../components/PropertyComp2";
import PropertyComp3 from "../components/PropertyComp3";
import { useNavigate } from "react-router-dom";
import Footer2 from "../components/Footer2";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";

const LandingPage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onViewProperty1Click = useCallback(() => {
    navigate("/property-page");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[6281px] overflow-hidden">
      <DiscoverSection />
      <section
        className="absolute top-[3659px] left-[0px] w-[1926px] h-[611px] text-left text-9xl text-slategray-200 font-h4"
        id="callout"
      >
        <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1926px] h-[611px] border-t-[0.5px] border-solid border-blue-for-button" />
        <img
          className="absolute top-[38px] left-[1194px] w-[597px] h-[497px] object-cover"
          alt=""
          src="/design-1@2x.png"
        />
        <div className="absolute top-[234px] left-[184px] tracking-[0.05em] font-semibold flex items-center w-[877px]">
          Meet the world by investing in Real Chain World
        </div>
        <b className="absolute top-[63px] left-[184px] text-29xl leading-[70px] flex text-blue-for-button items-center w-[973px]">
          Real estate is still the best investment you can make!!
        </b>
        <button className="cursor-pointer [border:none] py-6 px-8 bg-blue-for-button absolute top-[315px] left-[184px] rounded-3xs flex flex-row items-center justify-center">
          <div className="relative text-9xl font-semibold font-h4 text-white text-left">
            Meet the World
          </div>
        </button>
      </section>
      <Footer />
      <section
        className="absolute top-[4792px] left-[-7px] w-[1927px] h-[788px] text-center text-29xl text-blue-for-button font-h4"
        id="invest-section"
      >
        <div className="absolute top-[0px] left-[0px] bg-white w-[1927px] h-[788px]" />
        <b className="absolute top-[69px] left-[493px] flex items-center justify-center w-[947px]">
          How You Can Invest in Real Chain World
        </b>
        <img
          className="absolute top-[173px] left-[315px] w-[1406px] h-[467px] object-cover"
          alt=""
          src="/picture1-1@2x.png"
        />
      </section>
      <section
        className="absolute top-[2336px] left-[108px] w-[1683px] h-[1114px] text-left text-29xl text-lightseagreen-100 font-h4"
        id="best-opportunties"
      >
        <b className="absolute top-[0px] left-[38px] tracking-[-0.02em]">
          Best Opportunities
        </b>
        <PropertyComp2 />
        <PropertyComp3 />
        <div className="absolute top-[90px] left-[38px] text-9xl font-medium text-gray-700">
          Amet minim mollit non deserunt ullamco est sit aliostrud amet.
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1080px] left-[739px] flex flex-row items-center justify-center"
          onClick={onFrameButtonClick}
        >
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-9xl tracking-[0.05em] font-semibold font-h4 text-lightslategray text-left inline-block">
            See More
          </button>
        </button>
        <article
          className="absolute top-[198px] left-[0px] w-[531px] h-[812px] text-left text-9xl text-black font-h4"
          id="p1"
        >
          <Footer2 />
          <div className="absolute top-[308px] left-[42px] text-13xl font-medium">
            Bosten, Heights
          </div>
          <div className="absolute top-[360px] left-[42px] text-5xl text-gray-700">
            Alexandria, Pakistan
          </div>
          <div className="absolute top-[612px] left-[calc(50%_-_223.5px)] font-semibold text-blue-for-button">{`0 Investors   `}</div>
          <div className="absolute top-[439px] left-[calc(50%_-_223.5px)] font-semibold text-gray-700">{`Rate Per Token:   `}</div>
          <div className="absolute top-[494px] left-[calc(50%_-_223.5px)] font-semibold text-gray-700">{`Available Token:   `}</div>
          <div className="absolute top-[439px] left-[405px]">{`50 ETH `}</div>
          <div className="absolute top-[494px] left-[469px]">{`25 `}</div>
          <button
            className="cursor-pointer [border:none] py-[27px] px-[163px] bg-lightseagreen-100 absolute top-[724px] left-[0px] rounded-3xs flex flex-row items-center justify-center"
            onClick={onViewProperty1Click}
          >
            <div className="relative text-9xl font-semibold font-h4 text-white text-left">{`View Property   `}</div>
          </button>
          <img
            className="absolute top-[0px] left-[38px] rounded-mini w-[467px] h-[287px] object-cover"
            alt=""
            src="/rectangle-7@2x.png"
          />
        </article>
      </section>
      <section
        className="absolute top-[4232px] left-[0px] w-[1920px] h-[466px] text-left text-29xl text-lightseagreen-100 font-h4"
        id="info-section"
      >
        <b className="absolute top-[69px] left-[146px] flex items-center w-[729px]">
          Benefits of Tokenization
        </b>
        <div className="absolute top-[147px] left-[146px] text-9xl tracking-[0.03em] leading-[60px] text-gray-700 flex items-center w-[1048px]">
          The tokenization of Real Estate is revolutionizing the financial
          industry and changing the way investors trade and manage assets. Until
          now, investment opportunities in the real estate sector have been
          restricted to accredited investors, real estate developers and
          businesses
        </div>
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[1920px] h-[466px]" />
      </section>
      <HeroSection />
      <NavBar />
    </div>
  );
};

export default LandingPage;
