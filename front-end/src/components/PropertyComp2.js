import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PropertyComp2 = memo(() => {
  const navigate = useNavigate();

  const onViewProperty2Click = useCallback(() => {
    navigate("/property-page");
  }, [navigate]);

  return (
    <article className="absolute top-[198px] left-[576px] w-[531px] h-[812px] text-left text-9xl text-black font-h4">
      <div className="absolute top-[54px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[531px] h-[758px]" />
      <img
        className="absolute top-[0px] left-[29px] rounded-mini w-[467px] h-[287px] object-cover"
        alt=""
        src="/rectangle-10@2x.png"
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
      <button
        className="cursor-pointer [border:none] p-0 bg-lightseagreen-100 absolute top-[724px] left-[0px] rounded-3xs w-[531px] h-[88px]"
        onClick={onViewProperty2Click}
      >
        <div className="absolute top-[27px] left-[calc(50%_-_102.5px)] text-9xl font-semibold font-h4 text-white text-left">{`View Property   `}</div>
      </button>
    </article>
  );
});

export default PropertyComp2;
