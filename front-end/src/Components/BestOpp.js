import { Link } from "react-router-dom";
import SingleProperty from "./SingleProperty";
const BestOpp = () => {
  return (
    <>
      <div className="ml-24 mt-28" id="best-opportunties">
        <div className=" h-[130px] text-left text-gray-700 text-lightseagreen-100 flex">
          <div className="flex-column justify-between">
            <h4 className="text-9xl font-h4 tracking-[-0.01em]">
              Best Opportunities
            </h4>
            <p className="mt-4 text-4xl font-medium text-gray-500">
              Start investing flexibly, wherever you are in the world
            </p>
          </div>
          <Link to="/marketplace">
            <button className="cursor-pointer [border:none] mt-16 pl-96 bg-[transparent] text-3xl font-medium items-center flex">
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
        </div>
        <div className="m-2 flex justify-between w-[1000px]">
          <SingleProperty buttonText="View Property" />
          <SingleProperty buttonText="View Property" />
          <SingleProperty buttonText="View Property" />
        </div>
      </div>
    </>
  );
};
export default BestOpp;
