import Link from "next/link";
import "../styles/globals.css";
import { useState } from "react";
import { getProviderOrSigner } from "../scripts/Provider";

function MyApp({ Component, pageProps }) {
    let [connected, setConnected] = useState(false);

    let connectToNetwork = async () => {
        let web3provider = await getProviderOrSigner();
        let { chainId } = await web3provider.getNetwork();
        if (chainId !== 4) {
            window.alert("Change the network to rinkeby");
            return;
        }
        setConnected(true);
    };

    return (
        <div>
            {!connected ? (
                <div className="flex h-screen justify-center items-center">
                    <p className="text-4xl font-bold">NFT Marketplace</p>
                    <button
                        className="p-3 ml-6 bg-red-500 text-white rounded-full"
                        onClick={connectToNetwork}
                    >
                        Connect to wallet
                    </button>
                </div>
            ) : (
                <>
                    <nav className="border-b p-6">
                        <p className="text-4xl font-bold">NFT Marketplace</p>
                        <div className="flex mt-4">
                            <Link href="/">
                                <a className="mr-4 text-red-500">Home</a>
                            </Link>
                            <Link href="/create-nft">
                                <a className="mr-6 text-red-500">Sell NFT</a>
                            </Link>
                            <Link href="/my-nfts">
                                <a className="mr-6 text-red-500">My NFTs</a>
                            </Link>
                            <Link href="/dashboard">
                                <a className="mr-6 text-red-500">Dashboard</a>
                            </Link>
                        </div>
                    </nav>
                    <Component {...pageProps} />
                </>
            )}
        </div>
    );
}

export default MyApp;
