const RealEstate = artifacts.require("PropertyRegistry");

module.exports = function (deployer) {
  deployer.deploy(RealEstate);
};
