import { memo, useCallback } from "react";

const Hero = memo(() => {
  const onFrameButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='exploreSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className="text-left text-9xl sm:text-9xl md:text-13xl lg:text-17xl xl:text-17xl text-lightseagreen-100 font-h2 flex flex-col sm:flex-row justify-around ml-20"
      id="hero"
    >
      <div
        className="flex flex-col items-start justify-center sm:gap-[12px]  lg:[20px] mt-20"
        id="hero left side"
      >
        <div className="tracking-[-0.01em] leading-[50px] font-extrabold w-full sm:w-[500px]">
          Prepare Your Real World Assets for Blockchain Economy
        </div>
        <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-gray-700 inline-block w-full sm:w-[500px]">
          Meet Real Chain world, a faster, secure Real Estate investment
          platform
        </div>
        <button
          className="cursor-pointer py-[12px] px-[16px] bg-white rounded-11xl flex flex-row items-center justify-center border-[3px] border-solid border-lightseagreen-100"
          onClick={onFrameButton1Click}
        >
          <b className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-h3 text-lightseagreen-100 text-left">
            Explore More
          </b>
        </button>
      </div>
      <div className="mt-24 w-full sm:w-[630px] sm:h-[420px] overflow-hidden">
        <img
          src={require("../assets/heroImage.png")}
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
});

export default Hero;
