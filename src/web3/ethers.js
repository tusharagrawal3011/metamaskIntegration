import { ethers } from "ethers";
const provider =
  window.ethereum != null
    ? new ethers.providers.Web3Provider(window.ethereum)
    : ethers.providers.getDefaultProvider();

export const connectwallet = async () => {
  await provider.send("eth_requestAccounts", []);
  const address = await accountChangedHandler(provider.getSigner());
  return address;
};

export const accountChangedHandler = async (newAccount) => {
  const address = await newAccount.getAddress();
  return address;
};
