import { useCallback } from "react";
import NavBar2 from "../components/NavBar2";
import AboutProperty from "../components/AboutProperty";
import Documents from "../components/Documents";
import Issuer from "../components/Issuer";
import Footer2 from "../components/Footer2";
import Financials from "../components/Financials";
import Overview from "../components/Overview";
import { useNavigate } from "react-router-dom";

const PropertyPage = () => {
  const navigate = useNavigate();

  const onDocumentsText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='documentsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFinancialsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOwnershipCertificateTextClick = useCallback(() => {
    window.open("N:FYP");
  }, []);

  const onCertifiedCopyTextClick = useCallback(() => {
    window.open("N:FYP");
  }, []);

  const onDocument1TextClick = useCallback(() => {
    window.open("N:FYP");
  }, []);

  const onDocument2TextClick = useCallback(() => {
    window.open("N:FYP");
  }, []);

  const onGroupButtonClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[6596px] overflow-hidden text-left text-13xl text-gray-700 font-h4">
      <div className="absolute top-[648px] left-[0px] rounded-3xs bg-white box-border w-[1920px] h-[81px] border-b-[4px] border-solid border-lightseagreen-100" />
      <div className="absolute top-[681px] left-[296px] font-semibold">
        Photos
      </div>
      <div className="absolute top-[681px] left-[118px] font-semibold text-lightseagreen-100">
        Overview
      </div>
      <div
        className="absolute top-[681px] left-[460px] font-semibold cursor-pointer"
        onClick={onDocumentsText1Click}
      >
        Documents
      </div>
      <div
        className="absolute top-[681px] left-[683px] font-semibold cursor-pointer"
        onClick={onFinancialsTextClick}
      >
        Financials
      </div>
      <div className="absolute top-[155px] left-[0px] w-[1920px] h-[493px] text-29xl text-white font-h2">
        <NavBar2 rectangle29="/rectangle-29@2x.png" />
        <div className="absolute top-[347px] left-[118px] tracking-[-0.02em] font-extrabold">
          Boston Heights
        </div>
        <div className="absolute top-[437px] left-[183px] text-5xl font-h4">{`2972 Westheimer Rd. Santa Ana, Illinois 85486 `}</div>
        <img
          className="absolute top-[429px] left-[118px] w-10 h-10 overflow-hidden"
          alt=""
          src="/bihouselockfill.svg"
        />
      </div>
      <AboutProperty />
      <div
        className="absolute top-[3063px] left-[127px] w-[1528px] h-[778px] text-27xl"
        id="location"
      >
        <label
          className="cursor-pointer absolute top-[0px] left-[0px] font-bold"
          htmlFor="location"
        >
          Location
        </label>
        <iframe className="[border:none] absolute top-[106px] left-[0px] w-[1528px] h-[672px]" />
      </div>
      <div
        className="absolute top-[3936px] left-[0px] w-[1920px] h-[938px] text-9xl"
        id="Documents"
      >
        <Documents />
        <div className="absolute top-[0px] left-[127px] bg-white box-border w-[1027px] h-28 border-b-[7px] border-solid border-lightseagreen-100" />
        <b
          className="absolute top-[32px] left-[159px] text-27xl"
          data-scroll-to="documentsText"
        >
          Documents
        </b>
        <img
          className="absolute top-[225px] left-[127px] w-[1027px] h-[602px]"
          alt=""
          src="/group-8.svg"
        />
        <div className="absolute top-[147px] left-[127px] font-medium">
          You must complete your profile to access the paperwork for this asset.
        </div>
        <div
          className="absolute top-[264px] left-[139px] font-medium cursor-pointer"
          onClick={onOwnershipCertificateTextClick}
        >
          Ownership Certificate
        </div>
        <div
          className="absolute top-[375px] left-[139px] font-medium cursor-pointer"
          onClick={onCertifiedCopyTextClick}
        >
          Certified Copy
        </div>
        <div
          className="absolute top-[468px] left-[139px] font-medium cursor-pointer"
          onClick={onDocument1TextClick}
        >
          Document 1
        </div>
        <div
          className="absolute top-[561px] left-[139px] font-medium cursor-pointer"
          onClick={onDocument2TextClick}
        >
          Document 2
        </div>
        <div className="absolute top-[672px] left-[139px] font-medium">
          Document 3
        </div>
        <div className="absolute top-[765px] left-[139px] font-medium">
          Document 4
        </div>
        <input
          className="absolute top-[264px] left-[1014px] w-[50px] h-[50px] overflow-hidden"
          type="file"
        />
        <img
          className="absolute top-[350px] left-[1012px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/antdesignfilepdftwotone.svg"
        />
        <img
          className="absolute top-[452px] left-[1012px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/antdesignfilepdftwotone.svg"
        />
        <img
          className="absolute top-[554px] left-[1012px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/antdesignfilepdftwotone.svg"
        />
        <img
          className="absolute top-[664px] left-[1012px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/antdesignfilepdftwotone.svg"
        />
        <img
          className="absolute top-[757px] left-[1012px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/antdesignfilepdftwotone.svg"
        />
      </div>
      <article
        className="absolute top-[2070px] left-[1192px] w-[534px] h-[407px] text-left text-5xl text-white font-h4"
        id="issuer"
      >
        <Issuer />
        <b className="absolute top-[35px] left-[120px] text-17xl tracking-[0.02em] leading-[60px]">
          Issuer
        </b>
        <img
          className="absolute h-[12.46%] w-[7.49%] top-[45.73%] right-[78.28%] bottom-[41.81%] left-[14.23%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector336.svg"
        />
        <img
          className="absolute top-[35px] left-[46px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/mdiuser.svg"
        />
        <img
          className="absolute top-[296px] left-[76px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/materialsymbolscallsharp.svg"
        />
        <div className="absolute top-[152px] left-[145px] tracking-[0.02em] leading-[30px] font-medium flex items-center w-[316px]">
          2118 Thornridge Cir. Syracuse, Connecticut 35624
        </div>
        <div className="absolute top-[286px] left-[156px] tracking-[0.02em] leading-[60px] font-medium">
          +91-755-513-7587
        </div>
      </article>
      <footer
        className="absolute top-[6126px] left-[0px] w-[1922px] h-[470px] text-left text-5xl text-gray-100 font-h4"
        id="footer"
      >
        <Footer2
          rectangle68Top="-1px"
          rectangle68BorderRadius="unset"
          rectangle68BoxShadow="unset"
          rectangle68Width="1922px"
          rectangle68Height="471px"
          rectangle68BorderTop="1px solid rgba(43, 40, 51, 0.2)"
          rectangle68BoxSizing="border-box"
        />
        <div className="absolute top-[90px] left-[208px] text-13xl font-semibold">
          LOGO
        </div>
        <b className="absolute top-[59px] left-[1453px] text-13xl text-lightseagreen-100">
          Sellers
        </b>
        <b className="absolute top-[59px] left-[905px] text-13xl text-lightseagreen-100">
          Investors
        </b>
        <div className="absolute top-[134px] left-[906px] font-medium">
          Marketplace
        </div>
        <div className="absolute top-[134px] left-[1453px] font-medium">
          Tokenize Your Property
        </div>
        <div className="absolute top-[202px] left-[1453px] font-medium">
          Terms
        </div>
        <div className="absolute top-[199px] left-[906px] font-medium">
          Learn About Real Chain World
        </div>
        <div className="absolute top-[264px] left-[905px] font-medium">
          Our Team
        </div>
        <div className="absolute top-[374px] left-[42px] bg-lightseagreen-100 w-[1785px] h-[3px]" />
        <div className="absolute top-[402px] left-[969px] text-11xl font-material-icons text-black text-center">
          copyright
        </div>
        <div className="absolute top-[404px] left-[657px] font-semibold">
          All Rights Reserved, 2023 Real Chain World
        </div>
        <img
          className="absolute top-[184px] left-[190px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/biinstagram1.svg"
        />
        <img
          className="absolute top-[184px] left-[265px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/bitwitter1.svg"
        />
        <img
          className="absolute top-[186px] left-[340px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/bimedium1.svg"
        />
      </footer>
      <Financials />
      <Overview />
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[168px] text-5xl font-h2">
        <div className="absolute top-[0px] left-[0px] w-[1920px] h-[168px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1920px] h-[168px]"
            alt=""
            src="/rectangle-1.svg"
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[81.73px] left-[413px] w-[157px] h-[32.92px]"
            onClick={onGroupButtonClick}
          >
            <b className="absolute top-[0px] left-[0px] text-5xl inline-block font-h2 text-lightseagreen-100 text-left w-[157px] h-[32.92px]">
              Marketplace
            </b>
          </button>
          <div className="absolute top-[81.73px] left-[614px] font-semibold inline-block w-[324px] h-[32.92px]">
            Tokenize Your Real Estate
          </div>
          <div className="absolute top-[81.73px] left-[984px] font-semibold inline-block w-[77px] h-[32.92px]">
            About
          </div>
          <img
            className="absolute top-[41.54px] left-[1612px] w-[105px] h-[105px] object-cover"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div className="absolute top-[81.73px] left-[1107px] font-semibold inline-block w-[70px] h-[32.92px]">
            Learn
          </div>
          <div className="absolute top-[81.73px] left-[118px] font-semibold text-gray-100 inline-block w-[74px] h-[32.92px]">
            LOGO
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
