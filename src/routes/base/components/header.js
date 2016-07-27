'use strict';

import React from 'react';

const Header = () => {
  return (
    <div className="Header">
      <div className="ui secondary pointing menu">
        <div className="brand item">
            <img className="logo" src="/images/logo.png" alt=""/>
            Amur
        </div>
        <a className="active item">
          Home
        </a>
        <div className="right menu">
          <a href="https://github.com/davidhazeland/amur" className="ui item">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
