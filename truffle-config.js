const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 7545
    },

      ropsten: {
          provider: () => 
            new HDWalletProvider(
              process.env.MNEMONIC,
              `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
          ),
         network_id: 3
  }
},

 //Ajouter cette partie (ou décommenter directement dans le fichier):
 compilers: {
   solc: {
     version: "0.8.9", // Récupérer la version exacte de solc-bin (par défaut : la  version de truffle)
    // settings: {  // Voir les documents de solidity pour des conseils sur l'optimisation et l'evmVersion
    //   optimizer: {
    //   enabled: false,
    //   runs: 200
    //   },
    //  }
   },
 },
};



