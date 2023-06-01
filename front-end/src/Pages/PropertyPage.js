import React, { useState, useEffect, useRef } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Photos from "../Components/Photos";
import { Link } from "react-router-dom";
import {
  FaHandHoldingUsd,
  FaImages,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

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

  // UseRef for scrolling to different sections
  const aboutRef = useRef(null);
  const overviewRef = useRef(null);
  const locationRef = useRef(null);
  const photosRef = useRef(null);
  const holdersRef = useRef(null);

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
      <div className="h-[265px] text-left text-17xl text-lightseagreen-100 font-h2">
        <img
          className="w-screen h-[260px] object-cover"
          alt=""
          src={require("../assets/hero1.jpg")}
        />

        <p className="absolute top-[270px] left-[100px] text-9xl tracking-[-0.02em] text-white font-bold w-[450px]">
          30 Inlet Cove Cottage
        </p>
        <p className="absolute top-[320px] left-[100px] text-3xl tracking-[-0.02em] text-white font-normal w-[450px]">
          2972 Westheimer Rd. Santa Ana, Illinois 85486
        </p>
      </div>

      {/* button bar below image */}
      <div className="mt-0 h-[50px] bg-offwhite">
        <div className="ml-16 flex justify-left p-1">
          <button
            className="rounded text-3xl font-medium w-[120px] h-12 text-lightseagreen-100"
            onClick={() => scrollToSection(photosRef)}
          >
            <FaImages className="mr-2 inline" />
            Photos
          </button>
          <button
            className="rounded text-3xl font-medium w-[120px] h-12 text-lightseagreen-100"
            onClick={() => scrollToSection(overviewRef)}
          >
            <FaInfoCircle className="mr-2 inline" />
            Overview
          </button>
          <button
            className="rounded text-3xl font-medium w-[120px] h-12 text-lightseagreen-100"
            onClick={() => scrollToSection(aboutRef)}
          >
            <FaUser className="mr-2 inline" />
            About
          </button>
          <button
            className="rounded text-3xl font-medium w-[120px] h-12 text-lightseagreen-100"
            onClick={() => scrollToSection(locationRef)}
          >
            <FaMapMarkerAlt className="mr-2 inline" />
            Location
          </button>
          <button
            className="rounded text-3xl font-medium w-[120px] h-12 text-lightseagreen-100"
            onClick={() => scrollToSection(holdersRef)}
          >
            <FaHandHoldingUsd className="mr-2 inline" />
            Holders
          </button>
        </div>
      </div>

      <div id="photos" className="mt-2 flex " ref={photosRef}>
        {/* photos section  */}
        <Photos className="ml-6" />
        {/* Investor callout section */}
        <div className="bg-lightseagreen-100 mt-12 w-[320px] h-[200px] rounded-xl">
          <h1 className="mt-6 ml-6  text-5xl text-white font-semibold">
            Want to invest in project
          </h1>
          <h1 className="ml-8 mr-6 mt-2 text-3xl text-white ">
            Join other Investors by buying tokens
          </h1>
          <Link to="/property-detail">
            <button className="rounded ml-24 mt-6 font-medium w-[120px] h-12 bg-offwhite ">
              Invest
            </button>
          </Link>
        </div>
      </div>

      {/* overview section */}
      <div id="overview" className="mt-32 ml-28 h-[570px] " ref={overviewRef}>
        <h1 className="font-semibold text-4xl text-gray-700">
          Property Overview
        </h1>
        <table className="w-[1000px] h-[530px] bg-white">
          <thead className="bg-lightseagreen-100 h-[35px]">
            <tr className="text-white text-3xl font-medium">
              <th colSpan="2">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-lightseagreen-200">
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
        className="mt-16 mr-6 ml-12 flex justify-around"
        ref={aboutRef}
      >
        <div>
          <h1 className="font-semibold text-4xl text-gray-700">
            About the Property
          </h1>
          <p className="w-[550px] mt-4 text-3xl text-gray-700 leading-relaxed">
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

      {/* Representation of Map */}
      <div id="location" className="mt-16 mr-20 ml-28 h-[300px]">
        <h1 className="font-semibold text-4xl text-gray-700" ref={locationRef}>
          <FaMapMarkerAlt className="mr-4 inline" />
          Map Details
        </h1>
      </div>

      {/* Share holders section */}
      <div id="holders" className="mt-16 mr-10 ml-20">
        <h1 className="font-semibold text-4xl text-gray-700" ref={holdersRef}>
          <FaHandHoldingUsd className="mr-4 inline" />
          Share Holders
        </h1>
        <div className="mt-6 flex bg-whitesmoke">
          <div className="w-[700px] ">
            <p className="font-medium ml-56">Shares</p>
            {/* rendering the bars */}
            {bars.map((bar) => (
              <>
                <div
                  key={bar.id}
                  className="text-2xl p-1 h-[27px] bg-lightseagreen-100 text-white "
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
            <p className="font-medium ml-12">Volume</p>
            {/* Rendering the Amount */}
            {bars.map((bar) => (
              <div
                className="bg-lightseagreen ml-16 mt-8 pb-2 text-black border-b-2 border-lightseagreen-300"
                key={bar.id}
              >
                <ul>
                  <li key={bar.id}> {bar.amount}</li>
                </ul>
              </div>
            ))}
          </div>
          <div>
            <p className="font-medium ml-20">Holders</p>
            {/* Rendering account holder name */}
            {bars.map((bar) => (
              <div
                className="bg-lightseagreen ml-20 mt-8 pb-2 text-black  border-b-2 border-lightseagreen-300"
                key={bar.id}
              >
                <ul>
                  <li key={bar.id}> {bar.user}</li>
                </ul>
              </div>
            ))}
          </div>
          <div>
            <p className="font-medium ml-16">Contact Holders</p>
            {/* bid button */}
            {bars.map((bar) => (
              <div
                className="bg-lightseagreen ml-28 mt-8 pb-2 text-white bg-blue pl-5  "
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
