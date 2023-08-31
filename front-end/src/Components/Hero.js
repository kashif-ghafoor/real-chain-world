import { useCallback } from "react";

const Hero = () => {
  const onFrameButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='exploreSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className="h-[800px] text-left text-29xl sm:text-13xl lg:text-29xl text-lightseagreen-100 font-h2 flex justify-around items-center"
      id="hero"
    >
      <div
        className="ml-20 flex flex-col items-start justify-start sm:gap-[20px] mt-20"
        id="hero left side"
      >
        <div className="tracking-[-0.01em] leading-[60px] font-extrabold  w-[690px]">
          Prepare Your Real World Assets for Blockchain Economy
        </div>
        <div className="text-5xl sm:text-4xl lg:text-5xl font-medium text-gray-700 inline-block w-full sm:w-[550px]">
          Meet Real Chain world, a faster, secure Real Estate investment
          platform
        </div>
        <button
          className="mt-2 cursor-pointer py-[14px] px-[20px] bg-white rounded-11xl flex flex-row items-center justify-center border-[3px] border-solid border-lightseagreen-100"
          onClick={onFrameButton1Click}
        >
          <b className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-h3 text-lightseagreen-100 text-left">
            Explore More
          </b>
        </button>
      </div>
      <div className="mt-24 w-[890px] h-[600px] overflow-hidden">
        <img
          src={require("../assets/heroImage.png")}
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
