import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/reset-password-link-sent");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1502px] overflow-hidden text-left text-21xl text-lightseagreen-100 font-h4">
      <b className="absolute top-[439px] left-[764px] tracking-[-0.02em] flex font-h2 items-center w-[389px]">
        Reset Password
      </b>
      <input
        className="[border:none] bg-white absolute top-[587px] left-[693px] rounded-3xs box-border w-[533px] h-[83.75px] border-b-[1.5px] border-solid border-lightseagreen-100"
        type="text"
        placeholder="Email"
        required
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[730px] left-[716px] w-[468px] h-[79px]"
        onClick={onFrameButtonClick}
      >
        <div className="absolute top-[-710px] left-[-605px] text-13xl font-medium font-h4 text-white text-left">
          Reset Password
        </div>
      </button>
      <div className="absolute top-[611px] left-[716px] text-9xl font-medium text-gray-400 flex items-center w-[181px]">
        Email
      </div>
      <img
        className="absolute top-[135px] left-[121px] w-[207px] h-[173px]"
        alt=""
        src="/ellipse-2.svg"
      />
      <div className="absolute top-[206px] left-[185px] text-13xl font-semibold text-black flex items-center w-[78px] h-[21px]">
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
        src="/materialsymbolsarrowbackrounded.svg"
      />
    </div>
  );
};

export default ForgetPassword;
