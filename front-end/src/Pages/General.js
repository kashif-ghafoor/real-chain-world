import React, { useState } from "react";
import Portfolio from "./Portfolio";
import Profile from "./Profile";
import Wallet from "./Wallet";
import OwnerDashboard from "./OwnerDashboard";
import InvestorDashboard from "./InvestorDashboard";
import CompanyDashboard from "./CompanyDashboard";

// Import icons as needed
import { FaUser, FaWallet, FaChartLine, FaDashcube } from "react-icons/fa";

const General = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard"); // Updated initial value
  const [userRole] = useState("company"); // Change userRole to "owner" or "investor" or "company"

  const renderComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <Profile />;
      case "portfolio":
        return <Portfolio />;
      case "wallet":
        return <Wallet />;
      case "dashboard":
        if (userRole === "investor") {
          return <InvestorDashboard />;
        } else if (userRole === "company") {
          return <CompanyDashboard />;
        }
        return <OwnerDashboard />;
      default:
        return null;
    }
  };

  const renderTabs = () => {
    if (userRole === "owner") {
      return (
        <>
          <li
            className={`p-3 ${
              activeComponent === "profile"
                ? "text-lightseagreen-100 border-r-4 border-lightseagreen-100 font-semibold"
                : ""
            }`}
            onClick={() => setActiveComponent("profile")}
          >
            <button>
              <FaUser className="inline mr-4" /> Profile
            </button>
          </li>
          <li
            className={`p-3 ${
              activeComponent === "dashboard"
                ? "text-lightseagreen-100 border-r-4 border-lightseagreen-100 font-semibold"
                : ""
            }`}
            onClick={() => setActiveComponent("dashboard")}
          >
            <button>
              <FaDashcube className="inline mr-4" />
              Dashboard
            </button>
          </li>
          <li
            className={`p-3 mt-2 ${
              activeComponent === "portfolio"
                ? "text-lightseagreen-100 border-r-4 border-lightseagreen-100 font-semibold"
                : ""
            }`}
            onClick={() => setActiveComponent("portfolio")}
          >
            <button>
              <FaChartLine className="inline mr-4" /> Portfolio
            </button>
          </li>
          <li
            className={`p-3 mt-2 ${
              activeComponent === "wallet"
                ? "text-lightseagreen-100 border-r-4 border-lightseagreen-100 font-semibold"
                : ""
            }`}
            onClick={() => setActiveComponent("wallet")}
          >
            <button>
              <FaWallet className="inline mr-4" /> Wallet
            </button>
          </li>
        </>
      );
    } else if (userRole === "company") {
      return (
        <>
          <li
            className={`p-3 ${
              activeComponent === "dashboard"
                ? "text-lightseagreen-100 border-r-4 border-lightseagreen-100 font-semibold"
                : ""
            }`}
            onClick={() => setActiveComponent("dashboard")}
          >
            <button>
              <FaDashcube className="inline mr-4" />
              Dashboard
            </button>
          </li>
        </>
      );
    } else if (userRole === "investor") {
      // Add condition for "investor" role
      return (
        <>
          <li
            className={`p-3 ${
              activeComponent === "profile"
                ? "text-lightseagreen-100 border-r-4 border-lightseagreen-100 font-semibold"
                : ""
            }`}
            onClick={() => setActiveComponent("profile")}
          >
            <button>
              <FaUser className="inline mr-4" /> Profile
            </button>
          </li>
          <li
            className={`p-3 ${
              activeComponent === "dashboard"
                ? "text-lightseagreen-100 border-r-4 border-lightseagreen-100 font-semibold"
                : ""
            }`}
            onClick={() => setActiveComponent("dashboard")}
          >
            <button>
              <FaDashcube className="inline mr-4" />
              Dashboard
            </button>
          </li>
          <li
            className={`p-3 mt-2 ${
              activeComponent === "portfolio"
                ? "text-lightseagreen-100 border-r-4 border-lightseagreen-100 font-semibold"
                : ""
            }`}
            onClick={() => setActiveComponent("portfolio")}
          >
            <button>
              <FaChartLine className="inline mr-4" /> Portfolio
            </button>
          </li>
          <li
            className={`p-3 mt-2 ${
              activeComponent === "wallet"
                ? "text-lightseagreen-100 border-r-4 border-lightseagreen-100 font-semibold"
                : ""
            }`}
            onClick={() => setActiveComponent("wallet")}
          >
            <button>
              <FaWallet className="inline mr-4" /> Wallet
            </button>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <div className="flex" style={{ height: "100vh" }}>
        <div
          className="sidebar bg-white text-gray-500 font-medium font-serif text-7xl shadow-lg fixed inset-0 "
          style={{ width: "20%" }}
        >
          <img
            className="h-24 w-24 mt-32 ml-32"
            src={require("../assets/logo-signin.png")}
            alt=""
          />
          <h2 className="ml-20 mt-6 font-serif text-blue font-semibold text-11xl">
            Robert Grant
          </h2>
          <ul className="py-20 ml-14">{renderTabs()}</ul>
        </div>

        <div style={{ width: "100%" }} className="bg-black">
          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default General;
