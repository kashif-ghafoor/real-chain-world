import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import FAQinvest from "../Components/FAQinvest";

const HowToTokenize = () => {
  return (
    <>
      <div className="bg-offwhite ">
        <NavBar />
        <div className="rounded-lg bg-white m-28 pt-32 pl-28">
          <div className="flex gap-20">
            <div className="p-8">
              <h2 className="text-gray-700 text-21xl font-black tracking-wider">
                Boost Wealth With Tokenized Real Estate Investing
              </h2>
              <ul className="text-4xl mt-12">
                <li className="font-semibold flex ">
                  <svg
                    class="flex-shrink-0 w-10 h-10 text-lightseagreen-100 dark:text-lightseagreen-100 pr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Worldwide Liquidity
                  <span className="text-gray-500 pl-3 font-normal">
                    | Tap into a global customer base
                  </span>
                </li>
                <li className="font-semibold flex pt-2">
                  <svg
                    class="flex-shrink-0 w-10 h-10 text-lightseagreen-100 text-lightseagreen-100 pr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Fractional Tokenization
                  <span className="text-gray-500 pl-3 font-normal">
                    | Sell a small piece of your real estate
                  </span>
                </li>
                <li className="font-semibold flex pt-2">
                  <svg
                    class="flex-shrink-0 w-10 h-10 text-lightseagreen-100 pr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Advisory
                  <span className="text-gray-500 pl-3 font-normal">
                    | Experts help you during the full process
                  </span>
                </li>
                <li className="font-semibold flex pt-2">
                  <svg
                    class="flex-shrink-0 w-10 h-10 text-lightseagreen-100 pr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Intuitive Interface
                  <span className="text-gray-500 pl-3 font-normal">
                    | Easy participation and dividends tracking
                  </span>
                </li>
              </ul>
            </div>
            <img
              className="pt-4 w-[50%] h-[520px] object-cover"
              alt=""
              src={require("../assets/Investments.png")}
            />
          </div>
          <div className="font-mono pt-24 flex flex-col items-center justify-center text-center">
            <h2 className="text-21xl font-bold text-blue">How It Works</h2>
            <p className="text-5xl font-medium text-gray-500">
              Access exclusive real estate investment opportunities from
              anywhere, for anyone.
            </p>
          </div>

          <div className="ml-12 m-32">
            <div className="flex gap-10">
              <img
                className="w-[600px] h-[200px] overflow-hidden"
                alt=""
                src={require("../assets/User_Verification.png")}
              />
              <div>
                <h2 className="text-17xl text-lightseagreen-100 font-semibold">
                  User Verification
                </h2>
                <p className="pt-5 text-5xl text-gray-500 w-[80%]">
                  Before using our platform, you first need to be verified and
                  approved. The entire process is completed online via the Real
                  Chain World website. You will be prompted to provide or verify
                  any required information (KYC / AML), as well as make the
                  necessary acknowledgments electronically.
                </p>
                <button className="mt-8 cursor-pointer [border:none] bg-[transparent] relative w-[290px] h-[70px] shrink-0 shadow-lg">
                  <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[280px] h-[70px]" />
                  <div className="p-y-4 absolute top-[16px] left-[15px] text-5xl font-semibold text-blue text-left">
                    Begin KYC/AML Process
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-48 flex gap-10">
              <img
                className="w-[400px] h-[200px] overflow-hidden"
                alt=""
                src={require("../assets/Browseinvestment.png")}
              />
              <div>
                <h2 className="text-17xl text-lightseagreen-100 font-semibold">
                  Browse Investment Opportunities
                </h2>
                <p className="pt-5 text-5xl text-gray-500  w-[80%]">
                  With no investment minimums, with as little as 1 ETH you can
                  start receiving passive income proportional to your share of a
                  property's tokens and begin to grow your real estate portfolio
                  today.
                </p>
                <button className="mt-8 cursor-pointer [border:none] bg-[transparent] relative w-[290px] h-[70px] shrink-0 shadow-lg">
                  <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[290px] h-[70px]" />
                  <div className="p-y-4 absolute top-[16px] left-[15px] text-5xl font-semibold text-blue text-left">
                    View Properties for Sale
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-48 flex gap-10">
              <img
                className="w-[380px] h-[180px] overflow-hidden"
                alt=""
                src={require("../assets/track.png")}
              />
              <div>
                <h2 className="text-17xl text-lightseagreen-100 font-semibold">
                  Participate In Crowd-sale
                </h2>
                <p className="pt-5 text-5xl text-gray-500  w-[80%]">
                  Once you've found the right investment for you, subscribe to
                  be notified when the crowd-sale goes live. Once live you can
                  begin investing along with other investors towards the sales
                  goal.
                </p>
              </div>
            </div>
            <div className="mt-48 ml-10 flex gap-10">
              <img
                className="w-[400px] h-[150px] overflow-hidden"
                alt=""
                src="/finalization.svg"
              />
              <div className="ml-12">
                <h2 className="text-17xl text-lightseagreen-100 font-semibold">
                  Finalization
                </h2>
                <p className="pt-5 text-5xl text-gray-500  w-[80%]">
                  Once the crowd-sale is ended successfully, the final paperwork
                  is completed at the Notary. The investors can claim their
                  share of the property (tokens) shortly afterward. As an owner,
                  you will receive income proportional to your share of tokens
                  owned, receive regular property reports and partake in the
                  property voting topics (if any) through a DAO.
                </p>
              </div>
            </div>
          </div>

          <h2 className="pt-24 pl-20 text-13xl font-semibold text-lightseagreen-100">
            Frequently Asked Questions
          </h2>
          <FAQinvest />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowToTokenize;
