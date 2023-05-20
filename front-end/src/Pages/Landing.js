import Hero from "../Components/Hero";
import DiscoverSection from "../Components/DiscoverSection";
import BestOpp from "../Components/BestOpp";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

function Landing() {
  return (
    <>
      <NavBar />
      <Hero />
      <DiscoverSection />
      <BestOpp />

      <section
        className=" mt-28 w-[1300px] h-[100px] text-left text-5xl text-slategray-200 "
        id="callout"
      >
        <div className="box-border h-[3px] border-t-[0.7px] border-solid border-white" />{" "}
        <div className="flex">
          <div className="mt-12 pl-24 flex-col">
            <b className="text-13xl leading-[40px] flex text-blue-for-button items-center w-[500px]">
              Real Estate is still the best investment you can make!!
            </b>
            <p className="mt-4 text-lightseagreen-100 tracking-[0.05em] font-normal flex items-center w-[600px]">
              Meet the world by investing in Real Chain World
            </p>
            <button className="mt-6 cursor-pointer [border:none] py-2 px-4 bg-blue-for-button  rounded-3xs flex flex-row items-center justify-center">
              <p className="relative text-4xl font-medium  text-white text-left">
                Meet the World
              </p>
            </button>
          </div>
          <img
            className="pl-32 m-8 w-[400px] h-[250px] object-cover"
            alt=""
            src={require("../assets/callout.png")}
          />
        </div>
      </section>
      <div
        className="pl-24 mt-80 h-[300px] text-left text-13xl text-lightseagreen-100 "
        id="info-section"
      >
        <b className="flex items-center w-[600px]">Benefits of Tokenization</b>
        <div className="text-4xl tracking-[0.03em] leading-[40px] text-gray-500 flex items-center w-[710px]">
          The tokenization of Real Estate is revolutionizing the financial
          industry and changing the way investors trade and manage assets. Until
          now, investment opportunities in the real estate sector have been
          restricted to accredited investors, real estate developers and
          businesses.
        </div>
      </div>
      <section
        className="mt-8 h-[250px] text-center text-13xl text-blue-for-button "
        id="invest-section"
      >
        <b className="flex justify-center w-[1300px]">
          How You Can Invest in Real Chain World
        </b>
        <img
          className="pt-8 ml-64 w-[800px] h-[280px] "
          alt=""
          src={require("../assets/workflow.png")}
        />
      </section>
      <Footer />
    </>
  );
}

export default Landing;
