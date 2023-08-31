const PropertyFactory = artifacts.require("PropertyFactory");

module.exports = function (deployer, network, accounts) {
  // Use the first account for the companyAddress
  const companyAddress = accounts[1];

  deployer.deploy(PropertyFactory, companyAddress);
};
