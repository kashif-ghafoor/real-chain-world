const PropertyFactory = artifacts.require("PropertyFactory");
const Property = artifacts.require("Property");

contract("PropertyFactory", ([deployer, user, ...accounts]) => {
  let propertyFactory;
  const apiId = "this is apiId";
  const propertyAddress = "Property 1 address";
  const initialPrice = 500; // let's say 500 wei
  const supply = 1000; // let's say 1000 tokens
  let requestId;

  before(async function () {
    propertyFactory = await PropertyFactory.new(deployer);
  });

  it("User should create a new property tokenization request", async function () {
    const response = await propertyFactory.createPropertyTokenizeRequest(
      propertyAddress,
      apiId,
      initialPrice,
      supply,
      { from: user }
    );
    requestId = response.logs[0].args.id; // Assuming id is the first argument in the NewPropertyValidationRequested event
    assert.equal(response.logs[0].event, "NewPropertyValidationRequested", "Wrong event triggered");
  });

  it("Admin should see the requests and suggest a price", async function () {
    const suggestedPrice = 1000; // let's say 1000 wei
    const response = await propertyFactory.suggestPrice(requestId, suggestedPrice, {
      from: deployer,
    });
    assert.equal(response.logs[0].event, "PriceSuggested", "Wrong event triggered");
  });

  it("User should accept the suggested price", async function () {
    const response = await propertyFactory.acceptPrice(requestId, { from: user });
    assert.equal(response.logs[0].event, "PriceAccepted", "Wrong event triggered");
  });

  it("Admin should create the property", async function () {
    const response = await propertyFactory.createProperty(requestId, { from: deployer });
    assert.equal(response.logs[0].event, "NewPropertyAdded", "Wrong event triggered");

    const propertyAddress = response.logs[0].args.property; // Assuming property address is the second argument in the NewPropertyAdded event
    const property = await Property.at(propertyAddress);
    const propertyInfo = await property.propertyInfo();

    // Here you can perform more checks on the property contract if needed
    const propertyApiId = propertyInfo._apiId;
    assert.equal(propertyApiId, "this is apiId", "Property apiId does not match");

    const propertyOwner = await property.owner();
    assert.equal(propertyOwner, user, "Property owner does not match");
  });

  it("owner should have one property now", async function () {
    const properties = await propertyFactory.getPropertiesOfOwner(user);
    assert.equal(properties.length, 1, "One property should exist for the owner now");
  });

  it("show property info", async function () {
    const properties = await propertyFactory.getPropertiesOfOwner(user);
    const property = await Property.at(properties[0]);
    const propertyInfo = await property.propertyInfo();
    console.log("propertyInfo", propertyInfo._price);
    assert.equal(propertyInfo._apiId, "this is apiId", "Property apiId does not match");
    assert.equal(propertyInfo._address, "Property 1 address", "Property address does not match");
    assert.equal(propertyInfo.price, 1000, "Property price does not match");
  });
});

// contract("PropertyFactory", (accounts) => {
//   const ownerAccount = accounts[0];
//   const companyAccount = accounts[1];
//   console.log("company Account", companyAccount);

//   const property1 = {
//     address: "Property 1 address",
//     description: "Property 1 description",
//     price: 100,
//   };
//   let factoryInstance;

//   beforeEach(async () => {
//     // create factory Instance and pass companyAccount parameter to constructor
//     factoryInstance = await PropertyFactory.new(companyAccount);
//   });

//   describe("Property Tokenization Request", () => {
//     it("Should create a new property tokenization request", async () => {
//       let listBeforeRequest = await factoryInstance.getPropertyRequestsByOwner(ownerAccount);
//       await factoryInstance.createPropertyTokenizeRequest(
//         property1.address,
//         property1.description,
//         { from: ownerAccount }
//       );
//       let listAfterRequest = await factoryInstance.getPropertyRequestsByOwner(ownerAccount);

//       assert.equal(
//         listAfterRequest.length,
//         listBeforeRequest.length + 1,
//         "Property tokenization request was not created successfully"
//       );
//     });

//     it("New property tokenization request info should be equal to the sent params", async () => {
//       await factoryInstance.createPropertyTokenizeRequest(
//         property1.address,
//         property1.description,
//         { from: ownerAccount }
//       );
//       let propertiesList = await factoryInstance.getPropertyRequestsByOwner(ownerAccount);
//       let newRequest = propertiesList[0];

//       assert.equal(property1.address, newRequest.propertyInfo._address, "Wrong property's address");
//       assert.equal(
//         property1.description,
//         newRequest.propertyInfo._description,
//         "Wrong property's description"
//       );
//     });

//     it("Company can suggest price", async () => {
//       await factoryInstance.createPropertyTokenizeRequest(
//         property1.address,
//         property1.description,
//         { from: ownerAccount }
//       );

//       let propertiesList = await factoryInstance.getPropertyRequestsByOwner(ownerAccount);
//       let newRequest = propertiesList[0];
//       console.log("newRequest id", newRequest.propertyInfo.id);

//       await factoryInstance.suggestPrice(newRequest.propertyInfo.id, property1.price, {
//         from: companyAccount,
//       });
//       let updatedRequest = (await factoryInstance.getPropertyRequestsByOwner(ownerAccount))[0];
//       console.log("updatedRequest", updatedRequest);

//       assert.equal(property1.price, updatedRequest.suggestedPrice, "Wrong suggested price");
//     });

//     it("Owner can accept suggested price", async () => {
//       await factoryInstance.createPropertyTokenizeRequest(
//         property1.address,
//         property1.description,
//         { from: ownerAccount }
//       );
//       let propertiesList = await factoryInstance.getPropertyRequestsByOwner(ownerAccount);
//       let newRequest = propertiesList[0];

//       await factoryInstance.suggestPrice(newRequest.propertyInfo.id, property1.price, {
//         from: companyAccount,
//       });
//       await factoryInstance.acceptPrice(newRequest.propertyInfo.id, { from: ownerAccount });

//       let updatedRequest = (await factoryInstance.getPropertyRequestsByOwner(ownerAccount))[0];

//       assert.equal(property1.price, updatedRequest.propertyInfo.price, "Price was not accepted");
//     });
//   });
// });
