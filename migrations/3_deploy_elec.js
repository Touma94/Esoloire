var Election = artifacts.require("./Election.sol");
module.exports = function(deployer) {
      deployer.deploy(Election, "0x83A54884bE4657706785D7309cf46B58FE5f6e8a");
};