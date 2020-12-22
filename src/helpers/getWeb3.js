import Web3 from "web3";

const getWeb3 = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();

    return true;
  }

  return false;
};

export default getWeb3;
