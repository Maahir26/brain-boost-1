import React, { useState, useEffect } from "react";
import Home from "./Home";

export default function LandingPage (props){
 

  function ether() {
    const { ethereum } = window;

    if (ethereum) {
      return ethereum;
    } else {
      throw new Error("There was an error fetching metamask object");
    }
  }

  const connectWallet = async () => {
    try {
      const eth = ether();

      const accounts = await eth.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      props.setUsers(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // const checkIfWalletIsConnected = async () => {
  //   const eth = ether();

  //   const accounts = await ethereum.request({ method: "eth_accounts" });

  //   if (accounts.length !== 0) {
  //     const account = accounts[0];
  //     console.log("Found an authorized account:", account);
  //     setUser(account);
  //   } else {
  //     console.log("No authorized account found");
  //   }
  // };

  // useEffect(() => {
  //   checkIfWalletIsConnected();
  // }, []);

  return (
    props.users === "" ?
    <div className="h-screen text-white bg-black items-center justify-center flex">
      <div className="flex justify-center items-center bg-transparent h-auto flex-col">
        <h1 className="text-white bg-transparent font-extrabold text-7xl text-center mb-2">
          The web3<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 "><br></br> brain power</span> platform
        </h1>
        <h3 className="bg-transparent text-slate-300 text-center mt-1 p-4 text-xl font-medium ">
          A decentralized website where people can give answers<br className=""></br> to questions and get rewards.
        </h3>
        <button
          className="text-black font-semibold mt-24 bg-white px-7 py-4 rounded-full text-md md:text-xl hover:bg-blue-600 transition ease-in duration-300 hover:text-white"
          onClick={connectWallet}
        >
          Share your knowledge ????
          </button>
      </div>
      <div></div>
    </div>: <Home />
  );
};


