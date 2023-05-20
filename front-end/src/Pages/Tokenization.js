import NavBar from "../Components/NavBar";
import Form1 from "../Components/PropertyDetailForm";
import Form2 from "../Components/PersonalInfoForm";
import Form3 from "../Components/RequiredDocForm";
import React from "react";
import { useState } from "react";

const Tokenization = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleButtonClick = (formId) => {
    setActiveForm(formId);
  };

  const renderForm = () => {
    switch (activeForm) {
      case "form1":
        return <Form1 />;
      case "form2":
        return <Form2 />;
      case "form3":
        return <Form3 />;
      default:
        return null;
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="w-screen bg-offwhite h-14">
          <div className="flex justify-center p-1">
            <button
              className={`rounded text-3xl font-medium w-[180px] h-12 ${
                activeForm === "form1"
                  ? "bg-lightseagreen-100 text-white"
                  : "bg-white text-lightseagreen-100"
              }`}
              onClick={() => handleButtonClick("form1")}
            >
              Property Detail
            </button>
            <button
              className={`rounded ml-1 border border-lightseagreen-300 text-3xl font-medium w-[180px] h-12 ${
                activeForm === "form2"
                  ? "bg-lightseagreen-100 text-white"
                  : "bg-white text-lightseagreen-100"
              }`}
              onClick={() => handleButtonClick("form2")}
            >
              Who are you?
            </button>
            <button
              className={`rounded ml-1 border border-lightseagreen-300 text-3xl font-medium w-[180px] h-12 ${
                activeForm === "form3"
                  ? "bg-lightseagreen-100 text-white"
                  : "bg-white text-lightseagreen-100"
              }`}
              onClick={() => handleButtonClick("form3")}
            >
              Required Documents
            </button>
          </div>
        </div>
        <div>{renderForm()}</div>
      </div>
    </>
  );
};

export default Tokenization;
