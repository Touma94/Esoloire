let Web3 = require( 'web3')
const gsn = require('@opengsn/provider')
const ethers = require("ethers")
const config = require("./truffle-config")

const conf = {
	ourContract: '0x40376aa2891436dd7EBc305b2041939ECd98d515',
	paymaster: '0x9e59f087129F92ddDe8Ce90c204fec6423897199',
    forwarder: '0x83A54884bE4657706785D7309cf46B58FE5f6e8a',
	gasPrice:  16000000000   // 16 Gwei
}

const web3 = new Web3(provider);
origProvider = web3.currentProvider

let gsnProvider = await new gsn.RelayProvider(origProvider, {
            forwarderAddress: conf.forwarder,
            paymasterAddress: conf.paymaster,
            verbose: false}).init()

provider = new ethers.providers.Web3Provider(gsnProvider)
userAddr = gsnProvider.origProvider.selectedAddress



acct = provider.provider.newAccount()
signer = provider.getSigner(acct.address, acct.privateKey)
contract = await new ethers.Contract(flag.address, flag.abi, signer)
transaction = await contract.captureFlag()
receipt = await provider.waitForTransaction(transaction.hash)