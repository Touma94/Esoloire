var Paymaster = artifacts.require("./Paymaster.sol");
var Election = artifacts.require("./Election.sol");
var Forwarder = artifacts.require("./Forwarder.sol")


module.exports = function(deployer, network) {
  deployer.deploy(Paymaster);
  if (network == "development") {
    deployer.deploy(Forwarder).then(function() {
      return deployer.deploy(Election, Forwarder.address);
    });
  } else {
    deployer.deploy(Election, "");
  }
};