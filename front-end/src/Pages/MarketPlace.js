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
        <div className="relative top-[05px] ml-2 rounded-lg w-1/5 h-[80px] bg-black">
          <p className="relative top-[05px] ml-4 left-[05px] text-xxxs text-[16px]  text-white font-medium">
            city
          </p>
          <input
            className="relative top-[2px] ml-4 w-4/5 h-[40px] bg-white text-gray-900 text-sm p-2.5 focus:outline-none focus:border-none"
            placeholder="Lahore"
            required
          />
        </div>
        <div className="relative top-[05px] ml-2 rounded-lg w-3/5 h-[80px] bg-black"></div>
        <div className="relative top-[05px] ml-2 rounded-lg w-1/6 h-[80px] bg-black"></div>
      </div>
    </>
  );
};

export default MarketPlace;
