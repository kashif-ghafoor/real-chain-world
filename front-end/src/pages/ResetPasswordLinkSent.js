const ResetPasswordLinkSent = () => {
  return (
    <div className="relative bg-white w-full h-[1502px] overflow-hidden text-left text-13xl text-lightseagreen-100 font-h4">
      <div className="absolute top-[396.25px] left-[673px] rounded-3xs bg-white box-border w-[574px] h-[507.75px] border-t-[1.5px] border-solid border-lightseagreen-100" />
      <div className="absolute top-[638px] left-[796px] font-semibold flex items-center w-[362px]">
        Link Sent Successfully
      </div>
      <img
        className="absolute top-[140px] left-[146px] w-[207px] h-[173px]"
        alt=""
        src="/ellipse-2.svg"
      />
      <div className="absolute top-[211px] left-[210px] font-semibold text-black flex items-center w-[78px] h-[21px]">
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
      <img
        className="absolute top-[444px] left-[900px] w-[120px] h-[120px] overflow-hidden"
        alt=""
        src="/done.svg"
      />
      <div className="absolute top-[751px] left-[738px] text-[20px] font-medium text-gray-500 flex items-center w-[479px]">
        Your password has not been changed since more than 90 days. so, We
        dropped you an email containing your reset link. Click on it to reset
        your password.
      </div>
    </div>
  );
};

export default ResetPasswordLinkSent;
