App = {
  web3Provider: null,
  contracts: {},
  account: '0xBED9646559c43896edD205Ab7Ee85201e45d038a',
  web3: null,

  init: async function () {
    return await App.initWeb3();
  },

  initWeb3: async function () {
    const { RelayProvider } = require('@opengsn/provider')
    const config = { 
      paymasterAddress
    }
    App.web3Provider = await RelayProvider.newProvider({ provider: new Web3.providers.HttpProvider('http://localhost:7545'), config }).init()
    // if (window.ethereum) {
    //   App.web3Provider = window.ethereum;
    //   try {
    //     await window.ethereum.enable();
    //   } catch (error) {
    //     console.error("User denied account access")
    //   }
    // }
    // else if (window.web3) {
    //   App.web3Provider = window.web3.currentProvider;
    // }
    // else {
      // App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      console.log('web3 initialise')
    // }
    App.web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function () {
    $.getJSON("Election.json", function (election) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Election = TruffleContract(election);
      // Connect provider to interact with contract
      App.contracts.Election.setProvider(App.web3Provider);

      // App.listenForEvents();
      App.getInfos();
    });
  },

  getInfos: async function () {
      let instance = await App.contracts.Election.deployed();
      let cpt = await instance.nbrCandidats();
      let candidats = [];
      for (let i=1; i <= cpt; i++){
        let cd = await instance.candidats(i);
        candidats[i-1] = cd[1];
      }
      // App.getResultats();
      return candidats;
  },

  getResultats: async function () {
    let instance = await App.contracts.Election.deployed();
    let total = await instance.totalVotes();
    let cpt = await instance.nbrCandidats();
    let resultat = {nom:['total'], nbrVotes:[total.toNumber()]};
    for (let i=1; i <= cpt; i++){
      let cd = await instance.candidats(i);
      resultat.nom[i] = cd[1]
      resultat.nbrVotes[i] = cd[2].toNumber();
    }
    return resultat;
  },

};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
