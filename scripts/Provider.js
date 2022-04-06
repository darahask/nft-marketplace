import Web3Modal from "web3modal";
import { ethers } from "ethers";

export async function getProviderOrSigner(signer = false) {
    let modal = new Web3Modal();
    let provider = await modal.connect();
    let web3provider = new ethers.providers.Web3Provider(provider);
    if (signer) {
        return web3provider.getSigner();
    }
    return web3provider;
}
