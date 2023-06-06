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

      <section className="mt-10 md:mt-28 text-center h-[120px] ">
        <div className="box-border h-[3px] border-t-[0.7px] border-solid border-offwhite " />
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-[900px] md:text-left md:pl-12 lg:pl-40">
            <b className="w-[400px]text-17xl md:text-9xl lg:text-17xl text-blue-for-button leading-tight md:leading-snug lg:leading-normal ">
              Real Estate is still the best investment you can make!!
            </b>
            <p className="mt-4 text-5xl md:text-3xl lg:text-5xl text-lightseagreen-100 tracking-[0.05em] font-normal">
              Meet the world by investing in Real Chain World
            </p>
            <button className="mt-6 py-3 px-6 bg-blue-for-button rounded-3xs flex flex-row items-center justify-center">
              <p className="text-5xl md:text-5xl font-medium text-white">
                Meet the World
              </p>
            </button>
          </div>
          <img
            className=" ml-96  w-[340px] h-[320px] object-cover"
            alt=""
            src={require("../assets/callout.png")}
          />
        </div>
      </section>

      <div
        className="ml-12 md:pl-24 mt-10 md:mt-80 h-[300px] text-left md:text-17xl text-lightseagreen-100"
        id="info-section"
      >
        <b className="flex items-center w-[90%] md:w-[600px]">
          Benefits of Tokenization
        </b>
        <div className="pt-4 text-5xl md:text-5xl tracking-[0.03em] leading-[1.5] md:leading-[40px] text-gray-500 flex items-center w-[50%]">
          The tokenization of Real Estate is revolutionizing the financial
          industry and changing the way investors trade and manage assets. Until
          now, investment opportunities in the real estate sector have been
          restricted to accredited investors, real estate developers and
          businesses.
        </div>
      </div>

      <section className="mt-8 text-center text-21xl font-semibold text-blue-for-button  h-[290px]">
        <div className="container mx-auto">
          <h2 className="mb-8">How You Can Invest in Real Chain World</h2>
          <img
            className="w-full max-w-[800px] mx-auto"
            alt=""
            src={require("../assets/workflow.png")}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Landing;
