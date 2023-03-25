import { useCallback } from "react";

const SignIn = () => {
  const onMetaMaskIconClick = useCallback(() => {
    window.open("https://metamask.io/");
  }, []);

  const onGoogleImageClick = useCallback(() => {
    window.open("https://accounts.google.com");
  }, []);

  return (
    <div className="relative bg-white w-full h-[1784px] overflow-hidden text-left text-9xl text-gray-400 font-h4">
      <b className="absolute top-[238px] left-[829px] text-29xl tracking-[-0.02em] flex font-h2 text-lightseagreen-100 items-center w-[263px]">
        Welcome
      </b>
      <div className="absolute top-[654px] left-[685px] rounded-3xs bg-white box-border w-[550px] h-[83.75px] border-b-[1.5px] border-solid border-lightseagreen-100" />
      <div className="absolute top-[778px] left-[685px] rounded-3xs bg-white box-border w-[550px] h-[83.75px] border-b-[1.5px] border-solid border-lightseagreen-100" />
      <div className="absolute top-[1012px] left-[710px] rounded-xl bg-lightseagreen-100 w-[500px] h-20" />
      <div className="absolute top-[1035px] left-[908px] text-13xl font-medium text-white flex items-center w-[105px]">
        Log in
      </div>
      <div className="absolute top-[1557px] left-[905px] font-medium text-lightseagreen-100 flex items-center w-[110px]">
        Sign Up
      </div>
      <div className="absolute top-[678px] left-[709px] font-medium flex items-center w-[186px]">
        Email
      </div>
      <div className="absolute top-[805px] left-[709px] font-medium flex items-center w-[156px]">
        Password
      </div>
      <div className="absolute top-[877px] left-[976px] font-semibold text-gray-700 flex items-center w-[247px]">
        Forget Password?
      </div>
      <div className="absolute top-[1138px] left-[853px] font-medium text-gray-700 flex items-center w-[214px]">
        Or Sign in uisng
      </div>
      <div className="absolute top-[1491px] left-[793px] font-medium flex items-center w-[334px]">
        Don’t have an account?
      </div>
      <img
        className="absolute top-[389px] left-[857px] w-[207px] h-[173px]"
        alt=""
        src="/ellipse-2.svg"
      />
      <div className="absolute top-[460px] left-[921px] text-13xl font-semibold text-black flex items-center w-[78px] h-[21px]">
        Logo
      </div>
      <img
        className="absolute top-[794px] left-[1134px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/cihide1.svg"
      />
      <img
        className="absolute top-[1209px] left-[973px] w-[50px] h-[50px] object-cover cursor-pointer"
        alt=""
        src="/metamask@2x.png"
        onClick={onMetaMaskIconClick}
      />
      <img
        className="absolute top-[1204px] left-[877px] w-[60px] h-[60px] object-cover cursor-pointer"
        alt=""
        src="/google@2x.png"
        onClick={onGoogleImageClick}
      />
      <img
        className="absolute top-[85px] left-[1770px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/charmcross.svg"
      />
      <img
        className="absolute top-[85px] left-[96px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/materialsymbolsarrowbackrounded2.svg"
      />
    </div>
  );
};

export default SignIn;
