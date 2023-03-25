import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignUpRegister = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onSignInClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onTermsConditionsClick = useCallback(() => {
    window.open("https://docs.realchainworld.io/terms-and-conditions");
  }, []);

  return (
    <div className="relative bg-white w-full h-[2190px] overflow-hidden text-left text-9xl text-gray-400 font-h4">
      <b className="absolute top-[313px] left-[829px] text-29xl tracking-[-0.02em] flex font-h2 text-lightseagreen-100 items-center w-[263px]">
        Welcome
      </b>
      <input
        className="[border:none] bg-white absolute top-[729px] left-[685px] rounded-3xs box-border w-[550px] h-[83.75px] border-b-[1.5px] border-solid border-lightseagreen-100"
        type="email"
        placeholder="Email"
        required
      />
      <input
        className="[border:none] bg-white absolute top-[853px] left-[685px] rounded-3xs box-border w-[550px] h-[83.75px] border-b-[1.5px] border-solid border-lightseagreen-100"
        type="password"
        placeholder="Password"
        required
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1334px] left-[709px] w-[500px] h-20"
        onClick={onGroupButtonClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-lightseagreen-100 w-[500px] h-20" />
        <div className="absolute top-[20px] left-[198px] text-13xl font-medium font-h4 text-white text-left flex items-center w-[136px]">
          Sign up
        </div>
      </button>
      <h5
        className="m-0 absolute top-[1783px] left-[899px] text-[inherit] font-medium font-inherit text-lightseagreen-100 flex items-center w-[110px] cursor-pointer"
        id="sign-in"
        onClick={onSignInClick}
      >
        Sign in
      </h5>
      <div className="absolute top-[753px] left-[709px] font-medium flex items-center w-[186px]">
        Email
      </div>
      <div className="absolute top-[880px] left-[709px] font-medium flex items-center w-[156px]">
        Password
      </div>
      <div className="absolute top-[1493px] left-[853px] font-medium text-gray-700 flex items-center w-[239px]">
        Or Sign up uisng
      </div>
      <div className="absolute top-[1724px] left-[787px] font-medium flex items-center w-[345px]">
        Already have an account?
      </div>
      <img
        className="absolute top-[464px] left-[857px] w-[207px] h-[173px]"
        alt=""
        src="/ellipse-2.svg"
      />
      <div className="absolute top-[535px] left-[921px] text-13xl font-semibold text-black flex items-center w-[78px] h-[21px]">
        Logo
      </div>
      <img
        className="absolute top-[869px] left-[1134px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/cihide.svg"
      />
      <input
        className="[border:none] bg-white absolute top-[993px] left-[685px] rounded-3xs box-border w-[550px] h-[83.75px] border-b-[1.5px] border-solid border-lightseagreen-100"
        type="text"
        placeholder="ReEnter Password"
        required
      />
      <div className="absolute top-[1003px] left-[709px] font-medium flex items-center w-[265px]">
        ReEnter Password
      </div>
      <img
        className="absolute top-[1009px] left-[1134px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/cihide.svg"
      />
      <img
        className="absolute top-[1557px] left-[973px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/metamask@2x.png"
      />
      <img
        className="absolute top-[1552px] left-[878px] w-[60px] h-[60px] object-cover"
        alt=""
        src="/google@2x.png"
      />
      <div className="absolute top-[1211px] left-[745px] text-5xl tracking-[-0.02em] font-medium text-gray-700 flex items-center w-[490px]">{`I certify that I have read, understand and accept Real Chain World’s `}</div>
      <input
        className="cursor-pointer absolute top-[1211px] left-[696px] bg-lightseagreen-200 w-[30px] h-[30px]"
        type="checkbox"
        required
      />
      <p
        className="m-0 absolute top-[1273px] left-[745px] text-5xl [text-decoration:underline] tracking-[-0.02em] font-medium text-lightseagreen-100 cursor-pointer"
        id="terms"
        onClick={onTermsConditionsClick}
      >{`Terms & Conditions`}</p>
      <img
        className="absolute top-[87px] left-[1773px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/charmcross.svg"
      />
      <img
        className="absolute top-[87px] left-[99px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/materialsymbolsarrowbackrounded1.svg"
      />
    </div>
  );
};

export default SignUpRegister;
