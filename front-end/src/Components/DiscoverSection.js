import { memo } from "react";

const DiscoverSection = memo(() => {
  return (
    <>
      <section
        className="absolute top-[700px] left-[0px] w-[1200px] h-[550px] text-left text-3xl text-gray-700 "
        id="discover"
        data-scroll-to="exploreSection"
      >
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[1300px] h-[580px]" />
        <h4 className="absolute top-[72px] left-[380px] text-9xl text-center tracking-[-0.01em] text-blue-for-button font-h4">
          Discover the Power of Real Chain World
        </h4>

        <div className="absolute top-[200px] left-[120px] rounded-md bg-darkslategray w-32 h-[110px]" />
        <div className="absolute top-[225px] left-[272px] font-medium leading-6 inline-block w-[182px] ">
          Best Investments Opportunities
        </div>

        <div className="absolute top-[200px] left-[520px] rounded-md bg-lightseagreen-300 w-32 h-[110px]" />
        <div className="absolute top-[235px] left-[672px] font-medium leading-6 inline-block w-[182px]">
          Secure Investments
        </div>

        <div className="absolute top-[200px] left-[920px] rounded-md bg-slategray-100 w-32 h-[110px]" />
        <div className="absolute top-[235px] left-[1072px] font-medium leading-6 inline-block w-[182px]">
          Track Your Assets
        </div>

        <div className="absolute top-[400px] left-[120px] rounded-md bg-mediumpurple w-32 h-[110px]" />
        <div className="absolute top-[425px] left-[272px] font-medium leading-6 inline-block w-[182px]">
          Tokenize Your Property
        </div>

        <div className="absolute top-[400px] left-[520px] rounded-md bg-darkorange w-32 h-[110px]" />
        <div className="absolute top-[435px] left-[672px] font-medium leading-6 inline-block w-[182px]">
          Invest with $10
        </div>

        <div className="absolute top-[400px] left-[920px] rounded-md bg-steelblue w-32 h-[110px]" />
        <img
          className="absolute top-[228px] left-[565px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/contract-approve.svg"
        />
        <img
          className="absolute top-[225px] left-[960px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/demographic-tracking.svg"
        />
        <div className="absolute top-[435px] left-[1072px] font-medium leading-6 inline-block w-[182px]">
          Get Revenue
        </div>
        <img
          className="absolute top-[430px] left-[160px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/bitcoin-tokenized.svg"
        />
        <img
          className="absolute top-[225px] left-[160px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/real-estate.svg"
        />
        <img
          className="absolute top-[430px] left-[960px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/pie-chart.svg"
        />
        <img
          className="absolute top-[425px] left-[560px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/investment.svg"
        />
      </section>
    </>
  );
});

export default DiscoverSection;
