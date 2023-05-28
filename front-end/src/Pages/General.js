import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Wallet from "./Wallet";
import NavBar from "../Components/NavBar";

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
      <NavBar />
      <div className="flex" style={{ height: "100vh" }}>
        <div
          className="sidebar bg-lightseagreen-100 text-white"
          style={{ width: "20%" }}
        >
          <ul className="py-4">
            <li
              className={`p-2 ${activeComponent === "profile" ? "active" : ""}`}
              onClick={() => setActiveComponent("profile")}
            >
              Profile
            </li>
            <li
              className={`p-2 ${
                activeComponent === "dashboard" ? "active" : ""
              }`}
              onClick={() => setActiveComponent("dashboard")}
            >
              Dashboard
            </li>
            <li
              className={`p-2 ${activeComponent === "wallet" ? "active" : ""}`}
              onClick={() => setActiveComponent("wallet")}
            >
              Wallet
            </li>
          </ul>
        </div>
        {renderComponent()}
      </div>
    </>
  );
};

export default General;
