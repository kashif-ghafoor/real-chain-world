import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const About = () => {
  return (
    <>
      <NavBar />
      <div class="h-[500px] flex justify-between bg-blue ">
        <div className="w-[70%] m-28 text-white ">
          <h1 className="text-center text-9xl font-semibold">About Us</h1>
          <p className="text-center mt-6 text-29xl font-semibold ">
            We're on a Mission to Change View <br />
            of RealEstate Field.
          </p>
        </div>
        <div className="w-[30%]">
          <img
            className="mt-10 w-[400px] h-[400px]"
            alt=""
            src="/about-bg.svg"
          />
        </div>
      </div>
      <div className="w-[80%] m-36 p-10 mt-12 bg-lightseagreen-300 flex rounded-2xl shadow-lg">
        <img
          className="h-[100px] w-[100px] rounded-t-lg object-cover bg-blue "
          alt=""
          src="/Global .svg"
        />
        <div className="pl-8 ">
          <h2 className="text-blue font-semibold font-serif text-13xl ">
            Our Mission
          </h2>
          <p className="text-gray-500 text-4xl font-semibold">
            Revolutionizing real estate investment through blockchain, we
            democratize access, foster trust, and drive sustainability. Our
            secure platform enables fractional ownership, expanding
            opportunities for investors and property owners. With transparency
            and integrity at the core, we create a win-win scenario, unlocking
            value for all stakeholders. Dedicated to positive social impact, we
            transform the industry through responsible practices. Together, we
            reimagine real estate investment, powered by blockchain technology.
          </p>
        </div>
      </div>
      <p className="mt-28 text-center text-21xl font-semibold text-blue">
        Our Team
      </p>
      <div className="m-32 flex flex-row flex-wrap gap-24 justify-center items-center">
        <div className="p-8 w-[380px] flex flex-col text-center justify-center items-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <img
            className="h-[200px] w-[200px] rounded-full object-cover rounded-11xl"
            alt=""
            src={require("../assets/drAdnan.jpeg")}
          />
          <div className="flex flex-col p-6">
            <h5 className="mb-2 text-9xl font-bold text-gray-100">
              Dr. Adnan Idris
            </h5>
            <p className="mb-4 text-center text-blue text-7xl">Supervisor</p>
            <div className="mt-6">
              <button className="rounded-lg w-[170px] h-[50px] bg-lightseagreen-100 text-white font-medium text-4xl">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="p-8 w-[380px] flex flex-col text-center justify-center items-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <img
            className="h-[200px] w-[200px] rounded-full object-cover rounded-11xl"
            alt=""
            src={require("../assets/Kashif.jpeg")}
          />
          <div className="flex flex-col p-6">
            <h5 className="mb-2 text-9xl font-bold text-gray-100">
              Kashif Ghafoor.
            </h5>
            <p className="mb-4 text-center text-blue text-7xl">Group Leader</p>
            <div className="mt-6">
              <button className="rounded-lg w-[170px] h-[50px] bg-lightseagreen-100 text-white font-medium text-4xl">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="p-8 w-[380px] flex flex-col text-center justify-center items-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <img
            className="h-[200px] w-[200px] rounded-full object-cover rounded-11xl"
            alt=""
            src={require("../assets/Nazia.jpeg")}
          />
          <div className="flex flex-col p-6">
            <h5 className="mb-2 text-9xl font-bold text-gray-100">
              Nazia Suleman
            </h5>
            <p className="mb-4 text-center text-blue text-7xl">Member</p>
            <div className="mt-6">
              <button className="rounded-lg w-[170px] h-[50px] bg-lightseagreen-100 text-white font-medium text-4xl">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="p-8 w-[380px] flex flex-col text-center justify-center items-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <img
            className="h-[200px] w-[200px] rounded-full object-cover rounded-11xl"
            alt=""
            src={require("../assets/faizan.jpeg")}
          />
          <div className="flex flex-col p-6">
            <h5 className="mb-2 text-9xl font-bold text-gray-100">
              Faizan Faryad
            </h5>
            <p className="mb-4 text-center text-blue text-7xl">Member</p>
            <div className="mt-6">
              <button className="rounded-lg w-[170px] h-[50px] bg-lightseagreen-100 text-white font-medium text-4xl">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="p-8 w-[380px] flex flex-col text-center justify-center items-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <img
            className="h-[200px] w-[200px] rounded-full object-cover rounded-11xl"
            alt=""
            src={require("../assets/Waqar.jpeg")}
          />
          <div className="flex flex-col p-6">
            <h5 className="mb-2 text-9xl font-bold text-gray-100">
              Waqar Ahmed
            </h5>
            <p className="mb-4 text-center text-blue text-7xl">Member</p>
            <div className="mt-6">
              <button className="rounded-lg w-[170px] h-[50px] bg-lightseagreen-100 text-white font-medium text-4xl">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
