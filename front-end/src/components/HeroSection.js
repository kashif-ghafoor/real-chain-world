import { memo, useCallback } from "react";
import HeroImage from "./HeroImage";

const HeroSection = memo(() => {
  const onFrameButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='exploreSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header
      className="absolute top-[135px] left-[-125px] w-[2190px] h-[945px] text-left text-39xl text-lightseagreen-100 font-h2"
      id="hero"
    >
      <div className="absolute top-[13px] left-[127px] bg-white w-[1915px] h-[932px]" />
      <div className="absolute top-[0px] left-[0px] w-[1027px] h-[800px]" />
      <HeroImage />
      <div
        className="absolute top-[284px] left-[243px] flex flex-col py-0 px-[50px] items-start justify-center gap-[37px]"
        id="hero left side"
      >
        <div className="relative tracking-[-0.02em] leading-[70px] font-extrabold flex items-center w-[794px]">
          Prepare Your Real World Assets for Blockchain Economy
        </div>
        <div className="relative text-5xl font-medium font-h4 text-gray-700 inline-block w-[690px]">{`Meet Real Chain world, a faster, secure Real Estate investment platform `}</div>
        <button
          className="cursor-pointer py-[21px] px-[27px] bg-white rounded-11xl flex flex-row items-center justify-center border-[6px] border-solid border-lightseagreen-100"
          onClick={onFrameButton1Click}
        >
          <b className="relative text-5xl font-h2 text-lightseagreen-100 text-left">
            Explore More
          </b>
        </button>
      </div>
    </header>
  );
});

export default HeroSection;
