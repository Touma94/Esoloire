var Paymaster = artifacts.require("./Paymaster.sol");
var Election = artifacts.require("./Election.sol");

module.exports = function(deployer, network) {
  deployer.deploy(Paymaster);
  if (network == "development") {
    var Forwarder = artifacts.require("./Forwarder.sol");
    deployer.deploy(Forwarder).then(function() {
      return deployer.deploy(Election, Forwarder.address);
    });
  } else {
    deployer.deploy(Election, "0xeB230bF62267E94e657b5cbE74bdcea78EB3a5AB");
  }
};