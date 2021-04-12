const { ethers } = require("ethers");

const NETWORK = process.env['NETWORK'];
const INFURA_PROJECT_ID = process.env['INFURA_PROJECT_ID']
const MAINNET_DEPLOYER_ACCOUNT = process.env['MAINNET_DEPLOYER_ACCOUNT']

const provider = new ethers.providers.InfuraProvider(NETWORK, INFURA_PROJECT_ID);

const accountBalance = async(address) => {
  let bal = ethers.utils.formatUnits((await provider.getBalance(address)), unit = "ether");
  bal = Number(bal);
  if(bal < 1){
    // edit over here to send out an email
    console.log(`Current Ether Balance {${bal}} is LOW. Please top-up.`)
  };
}

accountBalance(MAINNET_DEPLOYER_ACCOUNT);