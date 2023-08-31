import React from "react";
import SmallNavBar from "../Components/SmallNavBar";
import RequestedProperty from "../Components/RequestedProperty";

const CompanyDashboard = () => {
  return (
    <>
      <div>
        <div className="absolute left-[1320px] m-6">
          <SmallNavBar />
        </div>
        <h1 className="absolute left-[510px] top-[110px] font-sans text-lightseagreen-100 text-17xl font-bold">
          Dashboard
        </h1>
        <div className="absolute left-[500px] top-[190px]">
          <div className="rounded-3xl shadow-lg bg-white p-10 mt-5 flex flex-wrap gap-8 w-[1300px] ">
            <h1 className="font-sans text-blue text-13xl font-bold">
              Tokenization Requests
            </h1>
            <div className="w-[1250px]  text-gray-500 ">
              <ul className="flex p-3 text-5xl justify-between font-medium">
                <li className="font-semibold">Property Title</li>
                <li>Details</li>
                <li>Status</li>
                <li>Offered price</li>
              </ul>
            </div>
            <RequestedProperty
              title="Property 1"
              status="unset"
              price="set
              price"
            />
            <RequestedProperty
              title="Property 2"
              status="unset"
              price="set
              price"
            />
            <RequestedProperty
              title="Property 3"
              status="unset"
              price="set
              price"
            />
          </div>
        </div>

        <div className="absolute left-[500px] top-[750px] ">
          <div className="rounded-3xl shadow-lg bg-white p-10 mt-5 flex flex-wrap gap-8 w-[1300px] ">
            <h1 className="font-sans text-blue text-13xl font-bold">
              Properties with Set Prices
            </h1>
            <div className="w-[1250px]  text-gray-500 ">
              <ul className="flex p-3 text-5xl justify-between font-medium">
                <li className="font-semibold">Property Title</li>
                <li>Details</li>
                <li>Status</li>
                <li>set Price</li>
              </ul>
            </div>
            <RequestedProperty title="Property 1" status="done" price="8 ETH" />
            <RequestedProperty title="Property 3" status="done" price="8 ETH" />
          </div>
        </div>
        <div className="absolute left-[500px] top-[1250px] pb-32">
          <div className="rounded-3xl shadow-lg bg-white p-10 mt-5 flex flex-wrap gap-8 w-[1300px] ">
            <h1 className="font-sans text-blue text-13xl font-bold">
              Selected Properties
            </h1>
            <div className="w-[1250px]  text-gray-500 ">
              <ul className="flex p-3 text-5xl justify-between font-medium">
                <li className="font-semibold">Property Title</li>
                <li>Details</li>
                <li>Status</li>
                <li>set Price</li>
              </ul>
            </div>
            <RequestedProperty
              title="Property 1"
              status="selected"
              price="8 ETH"
            />
            <RequestedProperty
              title="Property 3"
              status="selected"
              price="8 ETH"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDashboard;
