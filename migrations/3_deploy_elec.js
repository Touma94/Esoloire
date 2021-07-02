var Election = artifacts.require("./Election.sol");
module.exports = function(deployer, network) {
      deployer.deploy(Election, "0xeB230bF62267E94e657b5cbE74bdcea78EB3a5AB");
};