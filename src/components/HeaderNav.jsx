import React, { useState } from 'react';
import { ethers } from "ethers";
import WalletConnect from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

export const providerOptions = {
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: "27e484dcd9e3efcfd25a83a78777cdf1"
    }
  }
};


const HeaderNav = () => {
  const [account, setAccount] = useState();

  const connectWallet = async () => {
    // if (typeof window === 'undefined') {
    //   return;
    // }

    try {
      const web3Modal = new Web3Modal({
        providerOptions // required
      });
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      await library.send("eth_requestAccounts", [])
        .then((accounts) => {
          if (accounts.length > 0) {
            setAccount(accounts[0])
          }
        }).catch((e) => console.log(e))
    } catch (error) {
      console.error(error);
    }
  };
  const onClickDisconnect = () => {
    setAccount(undefined)
  }
  return (
    <div className='flex justify-end'>
      {!account ? <button className='bg-white text-xl p-3 ml-auto w-52' onClick={() => connectWallet()}>Connect Wallet</button>
        : <p className='p-2 border bg-white rounded-xl w-52 cursor-pointer truncate ...' onClick={() => onClickDisconnect()}>{account}</p>
      }
    </div>
  );
};

export default HeaderNav;