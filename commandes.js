paymaster = await Paymaster.deployed();
elec = await Election.deployed();
paymaster.setRelayHub('0xA703037bCaF8A31a466BD28A260ac646A083361a');
paymaster.setTrustedForwarder('0xeB230bF62267E94e657b5cbE74bdcea78EB3a5AB');
paymaster.setTarget(elec.address);
web3.eth.sendTransaction({from: '0x5c6b26c4560e33af33e14f400b2dd65922f913c1', to: paymaster.address, value: 1e16});

Gsn = require("@opengsn/provider");ethers = require("ethers");origProvider = web3.currentProvider;conf = { paymasterAddress: paymaster.address };

acct = provider.provider.newAccount();
signer = provider.getSigner(acct.address, acct.privateKey);
contract = await new ethers.Contract(elec.address, elec.abi, signer);