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
      className="absolute top-[100px] left-[-180px] w-[1100px] h-[505px] text-left text-17xl text-lightseagreen-100 font-h2"
      id="hero"
    >
      <div className="absolute top-[0px] left-[0px] w-[1100px] h-[500px]" />
      <div
        className="absolute top-[150px] left-[920px] w-[560px] h-[421px]
        overflow-hidden"
      >
        <img
          className="h-180 w-260"
          src={require("../assets/heroImage.png")}
          alt=""
        />
      </div>

      <div
        className="absolute top-[142px] left-[243px] flex flex-col py-0 px-[50px] items-start justify-center gap-[20px]"
        id="hero left side"
      >
        <div className="relative tracking-[-0.01em] leading-[50px] font-extrabold flex items-center w-[560px] ">
          Prepare Your Real World Assets for Blockchain Economy
        </div>
        <div className="relative text-4xl font-medium  text-gray-700 inline-block w-[540px]">{`Meet Real Chain world, a faster, secure Real Estate investment platform `}</div>
        <button
          className="cursor-pointer py-[12px] px-[16px] bg-white rounded-11xl flex flex-row items-center justify-center border-[3px] border-solid border-lightseagreen-100"
          onClick={onFrameButton1Click}
        >
          <b className="relative text-3xl font-h3 text-lightseagreen-100 text-left">
            Explore More
          </b>
        </button>
      </div>
    </div>
  );
});

export default Hero;
