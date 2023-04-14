const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const WalletConnectProvider = require("@walletconnect/web3-provider");

const providerOptions = {
  rpc: {
    1: "https://mainnet.infura.io/v3/a0cee7ad138844a59605683f18af97c1",
    5: "https://goerli.infura.io/v3/a0cee7ad138844a59605683f18af97c1",
    11155111: "https://sepolia.infura.io/v3/a0cee7ad138844a59605683f18af97c1",
  },
};
const provider = new WalletConnectProvider({ providerOptions });

const web3 = new Web3(provider);

async function connectWallet() {
  await provider.enable();
  const accounts = await web3.eth.getAccounts();
  console.log("Connected to Ethereum address:", accounts[0]);
}

// call connectWallet function when the button is clicked
document.getElementById("connectWalletButton").addEventListener("click", connectWallet);
