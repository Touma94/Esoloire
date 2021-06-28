App = {
  web3Provider: null,
  contracts: {},
  account: '0xBED9646559c43896edD205Ab7Ee85201e45d038a',

  init: async function () {
    return await App.initWeb3();
  },

  initWeb3: async function () {
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        await window.ethereum.enable();
      } catch (error) {
        console.error("User denied account access")
      }
    }
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      console.log('web3 initialise')
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function () {
    $.getJSON("Election.json", function (election) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Election = TruffleContract(election);
      // Connect provider to interact with contract
      App.contracts.Election.setProvider(App.web3Provider);

      // App.listenForEvents();
      return App.getInfos();
    });
  },

  getInfos: function () {
    // $(document).on('click', '.btn-adopt', App.handleAdopt);
      console.log("your acc : ", App.account);
      let instance = await App.contracts.Election.deployed();
      let cpt = await instance.nbrCandidats();
      let cptn = cpt.toNumber()
      console.log(cptn);
      let candidats = [];
      for (let i=0, i < cpt, i++){
        let cd = await app.candidats(1);
        candidats[i] = cd[1].toNumber();
      }
      console.log(candidats) 
  },


};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
