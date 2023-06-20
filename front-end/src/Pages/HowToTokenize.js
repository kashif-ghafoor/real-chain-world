import NavBar from "../Components/NavBar";
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
        <div className="rounded-lg flex gap-20 bg-white m-28 pt-32 pl-28">
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
    </>
  );
};

export default HowToTokenize;
