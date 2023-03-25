import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PropertyComp3 = memo(() => {
  const navigate = useNavigate();

  const onViewProperty3Click = useCallback(() => {
    navigate("/property-page");
  }, [navigate]);

  return (
    <article
      className="absolute top-[198px] left-[1152px] w-[531px] h-[812px] text-left text-9xl text-black font-h4"
      id="p3"
    >
      <div className="absolute top-[54px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[531px] h-[758px]" />
      <img
        className="absolute top-[0px] left-[29px] rounded-mini w-[467px] h-[287px] object-cover"
        alt=""
        src="/rectangle-12@2x.png"
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
      <button
        className="cursor-pointer [border:none] py-6 px-[164px] bg-lightseagreen-100 absolute top-[724px] left-[0px] rounded-3xs flex flex-row items-center justify-center"
        onClick={onViewProperty3Click}
      >
        <div className="relative text-9xl font-semibold font-h4 text-white text-left">{`View Property   `}</div>
      </button>
    </article>
  );
});

export default PropertyComp3;
