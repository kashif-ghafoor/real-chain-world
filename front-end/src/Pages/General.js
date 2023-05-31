import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Wallet from "./Wallet";

// Import icons as needed (assuming you have appropriate icons available)
import { FaUser, FaWallet, FaChartLine } from "react-icons/fa";

const General = () => {
  const [activeComponent, setActiveComponent] = useState("profile");

  const renderComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <Profile />;
      case "dashboard":
        return <Dashboard />;
      case "wallet":
        return <Wallet />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex " style={{ height: "100vh" }}>
        <div
          className="sidebar bg-white text-gray-500 font-medium font-serif text-4xl shadow-lg fixed inset-0"
          style={{ width: "22%" }}
        >
          <img
            className="h-16 w-16 mt-24 ml-28"
            src={require("../assets/logo-signin.png")}
            alt=""
          />
          <ul className="py-20 ml-14">
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
              className={`p-3 mt-2 ${
                activeComponent === "dashboard"
                  ? "text-lightseagreen-100 border-r-4 border-lightseagreen-100 font-semibold"
                  : ""
              }`}
              onClick={() => setActiveComponent("dashboard")}
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
          </ul>
        </div>

        {renderComponent()}
      </div>
    </>
  );
};

export default General;
