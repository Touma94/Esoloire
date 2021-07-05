if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/e159e978c0b644adb6bf801eff4c8f71");
      },
      network_id: '3',
    },
    rinkerby: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/v3/e159e978c0b644adb6bf801eff4c8f71");
      },
      network_id: '4',
    },
  },
  compilers: {
    solc: {
      version: ">=0.7.6"
    }
  },
};

(function() {
  MNEMONIC = "thunder easy admit betray diamond gather glance differ city name brown soldier budget sea borrow";
  module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*"
      },
      ropsten: {
        provider: function() {
          return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/e159e978c0b644adb6bf801eff4c8f71");
        },
        network_id: '3',
      },
      rinkerby: {
        provider: function() {
          return new HDWalletProvider(MNEMONIC, "https://rinkeby.infura.io/v3/e159e978c0b644adb6bf801eff4c8f71");
        },
        network_id: '4',
      },
    },
    compilers: {
      solc: {
        version: ">=0.7.6"
      }
    },
  };

})();