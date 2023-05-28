import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Photos from "../Components/Photos";

const Property = () => {
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

  return (
    <>
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
      <div className="mt-0 h-[50px] bg-offwhite">
        <div className="ml-16 flex justify-left p-1">
          <button className="rounded text-3xl font-medium w-[120px] h-12  text-lightseagreen-100">
            Photos
          </button>
          <button className="rounded text-3xl font-medium w-[120px] h-12 text-lightseagreen-100">
            Overview
          </button>
          <button className="rounded text-3xl font-medium w-[120px] h-12 text-lightseagreen-100">
            About
          </button>

          <button className="rounded text-3xl font-medium w-[120px] h-12  text-lightseagreen-100">
            Location
          </button>
        </div>
      </div>
      <div id="photos" className="mt-2 flex ">
        <Photos className="ml-6" />
        <div className="bg-lightseagreen-100 mt-12 w-[330px] h-[230px] rounded-xl">
          <h1 className="mt-6 ml-6  text-5xl text-white font-semibold">
            Want to invest in project
          </h1>
          <h1 className="ml-8 mr-6 mt-2 text-3xl text-white ">
            Join other Investors by buying tokens
          </h1>
          <div className="flex ml-8 mt-10 text-4xl text-steelblue-100">
            <button className="rounded  font-medium w-[120px] h-12 bg-offwhite ">
              BUY
            </button>
            <button className="ml-4 rounded  font-medium w-[120px] h-12 bg-offwhite ">
              SELL
            </button>
          </div>
        </div>
      </div>
      <div id="overview" className="mt-32 ml-28 h-[570px] ">
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
      <div id="about" className="mt-16 mr-20 ml-12 flex justify-around">
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
        <div className="w-[430px]">
          <div className="bg-blue ">
            <h1 className="font-semibold text-4xl text-white ml-4 text-gray-700">
              Asking Price
            </h1>
            <p className="text-white ml-4">PKR 10,000,000</p>
          </div>
          <div className="h-[400px] bg-offwhite"></div>
          <div className="p-4  bg-blue text-white font-medium text-4xl h-[90px]">
            Register now to make an offer
            <button className="rounded ml-3 border border-lightseagreen-300 text-4xl font-semibold w-[100px] h-12 bg-white text-blue">
              Buy
            </button>
          </div>
        </div>
      </div>
      <div id="map" className="mt-16 mr-20 ml-28 ">
        <h1 className="font-semibold text-4xl text-gray-700">Map Details</h1>
      </div>

      <Footer />
    </>
  );
};

export default Property;
