import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const PropertyDetail = () => {
  // Example list of PDF documents
  const documents = [
    { name: "Document 1", url: "/path/to/document1.pdf" },
    { name: "Document 2", url: "/path/to/document2.pdf" },
    { name: "Document 3", url: "/path/to/document3.pdf" },
    { name: "Document 4", url: "/path/to/document4.pdf" },
  ];

  return (
    <>
      <NavBar />

      <div className="bg-lightseagreen-100 w-full h-[40px]" />
      <div className="w-full h-[1600px] bg-stone-50">
        <div className="mt-10 ml-24 w-[450px] h-[520px] shadow-lg bg-white">
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
                <label htmlFor="bidMessage" className="block text-lg mb-2">
                  Message:
                </label>
                <textarea
                  id="bidMessage"
                  name="bidMessage"
                  rows={4}
                  className="w-full border border-gray-300 p-4 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue text-white font-semibold py-3 px-6 rounded-lg block w-[150px] hover:bg-lightseagreen-100"
              >
                Submit Bid
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white m-20 w-[550px] h-[350px] rounded shadow-lg">
          <div className="flex items-center m-4 pt-6 pl-4">
            <FontAwesomeIcon
              icon={faFile}
              className="text-blue w-[25px] h-[25px] mr-4 mt-2"
            />
            <h1 className="mt-2 text-4xl text-blue font-semibold">Documents</h1>
          </div>

          <ul className="m-12 space-y-2">
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

      <Footer />
    </>
  );
};

export default PropertyDetail;
