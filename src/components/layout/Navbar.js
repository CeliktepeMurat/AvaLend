import React, { useState } from "react";

const Navbar = () => {
  const [ethereum, setEthereum] = useState(null);

  return (
    <div className="main-header">
      <div className="logo">
        <a href="/home">Avalend</a>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            {ethereum !== null ? (
              <span className="addressStyle">
                {String(ethereum[0]).substring(0, 12)}...
              </span>
            ) : (
              <span
                onClick={async () => {
                  let ethereum = await getEthereum();
                  setEthereum(ethereum);
                }}
              >
                Connect Wallet
              </span>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

const getEthereum = async () => {
  let ethereum = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  //console.log(ethereum);
  return ethereum;
};

export default Navbar;
