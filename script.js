const infuraProjectId = "a0cee7ad138844a59605683f18af97c1";
const web3 = new Web3(`https://mainnet.infura.io/v3/a0cee7ad138844a59605683f18af97c1`);

async function connectWallet() {
  const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  if (accounts.length > 0) {
    const balance = await web3.eth.getBalance(accounts[0]);
    const balanceEth = web3.utils.fromWei(balance, "ether");
    document.getElementById("connectButton").innerHTML = accounts[0];
    document.getElementById("connectButton").classList.remove("connect");
    document.getElementById("connectButton").classList.add("address");
    alert(`Your ether balance is: ${balanceEth} ETH`);
  } else {
    alert("User rejected the request to connect the wallet");
  }
}

document.getElementById("connectButton").addEventListener("click", () => {
  connectWallet();
});
