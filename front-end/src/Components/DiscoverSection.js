import { memo } from "react";

const DiscoverSection = memo(() => {
  return (
    <>
      <section
        className="mt-10 h-[550px] text-left text-gray-700 "
        id="discover"
        data-scroll-to="exploreSection"
      >
        <div className="bg-whitesmoke h-[580px]">
          <div className="flex justify-center ">
            <h4 className="absolute mt-12 p-2 text-9xl tracking-[-0.01em] text-blue-for-button font-h4 sm:text-9xl md:text-9xl lg:text-11xl ">
              Discover the Power of Real Chain World
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 m-32 pt-12">
            <div className="rounded-md bg-darkslategray h-[110px] flex items-center justify-center">
              <img
                className="w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/real-estate.svg"
              />
            </div>
            <p className="p-6 font-medium leading-6 text-left">
              Best Investments Opportunities
            </p>

            <div className="rounded-md bg-lightseagreen-300 h-[110px] flex items-center justify-center">
              <img
                className="w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/contract-approve.svg"
              />
            </div>
            <p className="p-6 font-medium leading-6 text-left">
              Secure Investments
            </p>

            <div className="rounded-md bg-slategray-100 h-[110px] flex items-center justify-center">
              <img
                className="w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/demographic-tracking.svg"
              />
            </div>
            <p className="p-6 font-medium leading-6 text-left">
              Track Your Assets
            </p>

            <div className="rounded-md bg-mediumpurple h-[110px] flex items-center justify-center">
              <img
                className="w-[50px] h-[50px] overflow-hidden "
                alt=""
                src="/bitcoin-tokenized.svg"
              />
            </div>
            <p className="p-6 font-medium leading-6 text-left">
              Tokenize Your Property
            </p>

            <div className="rounded-md bg-lightseagreen-300 h-[110px] flex items-center justify-center">
              <img
                className="w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/investment.svg"
              />
            </div>
            <p className="p-6 font-medium leading-6 text-left">
              Invest with $10
            </p>

            <div className="rounded-md bg-steelblue h-[110px] flex items-center justify-center">
              <img
                className="w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/pie-chart.svg"
              />
            </div>
            <p className="p-6 font-medium leading-6 text-left">Get Revenue</p>
          </div>
        </div>
      </section>
    </>
  );
});

export default DiscoverSection;
