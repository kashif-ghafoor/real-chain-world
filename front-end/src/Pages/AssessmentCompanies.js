import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CompanyCard from "../Components/CompanyCard";

const AssessmentCompanies = () => {
  const cardData = [
    {
      id: 1,
      companyName: "Trust Estate",
      description: "Description about companies",
      imageSrc: require("../assets/company1.png"),
    },
    {
      id: 2,
      companyName: "Company 2",
      description: "Description about companies",
      imageSrc: require("../assets/company1.png"),
    },
    {
      id: 3,
      companyName: "Company 3",
      description: "Description about companies",
      imageSrc: require("../assets/company1.png"),
    },
    {
      id: 4,
      companyName: "Company 4",
      description: "Description about companies",
      imageSrc: require("../assets/company1.png"),
    },
    {
      id: 5,
      companyName: "Company 5",
      description: "Description about companies",
      imageSrc: require("../assets/company1.png"),
    },
    // Add more card data objects as needed
  ];
  return (
    <>
      <NavBar />
      <div className="bg-gray-200 pb-56">
        <div className="h-[405px] text-17xl text-lightseagreen-100 ">
          <img
            className="w-screen h-[400px] object-cover"
            alt=""
            src={require("../assets/companies.png")}
          />
          <div className="flex justify-center">
            <p className="absolute top-[300px] text-27xl tracking-[-0.02em] text-white font-medium ">
              Find Companies to Assess your Property
            </p>
          </div>
        </div>
        <div className=" flex mt-12 ml-32 rounded-lg bg-lightseagreen-300 w-[60%] h-[230px] shadow-lg">
          <p className="text-serif p-16 w-[78%] text-7xl font-sans font-semibold text-blue">
            Get the updated value, condition, or other relevant factors related
            to a your property...
          </p>
          <img
            className="w-[180px] h-[180px] pt-8  object-cover "
            alt=""
            src="/assess.svg"
          />
        </div>
        <div className="ml-32 md:ml-40 mt-24 mr-28 ">
          <div className="flex flex-row flex-wrap gap-20">
            {cardData.map((card) => (
              <CompanyCard
                key={card.id}
                companyName={card.companyName}
                description={card.description}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AssessmentCompanies;
