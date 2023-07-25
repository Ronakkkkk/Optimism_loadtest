require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
const optimismGoerliUrl = 
  process.env.ALCHEMY_API_KEY ? 
    `https://opt-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}` :
    process.env.OPTIMISM_GOERLI_URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    "local-devnode": {
       url: "http://localhost:8545",
       accounts: { mnemonic: "test test test test test test test test test test test junk" }
    },
  "optimism-goerli": {
    url: optimismGoerliUrl,
    accounts: { mnemonic: process.env.MNEMONIC }
  }
 }  
};
