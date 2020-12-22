import React from 'react';

const Navbar = () => {
  return (
    <div className='main-header'>
      <div className='logo'>
        <a href='/home'>Avalend</a>
      </div>
      <nav className='main-nav'>
        <ul>
          <li>
            <a href='/connect-wallet'>Connect Wallet</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
