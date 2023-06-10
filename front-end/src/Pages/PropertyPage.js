import React, { useState, useEffect, useRef } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Photos from "../Components/Photos";

import {
  FaHandHoldingUsd,
  FaImages,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const PropertyPage = () => {
  // Data for table - overiew section
  const data = [
    { "Total Tokens": "15" },
    { "Available Tokens": "10" },
    { "Total Investment": "$2000" },
    { Investors: "David" },
    { "Revenue Type": "Rent" },
    { Area: "25" },
    { "Full Address": "2972 Westheimer Rd. Santa Ana, Illinois 85486" },
    { Floors: 3 },
    { Construction_Year: "3" },
    { Property_Type: "Commercial" },
    { City: "Lahore" },
    { Owner: 1 },
    { Shares: 5 },
  ];

  //documents
  const documents = [
    { name: "Document 1", url: "/path/to/document1.pdf" },
    { name: "Document 2", url: "/path/to/document2.pdf" },
    { name: "Document 3", url: "/path/to/document3.pdf" },
    { name: "Document 4", url: "/path/to/document4.pdf" },
  ];

  // UseRef for scrolling to different sections
  const aboutRef = useRef(null);
  const overviewRef = useRef(null);
  const locationRef = useRef(null);
  const photosRef = useRef(null);
  const holdersRef = useRef(null);
  const docsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // for shares - share holders section
  const [bars, setBars] = useState([]);
  useEffect(() => {
    const updatedBars = generateBars(6);
    setBars(updatedBars);
  }, []);

  const generateBars = (value) => {
    const generatedBars = [];
    const userList = [
      "John",
      "Ali",
      "Nabeel Ahmed",
      "Emily End",
      "David",
      "Sarah",
    ];

    for (let i = 0; i < value; i++) {
      generatedBars.push({
        id: i,
        label: `Offer at 0.0${i + 1} ETH`,
        amount: Math.floor(Math.random() * 100) + 5,
        user: `${userList[i]}`,
        bid: `Bid`,
      });
    }
    return generatedBars;
  };

  // fundraising and form
  const statusText = "Fundraising Initiated";
  const isFundraisingCompleted = statusText === "Fundraising Initiated";

  return (
    <>
      {/* Navbar component */}
      <NavBar />
      <div className="h-[405px] text-left text-17xl text-lightseagreen-100 font-h2">
        <img
          className="w-screen h-[400px] object-cover"
          alt=""
          src={require("../assets/hero1.jpg")}
        />

        <p className="absolute top-[410px] left-[100px] text-17xl tracking-[-0.02em] text-white font-bold w-[450px]">
          30 Inlet Cove Cottage
        </p>
        <p className="absolute top-[460px] left-[100px] text-5xl tracking-[-0.02em] text-white font-normal w-[700px]">
          2972 Westheimer Rd. Santa Ana, Illinois 85486
        </p>
      </div>

      {/* button bar below image */}
      <div className="h-[70px] bg-offwhite">
        <div className="ml-16 flex justify-left p-1 text-4xl ">
          <button
            className="ml-2 rounded  font-medium w-[120px] h-12 text-lightseagreen-100"
            onClick={() => scrollToSection(photosRef)}
          >
            <FaImages className="mr-2 inline" />
            Photos
          </button>
          <button
            className=" ml-2 rounded font-medium w-[120px] h-12 text-lightseagreen-100"
            onClick={() => scrollToSection(overviewRef)}
          >
            <FaInfoCircle className="mr-2 inline" />
            Overview
          </button>
          <button
            className=" ml-2 rounded  font-medium w-[120px] h-12 text-lightseagreen-100"
            onClick={() => scrollToSection(aboutRef)}
          >
            <FaUser className="mr-2 inline" />
            About
          </button>
          <button
            className=" ml-2 rounded  font-medium w-[120px] h-12 text-lightseagreen-100"
            onClick={() => scrollToSection(docsRef)}
          >
            <FontAwesomeIcon icon={faFile} className="mr-2 inline" />
            Docs
          </button>
          {/* <button
            className="ml-2 rounded  font-medium w-[120px] h-12 text-lightseagreen-100 inline"
            onClick={() => scrollToSection(docsRef)}
          >
            <FontAwesomeIcon
              icon={faFile}
              className="text-lightseagreen-100 w-[15px] h-[15px] mr-2 mt-2  
              "
            />
            Documents
          </button> */}
          <button
            className="ml-4 rounded  font-medium w-[120px] h-12 text-lightseagreen-100"
            onClick={() => scrollToSection(locationRef)}
          >
            <FaMapMarkerAlt className="mr-2 inline" />
            Location
          </button>
          <button
            className="ml-2 rounded font-medium w-[120px] h-12 text-lightseagreen-100"
            onClick={() => scrollToSection(holdersRef)}
          >
            <FaHandHoldingUsd className="mr-2 inline" />
            Holders
          </button>
        </div>
      </div>

      <div
        id="photos"
        className="ml-16 mt-2 flex justify-around"
        ref={photosRef}
      >
        {/* photos section  */}
        <Photos className="ml-6" />
        {/* Investor callout section */}
        <div className="p-10 bg-lightseagreen-100 mt-12 w-[480px] h-[260px] rounded-xl">
          <h1 className="ml-8 text-11xl text-white font-semibold">
            Want to invest in project
          </h1>
          <h1 className="mt-2 text-5xl text-white ">
            Join other Investors by buying tokens
          </h1>

          <button className="rounded ml-24 mt-6 text-7xl font-medium w-[180px] h-[60px] bg-offwhite ">
            Invest
          </button>
        </div>
      </div>

      {/* overview section */}
      <div id="overview" className="mt-40 ml-32 h-[700px] " ref={overviewRef}>
        <h1 className="font-semibold text-7xl  text-gray-700">
          Property Overview
        </h1>
        <table className="w-[1200px] h-[300px] bg-white text-4xl">
          <thead className="bg-lightseagreen-100 h-[45px]">
            <tr className="text-white  font-medium">
              <th colSpan="2">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="h-[45px] border-b-2 border-lightseagreen-200"
              >
                <td className="pr-96 font-medium">{Object.keys(item)[0]}</td>
                <td>{item[Object.keys(item)[0]]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* About section */}
      <div
        id="about"
        className="w-[1600px] ml-32   mt-16 flex justify-between "
        ref={aboutRef}
      >
        <div>
          <h1 className="font-semibold text-7xl text-gray-700">
            About the Property
          </h1>
          <p className="w-[800px] mt-4 text-4xl text-gray-700 leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. met minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet. met minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            <br />
            <br />
            Exercitation veniam consequat sunt nostrud amet met minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet
            <br />
            <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. met minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet. met minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        {/* Project status  */}
        <div>
          <div className="w-[430px] ml-4 h-[50px] text-5xl  pt-2 text-blue font-bold bg-white border-2 border-blue flex justify-center">
            {statusText}
          </div>

          {/* The form is only displayed, if the statusText is equal to funraising inititated  */}
          {isFundraisingCompleted && (
            // Bidding form
            <div className="mt-6 ml-4 w-[430px] h-[460px] shadow-lg bg-white border-b-2 border-blue">
              <div className=" rounded h-[100px] bg-blue items-center justify-center text-white">
                <h1 className="pt-4 text-4xl font-semibold text-center">
                  Make an offer, bid in an auction
                </h1>
                <p className="text-center">
                  Submit your offers in a secure, trusted environment.
                </p>
              </div>
              <form className="ml-8 mt-6 mr-14">
                <h2 className="text-3xl font-bold mb-6">Bidding Offer</h2>
                <div className="mb-6">
                  <div>
                    <label htmlFor="bidAmount" className="block text-lg mb-2">
                      Bid Amount:
                    </label>
                    <input
                      type="number"
                      id="bidAmount"
                      name="bidAmount"
                      className="w-full h-[40px] border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="Shares" className="block text-lg mb-2 mt-4">
                      Shares:
                    </label>
                    <input
                      type="number"
                      id="shares"
                      name="shares"
                      className="w-full h-[40px] border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="bg-blue text-white font-semibold py-3 px-6 rounded-lg block w-[150px] hover:bg-lightseagreen-100"
                  >
                    Submit Bid
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Documents -sections */}
      <div id="docs" className="ml-12 mt-32 h-[400px]" ref={docsRef}>
        <div className="bg-white m-20 w-[650px] h-[390px] rounded border-y-2 border-lightseagreen-100">
          <div className="flex items-center m-4 pt-6 pl-4">
            <FontAwesomeIcon
              icon={faFile}
              className="text-lightseagreen-100 w-[25px] h-[25px] mr-4 mt-2"
            />
            <h1 className="mt-2 text-5xl text-lightseagreen-100 font-semibold">
              Documents
            </h1>
          </div>

          <ul className="m-12 space-y-2 text-5xl ">
            {documents.map((document, index) => (
              <li key={index} className="border-b border-gray-300 pb-2">
                <a
                  href={document.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {document.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Representation of Map */}
      <div id="location" className="mt-16 mr-20 ml-28 h-[300px]">
        <h1 className="font-semibold text-7xl text-gray-700" ref={locationRef}>
          <FaMapMarkerAlt className="mr-4 inline" />
          Map Details
        </h1>
      </div>

      {/* Share holders section */}
      <div id="holders" className="mt-16 mr-16 ml-28">
        <h1 className="font-semibold text-7xl text-gray-700" ref={holdersRef}>
          <FaHandHoldingUsd className="mr-4 inline" />
          Share Holders
        </h1>
        <div className=" text-5xl mt-6 flex bg-whitesmoke">
          <div className="w-[800px] ">
            <p className="pt-4 font-semibold ml-56">Shares</p>
            <div className="h-[1px] w-[100%] bg-lightseagreen-100"></div>
            {/* rendering the bars */}
            {bars.map((bar) => (
              <>
                <div
                  key={bar.id}
                  className="text-3xl p-2  h-[40px] bg-lightseagreen-100 text-white "
                  style={{
                    width: `${bar.amount}%`,
                    margin: "36px 0px",
                  }}
                >
                  {bar.label}
                </div>
              </>
            ))}
          </div>
          <div>
            <p className="pt-4 font-semibold ml-32">Volume</p>
            <div className="h-[1px] w-[100%] bg-lightseagreen-100"></div>

            {/* Rendering the Amount */}
            {bars.map((bar) => (
              <div
                className="bg-lightseagreen ml-40 mt-8 pb-2 text-black border-b-2 border-lightseagreen-300"
                key={bar.id}
              >
                <ul>
                  <li key={bar.id}> {bar.amount}</li>
                </ul>
              </div>
            ))}
          </div>
          <div>
            <p className="pt-4 font-semibold ml-32">Holders</p>
            <div className="h-[1px] w-[100%] bg-lightseagreen-100"></div>
            {/* Rendering account holder name */}
            {bars.map((bar) => (
              <div
                className="bg-lightseagreen ml-32 mt-8 pb-2 text-black  border-b-2 border-lightseagreen-300"
                key={bar.id}
              >
                <ul>
                  <li key={bar.id}> {bar.user}</li>
                </ul>
              </div>
            ))}
          </div>
          <div>
            <p className="pt-4 font-semibold ml-48">Contact Holders</p>
            <div className="h-[1px] w-[100%] bg-lightseagreen-100"></div>
            {/* bid button */}
            {bars.map((bar) => (
              <div
                className="bg-lightseagreen ml-64 mt-8 pb-2 text-white bg-blue pl-10  "
                key={bar.id}
              >
                <ul>
                  <li key={bar.id}> {bar.bid}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyPage;
