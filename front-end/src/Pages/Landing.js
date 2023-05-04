import { Fragment } from "react";
import Hero from "../Components/Hero";
import DiscoverSection from "../Components/DiscoverSection";
import BestOpp from "../Components/BestOpp";
import Footer from "../Components/Footer";
import NavBar from "./NavBar";

function Landing() {
  return (
    <>
      <NavBar />
      <Hero />
      <DiscoverSection />
      <BestOpp />
      <div />
      <section
        className="absolute top-[2050px] left-[0px] w-screen h-[300px] text-left text-5xl text-slategray-200 "
        id="callout"
      >
        <div className="absolute top-[0px] left-[0px] bg-white box-border w-screen h-[411px] border-t-[0.5px] border-solid border-blue-for-button" />
        <img
          className="absolute top-[38px] left-[894px] w-[330px] h-[250px] object-cover"
          alt=""
          src={require("../assets/callout.png")}
        />
        <b className="absolute top-[40px] left-[130px] text-13xl leading-[40px] flex text-blue-for-button items-center w-[600px]">
          Real Estate is still the best investment you can make!!
        </b>
        <div className="absolute top-[140px] left-[130px] tracking-[0.05em] font-medium flex items-center w-[600px]">
          Meet the world by investing in Real Chain World
        </div>

        <button className="cursor-pointer [border:none] py-3 px-5 bg-blue-for-button absolute top-[210px] left-[130px] rounded-3xs flex flex-row items-center justify-center">
          <div className="relative text-4xl font-medium  text-white text-left">
            Meet the World
          </div>
        </button>
      </section>
      <section
        className="absolute top-[2402px] left-[0px] w-screen h-[366px] text-left text-13xl text-lightseagreen-100 "
        id="info-section"
      >
        <b className="absolute top-[69px] left-[95px] flex items-center w-[600px]">
          Benefits of Tokenization
        </b>
        <div className="absolute top-[140px] left-[95px] text-4xl tracking-[0.03em] leading-[40px] text-gray-700 flex items-center w-[710px]">
          The tokenization of Real Estate is revolutionizing the financial
          industry and changing the way investors trade and manage assets. Until
          now, investment opportunities in the real estate sector have been
          restricted to accredited investors, real estate developers and
          businesses.
        </div>
      </section>
      <section
        className="absolute top-[2760px] left-[0px] w-screen  h-[488px] text-center text-13xl text-blue-for-button "
        id="invest-section"
      >
        <div className="absolute top-[0px] left-[0px] bg-white w-[700px] h-[488px]" />
        <b className="absolute top-[59px] left-[153px] flex items-center justify-center w-[1000px]">
          How You Can Invest in Real Chain World
        </b>
        <img
          className="absolute top-[140px] left-[270px] w-[800px] h-[280px] "
          alt=""
          src={require("../assets/workflow.png")}
        />
      </section>
      <Footer />
    </>
  );
}

export default Landing;
