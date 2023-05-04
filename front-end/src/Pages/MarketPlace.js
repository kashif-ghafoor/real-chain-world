import NavBar from "./NavBar";

const MarketPlace = () => {
  return (
    <>
      <NavBar />

      <div className="absolute top-[100px]  w-screen h-[535px] text-left text-17xl text-lightseagreen-100 font-h2">
        <img
          className="absolute top-[0px] left-[0px] w-screen h-[460px] object-cover"
          alt=""
          src={require("../assets/hero1.jpg")}
        />
        <div className="absolute top-[180px] left-[100px] w-[550px] h-[120px] bg-gray-500">
          <p className="relative top-[05px] left-[10px] text-9xl tracking-[-0.02em] text-white font-bold w-[450px]">
            Find New Projects in Pakistan
          </p>
          <p className="relative top-[15px] left-[10px] text-xxxs  text-[14px] tracking-[-0.001em] text-white font-normal w-[480px]">
            Real Chain World provides you with a vibe of what every day looks
            like in different housing societies of Pakistan
          </p>
        </div>
      </div>
      <div className="absolute top-[480px] ml-60 rounded-lg w-4/6 h-[160px] bg-white flex">
        <div className="relative top-[05px] ml-2 rounded-lg w-1/5 h-[80px] bg-white">
          <p className="relative top-[05px] ml-4 left-[05px] text-xxs text-[17px]  text-black font-medium">
            City
          </p>
          <input
            className="relative top-[2px] ml-4 w-4/5 h-[40px] bg-white text-gray-900 text-sm p-2.5 focus:outline-none focus:border-none"
            placeholder="Lahore"
            required
          />
        </div>
        <div className="relative top-[15px] w-0.5 h-[60px] bg-gray-300"></div>
        <div className="relative top-[05px] ml-2 rounded-lg w-3/5 h-[80px] bg-white">
          <p className="relative top-[05px] ml-4 left-[05px] text-xxs text-[17px]  text-black font-medium">
            Project Title
          </p>
          <input
            className="relative top-[2px] ml-4 w-5/6 h-[40px] bg-white text-gray-900 text-sm p-2.5 focus:outline-none focus:border-none"
            placeholder="Title"
            required
          />
        </div>
        <div className="relative top-[15px] w-0.5 h-[60px] bg-gray-300"></div>
        <button className="relative top-[12px] px-6 ml-6 mr-6 rounded w-1/6 h-[60px] bg-lightseagreen-100 text-[18px] text-white font-medium inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <span>Search</span>
        </button>
      </div>
    </>
  );
};

export default MarketPlace;
