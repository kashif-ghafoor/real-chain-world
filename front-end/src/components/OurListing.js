import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const OurListing = memo(() => {
  const navigate = useNavigate();

  const onViewPropertyButtonClick = useCallback(() => {
    navigate("/property-page");
  }, [navigate]);

  return (
    <div className="absolute top-[362px] left-[118px] w-[1683px] h-[2103px] text-left text-9xl text-black font-h4">
      <div className="absolute top-[0px] left-[0px] text-29xl tracking-[-0.02em] font-extrabold font-h2 text-lightseagreen-100">
        Our Listings
      </div>
      <div className="absolute top-[80px] left-[0px] text-17xl tracking-[-0.02em] font-semibold text-gray-700">
        Invest in Tokenized Real Estate
      </div>
      <div className="absolute top-[145px] left-[0px] text-5xl text-gray-700 flex items-center w-[1572px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <div className="absolute top-[834px] left-[1007px]">{`25 `}</div>
      <div className="absolute top-[340px] left-[0px] w-[531px] h-[812px]">
        <div className="absolute top-[54px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[531px] h-[758px]" />
        <img
          className="absolute top-[0px] left-[29px] rounded-mini w-[467px] h-[287px] object-cover"
          alt=""
          src="/rectangle-7@2x.png"
        />
        <div className="absolute top-[308px] left-[49px] text-13xl font-medium">
          Boston heights
        </div>
        <div className="absolute top-[360px] left-[49px] text-5xl text-gray-700">
          Cologne, Germany
        </div>
        <div className="absolute top-[446px] left-[calc(50%_-_216.5px)] font-semibold text-gray-700">{`Rate Per Token:   `}</div>
        <div className="absolute top-[501px] left-[calc(50%_-_216.5px)] font-semibold text-gray-700">{`Available Token:   `}</div>
        <div className="absolute top-[605px] left-[calc(50%_-_216.5px)] font-semibold text-blue-for-button">{`0 Investors   `}</div>
        <div className="absolute top-[446px] left-[374px]">{`50 ETH `}</div>
        <div className="absolute top-[501px] left-[438px]">{`75 `}</div>
        <button
          className="cursor-pointer [border:none] py-[27px] px-[164px] bg-lightseagreen-100 absolute top-[724px] left-[0px] rounded-3xs flex flex-row items-center justify-center"
          onClick={onViewPropertyButtonClick}
        >
          <div className="relative text-9xl font-semibold font-h4 text-white text-left">{`View Property   `}</div>
        </button>
      </div>
      <div className="absolute top-[340px] left-[576px] w-[531px] h-[1045px] text-gray-700">
        <img
          className="absolute top-[0px] left-[32px] rounded-mini w-[467px] h-[287px] object-cover"
          alt=""
          src="/rectangle-10@2x.png"
        />
        <div className="absolute top-[287px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[531px] h-[758px]" />
        <div className="absolute top-[308px] left-[42px] text-13xl font-medium text-black">
          30 Inlet Cove Cottage
        </div>
        <div className="absolute top-[360px] left-[42px] text-5xl">
          Alexandria, Pakistan
        </div>
        <div className="absolute top-[612px] left-[calc(50%_-_223.5px)] font-semibold text-blue-for-button">{`0 Investors   `}</div>
        <div className="absolute top-[439px] left-[calc(50%_-_223.5px)] font-semibold">{`Rate Per Token:   `}</div>
        <div className="absolute top-[494px] left-[calc(50%_-_223.5px)] font-semibold">{`Available Token:   `}</div>
        <div className="absolute top-[439px] left-[367px] text-black">{`50 ETH `}</div>
        <button className="cursor-pointer [border:none] py-[27px] px-[163px] bg-lightseagreen-100 absolute top-[724px] left-[0px] rounded-3xs flex flex-row items-center justify-center">
          <div className="relative text-9xl font-semibold font-h4 text-white text-left">{`View Property   `}</div>
        </button>
      </div>
      <div className="absolute top-[340px] left-[1152px] w-[531px] h-[1045px]">
        <img
          className="absolute top-[0px] left-[32px] rounded-mini w-[467px] h-[287px] object-cover"
          alt=""
          src="/rectangle-12@2x.png"
        />
        <div className="absolute top-[287px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[531px] h-[758px]" />
        <div className="absolute top-[308px] left-[43px] text-13xl font-medium">
          70 Spotted Sandpiper
        </div>
        <div className="absolute top-[360px] left-[43px] text-5xl text-gray-700">
          Florence, Pakistan
        </div>
        <div className="absolute top-[612px] left-[calc(50%_-_206.5px)] font-semibold text-blue-for-button">{`0 Investors   `}</div>
        <div className="absolute top-[439px] left-[calc(50%_-_214.5px)] font-semibold text-gray-700">{`Rate Per Token:   `}</div>
        <div className="absolute top-[494px] left-[calc(50%_-_214.5px)] font-semibold text-gray-700">{`Available Token:   `}</div>
        <div className="absolute top-[439px] left-[376px]">{`90 ETH `}</div>
        <div className="absolute top-[494px] left-[440px]">{`95 `}</div>
        <div className="absolute top-[724px] left-[0px] rounded-3xs bg-lightseagreen-100 flex flex-row py-6 px-[164px] items-center justify-center text-white">
          <div className="relative font-semibold">{`View Property   `}</div>
        </div>
      </div>
      <div className="absolute top-[1792px] left-[438px]">{`75 `}</div>
      <article
        className="absolute top-[1291px] left-[0px] w-[531px] h-[812px] text-left text-9xl text-gray-700 font-h4"
        id="p4"
      >
        <div className="absolute top-[54px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[531px] h-[758px]" />
        <img
          className="absolute top-[0px] left-[29px] rounded-mini w-[467px] h-[287px] object-cover"
          alt=""
          src="/rectangle-17@2x.png"
        />
        <div className="absolute top-[308px] left-[49px] text-13xl font-medium text-black">
          Boston heights
        </div>
        <div className="absolute top-[360px] left-[49px] text-5xl">
          Cologne, Germany
        </div>
        <div className="absolute top-[446px] left-[calc(50%_-_216.5px)] font-semibold">{`Rate Per Token:   `}</div>
        <div className="absolute top-[501px] left-[calc(50%_-_216.5px)] font-semibold">{`Available Token:   `}</div>
        <div className="absolute top-[605px] left-[calc(50%_-_216.5px)] font-semibold text-blue-for-button">{`0 Investors   `}</div>
        <div className="absolute top-[446px] left-[374px] text-black">{`50 ETH `}</div>
        <button className="cursor-pointer [border:none] py-[27px] px-[164px] bg-lightseagreen-100 absolute top-[724px] left-[0px] rounded-3xs flex flex-row items-center justify-center">
          <div className="relative text-9xl font-semibold font-h4 text-white text-left">{`View Property   `}</div>
        </button>
      </article>
      <div className="absolute top-[1291px] left-[576px] w-[531px] h-[812px]">
        <div className="absolute top-[54px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[531px] h-[758px]" />
        <img
          className="absolute top-[0px] left-[29px] rounded-mini w-[467px] h-[287px] object-cover"
          alt=""
          src="/rectangle-19@2x.png"
        />
        <div className="absolute top-[308px] left-[42px] text-13xl font-medium">
          30 Inlet Cove Cottage
        </div>
        <div className="absolute top-[360px] left-[42px] text-5xl text-gray-700">
          Alexandria, Pakistan
        </div>
        <div className="absolute top-[612px] left-[calc(50%_-_223.5px)] font-semibold text-blue-for-button">{`0 Investors   `}</div>
        <div className="absolute top-[439px] left-[calc(50%_-_223.5px)] font-semibold text-gray-700">{`Rate Per Token:   `}</div>
        <div className="absolute top-[494px] left-[calc(50%_-_223.5px)] font-semibold text-gray-700">{`Available Token:   `}</div>
        <div className="absolute top-[439px] left-[367px]">{`50 ETH `}</div>
        <div className="absolute top-[494px] left-[431px]">{`25 `}</div>
        <button className="cursor-pointer [border:none] py-[27px] px-[163px] bg-lightseagreen-100 absolute top-[724px] left-[0px] rounded-3xs flex flex-row items-center justify-center">
          <div className="relative text-9xl font-semibold font-h4 text-white text-left">{`View Property   `}</div>
        </button>
      </div>
      <div className="absolute top-[1291px] left-[1152px] w-[531px] h-[812px]">
        <div className="absolute top-[54px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[531px] h-[758px]" />
        <img
          className="absolute top-[0px] left-[29px] rounded-mini w-[467px] h-[287px] object-cover"
          alt=""
          src="/rectangle-21@2x.png"
        />
        <div className="absolute top-[308px] left-[43px] text-13xl font-medium">
          70 Spotted Sandpiper
        </div>
        <div className="absolute top-[360px] left-[43px] text-5xl text-gray-700">
          Florence, Pakistan
        </div>
        <div className="absolute top-[612px] left-[calc(50%_-_206.5px)] font-semibold text-blue-for-button">{`0 Investors   `}</div>
        <div className="absolute top-[439px] left-[calc(50%_-_214.5px)] font-semibold text-gray-700">{`Rate Per Token:   `}</div>
        <div className="absolute top-[494px] left-[calc(50%_-_214.5px)] font-semibold text-gray-700">{`Available Token:   `}</div>
        <div className="absolute top-[439px] left-[376px]">{`90 ETH `}</div>
        <div className="absolute top-[494px] left-[440px]">{`95 `}</div>
        <button className="cursor-pointer [border:none] py-6 px-[164px] bg-lightseagreen-100 absolute top-[724px] left-[0px] rounded-3xs flex flex-row items-center justify-center">
          <div className="relative text-9xl font-semibold font-h4 text-white text-left">{`View Property   `}</div>
        </button>
      </div>
    </div>
  );
});

export default OurListing;
