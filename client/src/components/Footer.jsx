import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="https://learn.metamask.io/lessons/what-is-web3" target="_blank" className="text-white text-base text-center mx-2 text-decoration:none">Tutorials</a>
        <a href="https://learn.metamask.io/lessons/what-is-a-crypto-wallet" target="_blank" className="text-white text-base text-center mx-2">Wallets</a>
        <a href="https://decrypt.co/" target="_blank" className="text-white text-base text-center mx-2">Market</a>
        <a href="https://metamask.io/swaps/" target="_blank" className="text-white text-base text-center mx-2">Exchange</a>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@kryptomastery2023</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
