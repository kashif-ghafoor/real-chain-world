import { memo } from "react";

const DiscoverSection = memo(() => {
  return (
    <>
      <section
        className="mt-10 w-[1100px] h-[550px] text-left text-3xl text-gray-700 "
        id="discover"
        data-scroll-to="exploreSection"
      >
        <div className="absolute bg-whitesmoke w-[1300px] h-[580px]">
          <h4 className="absolute ml-80 mt-20  text-9xl  tracking-[-0.01em] text-blue-for-button font-h4">
            Discover the Power of Real Chain World
          </h4>
          <div className="flex mt-36 ml-24 space-around">
            <div className="flex m-10">
              <div className=" rounded-md bg-darkslategray w-32 h-[110px]">
                <img
                  className="m-6 ml-10 w-[50px] h-[50px] overflow-hidden"
                  alt=""
                  src="/real-estate.svg"
                />
              </div>
              <p className="p-6 font-medium leading-6 inline-block w-[182px]">
                Best Investments Opportunities
              </p>
            </div>
            <div className="flex m-10">
              <div className="rounded-md bg-lightseagreen-300 w-32 h-[110px]">
                <img
                  className="m-8 ml-10 w-[50px] h-[50px] overflow-hidden"
                  alt=""
                  src="/contract-approve.svg"
                />
              </div>
              <p className="p-6 font-medium leading-6 inline-block w-[182px]">
                Secure Investments
              </p>
            </div>

            <div className="flex m-10">
              <div className="rounded-md bg-slategray-100 w-32 h-[110px]">
                <img
                  className="m-8 w-[50px] h-[50px] overflow-hidden"
                  alt=""
                  src="/demographic-tracking.svg"
                />
              </div>
              <p className="p-6 font-medium leading-6 inline-block w-[182px]">
                Track Your Assets
              </p>
            </div>
          </div>

          <div className="flex mt-8 ml-24 space-around">
            <div className="flex m-10">
              <div className=" rounded-md  bg-mediumpurple w-32 h-[110px]">
                <img
                  className="m-6 ml-10 w-[50px] h-[50px] overflow-hidden"
                  alt=""
                  src="/bitcoin-tokenized.svg"
                />
              </div>
              <p className="p-6 font-medium leading-6 inline-block w-[182px]">
                Tokenize Your Property
              </p>
            </div>
            <div className="flex m-10">
              <div className="rounded-md bg-lightseagreen-300 w-32 h-[110px]">
                <img
                  className="m-8 ml-10 w-[50px] h-[50px] overflow-hidden"
                  alt=""
                  src="/investment.svg"
                />
              </div>
              <p className="p-6 font-medium leading-6 inline-block w-[182px]">
                Invest with $10
              </p>
            </div>

            <div className="flex m-10">
              <div className="rounded-md bg-steelblue w-32 h-[110px]">
                <img
                  className="m-8 ml-10 w-[50px] h-[50px] overflow-hidden"
                  alt=""
                  src="/pie-chart.svg"
                />
              </div>
              <p className="p-6 font-medium leading-6 inline-block w-[182px]">
                Get Revenue
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default DiscoverSection;
