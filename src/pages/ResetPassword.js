import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1502px] overflow-hidden text-left text-9xl text-gray-400 font-h4">
      <b className="absolute top-[375px] left-[764px] text-21xl tracking-[-0.02em] flex font-h2 text-lightseagreen-100 items-center w-[389px]">
        Reset Password
      </b>
      <input
        className="[border:none] bg-white absolute top-[473px] left-[693px] rounded-3xs box-border w-[533px] h-[83.75px] border-b-[1.5px] border-solid border-lightseagreen-100"
        type="text"
        placeholder="New password"
        required
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[769px] left-[716px] w-[455px] h-[79px]"
        onClick={onFrameButtonClick}
      >
        <div className="absolute top-[-749px] left-[-529px] text-13xl font-medium font-h4 text-white text-left">
          Done
        </div>
      </button>
      <div className="absolute top-[497px] left-[716px] font-medium flex items-center w-[219px]">
        New Password
      </div>
      <input
        className="[border:none] bg-white absolute top-[605px] left-[693px] rounded-3xs box-border w-[533px] h-[83.75px] border-b-[1.5px] border-solid border-lightseagreen-100"
        type="text"
        placeholder="Confirm Password"
        required
      />
      <div className="absolute top-[629px] left-[716px] font-medium flex items-center w-[252px]">
        Confirm Password
      </div>
      <img
        className="absolute top-[130px] left-[137px] w-[207px] h-[173px]"
        alt=""
        src="/ellipse-2.svg"
      />
      <div className="absolute top-[206px] left-[202px] text-13xl font-semibold text-black flex items-center w-[78px] h-[21px]">
        Logo
      </div>
      <img
        className="absolute top-[85px] left-[1770px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/charmcross.svg"
      />
      <img
        className="absolute top-[85px] left-[96px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/materialsymbolsarrowbackrounded1.svg"
      />
    </div>
  );
};

export default ResetPassword;
