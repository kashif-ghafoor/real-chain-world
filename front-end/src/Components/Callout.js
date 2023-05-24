import { Link } from "react-router-dom";
const Callout = () => {
  return (
    <div className="m-28 h-[180px] overflow-hidden">
      <section
        className="flex flex-col items-start justify-start gap-[16px] text-left text-5xl text-gray-100 "
        id="callout"
      >
        <div className="relative font-medium">
          Have a property to list or project to fund?
        </div>
        <div className="rounded-xl bg-lightseagreen-100 w-[120px] h-1.5 shrink-0" />
        <div className="relative text-3xl font-normal">
          We're eager to hear from you, contact us today so we can discuss it
          further
        </div>
        <Link to="/Tokenization">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[250px] h-[55px] shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-blue-for-button w-[250px] h-[55px]" />
            <div className="absolute top-[12px] left-[15px] text-4xl font-medium text-white text-left">
              Tokenize your property
            </div>
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Callout;
