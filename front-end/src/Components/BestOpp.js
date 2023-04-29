import { Link } from "react-router-dom";
const BestOpp = () => {
  return (
    <>
      <section
        className="absolute top-[1400px] left-[0px] w-[1300px] h-[550px] text-left text-gray-700 text-lightseagreen-100 "
        id="best-opportunties"
      >
        <h4 className="absolute top-[0px] left-[120px] text-9xl font-h4 text-center tracking-[-0.01em]">
          Best Opportunities
        </h4>
        <div className="absolute top-[55px] left-[120px] text-4xl font-medium text-gray-700">
          Amet minim mollit non deserunt ullamco est sit aliostrud amet.
        </div>
        <Link to="/marketplace">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[65px] left-[1070px]  text-3xl font-medium flex flex-row items-center justify-center">
            See More
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </section>
      <card className="absolute top-[1540px] left-[105px] w-[300px] h-[300px] text-left text-black ">
        <div className="absolute top-[54px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[320px] h-[300px]" />
        <img
          className="absolute top-[0px] left-[20px] rounded-mini w-[280px] h-[170px] object-cover"
          alt=""
          src={require("../assets//rectangle-10@2x.png")}
        />
        <p className="absolute top-[190px] left-[22px] text-4xl font-medium">
          30 Inlet Cove Cottage
        </p>
        <p className="absolute top-[230px] left-[22px] text-3xl font-light text-gray-700">
          Alexandria, Pakistan
        </p>

        <button className="cursor-pointer [border:none] p-0 bg-lightseagreen-100 absolute top-[295px] left-[03px] rounded-3xs w-[313px] h-[50px]">
          <div className="absolute top-[10px] left-[calc(50%_-_70.5px)] text-4xl font-medium text-white text-left">{`View Property   `}</div>
        </button>
      </card>
      <card className="absolute top-[1540px] left-[485px] w-[300px] h-[300px] text-left text-black ">
        <div className="absolute top-[54px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[320px] h-[300px]" />
        <img
          className="absolute top-[0px] left-[20px] rounded-mini w-[280px] h-[170px] object-cover"
          alt=""
          src={require("../assets//rectangle-10@2x.png")}
        />
        <p className="absolute top-[190px] left-[22px] text-4xl font-medium">
          Icon Valley Gulberg
        </p>

        <p className="absolute top-[230px] left-[22px] text-3xl font-light text-gray-700">
          Lahore, Pakistan
        </p>
        <p className="absolute flex top-[260px] left-[35px] text-3xl font-normal"></p>

        <button className="cursor-pointer [border:none] p-0 bg-lightseagreen-100 absolute top-[295px] left-[03px] rounded-3xs w-[313px] h-[50px]">
          <div className="absolute top-[10px] left-[calc(50%_-_70.5px)] text-4xl font-medium text-white text-left">{`View Property   `}</div>
        </button>
      </card>
      <card className="absolute top-[1540px] left-[865px] w-[300px] h-[300px] text-left text-black ">
        <div className="absolute top-[54px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[320px] h-[300px]" />
        <img
          className="absolute top-[0px] left-[20px] rounded-mini w-[280px] h-[170px] object-cover"
          alt=""
          src={require("../assets//rectangle-10@2x.png")}
        />
        <p className="absolute top-[190px] left-[22px] text-4xl font-medium">
          Icon Valley Gulberg
        </p>

        <p className="absolute top-[230px] left-[22px] text-3xl font-light text-gray-700">
          Lahore, Pakistan
        </p>
        <p className="absolute flex top-[260px] left-[35px] text-3xl font-normal"></p>

        <button className="cursor-pointer [border:none] p-0 bg-lightseagreen-100 absolute top-[295px] left-[03px] rounded-3xs w-[313px] h-[50px]">
          <div className="absolute top-[10px] left-[calc(50%_-_70.5px)] text-4xl font-medium text-white text-left">{`View Property   `}</div>
        </button>
      </card>
    </>
  );
};
export default BestOpp;
