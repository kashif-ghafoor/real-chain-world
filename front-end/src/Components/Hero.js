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
      className="text-left text-17xl text-lightseagreen-100 font-h2 flex justify-around ml-20"
      id="hero"
    >
      <div
        className="flex flex-col  items-start justify-center gap-[20px] mt-20"
        id="hero left side"
      >
        <div className="tracking-[-0.01em] leading-[50px] font-extrabold flex  w-[560px] ">
          Prepare Your Real World Assets for Blockchain Economy
        </div>
        <div className="text-4xl font-medium  text-gray-700 inline-block w-[540px]">{`Meet Real Chain world, a faster, secure Real Estate investment platform `}</div>
        <button
          className="cursor-pointer py-[12px] px-[16px] bg-white rounded-11xl flex flex-row items-center justify-center border-[3px] border-solid border-lightseagreen-100"
          onClick={onFrameButton1Click}
        >
          <b className="text-3xl font-h3 text-lightseagreen-100 text-left">
            Explore More
          </b>
        </button>
      </div>
      <div
        className="mt-24 w-[600px] h-[421px]
        overflow-hidden"
      >
        <img src={require("../assets/heroImage.png")} alt="" />
      </div>
    </div>
  );
});

export default Hero;
