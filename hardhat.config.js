require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    arbitrumSepolia: {
      url: "https://rpc.open-campus-codex.gelato.digital",
      chainId: 656476,
      // Add your private key or mnemonic here if needed
      // accounts: [`0x${YOUR_PRIVATE_KEY}`]
    },
  },
};
