const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  contracts_build_directory: path.join(__dirname, "../front-end/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    sepolia: {
      provider: new HDWalletProvider(
        "train unusual draft cattle submit scene abstract fun maze tube pool stairs",
        "https://sepolia.infura.io/v3/b82a47d147a04ccba954d923f9236bd5"
      ),
      network_id: "11155111",
      gas: 4465030,
    },
  },
};
