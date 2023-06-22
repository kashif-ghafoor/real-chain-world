import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import React, { useState, useEffect } from "react";

const HowToTokenize = () => {
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
      <div className="bg-offwhite ">
        <NavBar />
        <div className="rounded-lg bg-white m-28 pt-32 pl-28">
          <div className="flex gap-20">
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
          <div className="font-mono pt-24 flex flex-col items-center justify-center text-center">
            <h2 className="text-21xl font-bold text-blue">How It Works</h2>
            <p className="text-5xl font-medium text-gray-500">
              Sell your property in a simple, time efficient and secure manner
            </p>
          </div>

          <div className="ml-12 m-32">
            <div className="flex gap-10">
              <img
                className="w-[600px] h-[200px] overflow-hidden"
                alt=""
                src={require("../assets/User_Verification.png")}
              />
              <div>
                <h2 className="text-17xl text-lightseagreen-100 font-semibold">
                  User Verification
                </h2>
                <p className="pt-5 text-5xl text-gray-100  w-[80%]">
                  Before using our platform, you first need to be verified and
                  approved. The entire process is completed online via the real
                  Chain world website. You will be prompted to provide or verify
                  any required information (KYC / AML), as well as make the
                  necessary acknowledgments electronically.
                </p>
                <button className="mt-8 cursor-pointer [border:none] bg-[transparent] relative w-[290px] h-[70px] shrink-0 shadow-lg">
                  <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[280px] h-[70px]" />
                  <div className="p-y-4 absolute top-[16px] left-[15px] text-5xl font-semibold text-blue text-left">
                    Begin KYC/AML Process
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-48 flex gap-10">
              <img
                className="w-[600px] h-[200px] overflow-hidden"
                alt=""
                src={require("../assets/property_submission.png")}
              />
              <div>
                <h2 className="text-17xl text-lightseagreen-100 font-semibold">
                  Property Submission
                </h2>
                <p className="pt-5 text-5xl text-gray-100  w-[80%]">
                  All submitted properties are carefully curated by our team of
                  experts. Once approved, your property (or a share of your
                  property) is tokenized making the pool of potential investors
                  global. Currently, we only accept commercial investment
                  properties. In the near future, we will allow residential
                  properties, projects and more.
                </p>
                <button className="mt-8 cursor-pointer [border:none] bg-[transparent] relative w-[290px] h-[70px] shrink-0 shadow-lg">
                  <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[290px] h-[70px]" />
                  <div className="p-y-4 absolute top-[16px] left-[15px] text-5xl font-semibold text-blue text-left">
                    View Properties for Sale
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-48 flex gap-10">
              <img
                className="w-[480px] h-[200px] overflow-hidden"
                alt=""
                src={require("../assets/track.png")}
              />
              <div>
                <h2 className="text-17xl text-lightseagreen-100 font-semibold">
                  Track The Sale
                </h2>
                <p className="pt-5 text-5xl text-gray-100  w-[80%]">
                  Whether you’re selling a small portion of your property or the
                  whole building, you can track the performance of the sale at
                  any time. We are more than happy to support you with setting
                  up your sales parameters and more before the crowd-sale can
                  start
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowToTokenize;
