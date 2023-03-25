import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = memo(() => {
  const navigate = useNavigate();

  const onFrameButton2Click = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <nav
      className="absolute top-[0px] left-[0px] w-[1946px] h-[148px]"
      id="nav"
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1946px] h-[148px]"
        alt=""
        src="/group-12.svg"
      />
      <div className="absolute top-[61px] left-[184.31px] flex flex-row items-center justify-end">
        <div className="relative w-[1611.07px] h-[65px] shrink-0">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[16px] left-[214.29px] flex flex-row items-start justify-start"
            onClick={onFrameButton2Click}
          >
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-semibold font-h2 text-gray-700 text-left inline-block">
              Marketplace
            </button>
          </button>
          <div className="absolute top-[16px] left-[417.47px] text-5xl font-semibold font-h2 text-gray-700 text-left inline-block w-[327.51px]">
            Tokenize Your Real Estate
          </div>
          <div className="absolute top-[16px] left-[791.47px] text-5xl font-semibold font-h2 text-gray-700 text-left inline-block w-[77.83px]">
            About
          </div>
          <div className="absolute top-[16px] left-[915.81px] text-5xl font-semibold font-h2 text-gray-700 text-left inline-block w-[70.76px]">
            Learn
          </div>
          <div className="absolute top-[19px] left-[0px] text-5xl font-semibold font-h2 text-gray-100 text-left inline-block w-[74.8px]">
            LOGO
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-blue-for-button absolute top-[0px] left-[1407.07px] rounded-3xs w-[204px] h-[65px]"
            autoFocus
            onClick={onFrameButton3Click}
          >
            <b className="absolute top-[18px] left-[58px] text-5xl font-h2 text-white text-left">
              Sign In
            </b>
          </button>
        </div>
      </div>
    </nav>
  );
});

export default NavBar;
