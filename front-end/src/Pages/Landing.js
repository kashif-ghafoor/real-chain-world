import Hero from "../Components/Hero";
import DiscoverSection from "../Components/DiscoverSection";
import BestOpp from "../Components/BestOpp";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import React, { useState, useEffect } from "react";

function Landing() {
  const [text, setText] = useState("Property");

  useEffect(() => {
    const texts = ["House", "Apartments", "Buildings", "Land"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <div className="bg-whitesmoke flex justify-around items-center mt-16 h-[200px] pr-96  ">
        <h4 className="text-gray-500 text-7xl ">
          Real Chain World connects you
        </h4>
        <img
          className="w-[200px] h-[200px] overflow-hidden"
          alt=""
          src="/metamask.svg"
        />
      </div>
      <DiscoverSection />
      <BestOpp />

      <section className="mt-10 md:mt-28 text-center h-[450px] ">
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

      <div className="bg-whitesmoke">
        <div className="pl-40 p-32 flex gap-40">
          <div className="p-8">
            <h2 className="text-gray-700 text-21xl font-black tracking-wider">
              Tokenize your
              <br />
              <span className="text-lightseagreen-100 pr-3">{text}</span>
              <br />
              within minutes
            </h2>
            <ul className="text-4xl mt-12">
              <li className="font-semibold flex ">
                <svg
                  class="flex-shrink-0 w-10 h-10 text-lightseagreen-100 dark:text-lightseagreen-100 pr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Worldwide Liquidity
                <span className="text-gray-500 pl-3 font-normal">
                  | Tap into a global customer base
                </span>
              </li>
              <li className="font-semibold flex pt-2">
                <svg
                  class="flex-shrink-0 w-10 h-10 text-lightseagreen-100 text-lightseagreen-100 pr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Fractional Tokenization
                <span className="text-gray-500 pl-3 font-normal">
                  | Sell a small piece of your real estate
                </span>
              </li>
              <li className="font-semibold flex pt-2">
                <svg
                  class="flex-shrink-0 w-10 h-10 text-lightseagreen-100 pr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Advisory
                <span className="text-gray-500 pl-3 font-normal">
                  | Experts help you during the full process
                </span>
              </li>
              <li className="font-semibold flex pt-2">
                <svg
                  class="flex-shrink-0 w-10 h-10 text-lightseagreen-100 pr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Intuitive Interface
                <span className="text-gray-500 pl-3 font-normal">
                  | Easy participation and dividends tracking
                </span>
              </li>
            </ul>
          </div>
          <img
            className="pt-4 w-[50%] h-[520px] object-cover"
            alt=""
            src={require("../assets/tokenize-property.jpg")}
          />
        </div>
      </div>
      <div
        className="ml-12 md:pl-24  md:mt-40 h-[300px] text-left md:text-17xl text-lightseagreen-100"
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

      <section className="mt-28 text-center text-21xl font-semibold text-blue-for-button  h-[450px]">
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
