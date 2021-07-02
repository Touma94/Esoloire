paymaster = await Paymaster.deployed();
let elec = await Election.deployed();

paymaster.setRelayHub('0x6650d69225CA31049DB7Bd210aE4671c0B1ca132');
paymaster.setTrustedForwarder('0x83A54884bE4657706785D7309cf46B58FE5f6e8a');
paymaster.setTarget(elec.address);
web3.eth.sendTransaction({from: '0x5c6b26c4560e33af33e14f400b2dd65922f913c1', to: paymaster.address, value: 1e16});

Gsn = require("@opengsn/provider");ethers = require("ethers");origProvider = web3.currentProvider;conf = { paymasterAddress: paymaster.address };

gsnProvider = await Gsn.RelayProvider.newProvider({provider: origProvider, config: conf}).init();
provider = new ethers.providers.Web3Provider(gsnProvider);

acct = provider.provider.newAccount();signer = provider.getSigner(acct.address, acct.privateKey);elec.donnerDroitDeVote(acct.address);
contract = await new ethers.Contract(elec.address, elec.abi, signer);

transaction = await contract.voter(1)
receipt = await provider.waitForTransaction(transaction.hash)

// receipt.logs.map(entry => contract.interface.parseLog(entry))[1].values._toacct.address