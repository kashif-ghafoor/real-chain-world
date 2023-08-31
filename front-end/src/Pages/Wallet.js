import React from "react";
import SmallNavBar from "../Components/SmallNavBar";

const Wallet = () => {
  return (
    <div>
      <div className="absolute left-[1320px] m-6">
        <SmallNavBar />
      </div>
      <div className="pl-16 absolute left-[400px] top-[140px]">
        <h1 className="font-serif text-5xl font-bold">Wallet</h1>
        <div className="border-t-2 border-lightseagreen-100 mt-10 mb-16 w-[1200px] h-[520px] shadow-lg bg-white">
          <div className="flex justify-center">
            <img
              className="w-[270px] h-[290px] overflow-hidden"
              alt=""
              src="/wallet.svg"
            />
          </div>
          <h1 className=" flex justify-center text-lightseagreen-100 font-serif text-5xl font-bold mt-6">
            Do you already have a wallet?
          </h1>
          <p className="flex justify-center">
            Connect your wallet with us to start trading
          </p>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              onClick={() => window.open("https://metamask.io/", "_blank")}
              className="bg-blue text-white font-semibold py-3 px-6 rounded-md block w-[180px] hover:bg-lightseagreen-100"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
