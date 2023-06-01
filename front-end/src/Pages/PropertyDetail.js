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
