'use strict';

import React from 'react';
import cx from 'classnames';

import {Link} from 'react-router';

const Header = (props) => {
  const {path} = props;
  const renderTab = (to, name) => {
    const classes = cx('item', {
      active: path === to
    });
    return (
      <Link to={to} className={classes}>{name}</Link>
    );
  }

  return (
    <div className="Header">
      <div className="ui secondary pointing menu">
        <div className="brand item">
            <img className="logo" src="/images/logo.png" alt=""/>
            Amur
        </div>
        {renderTab('/', 'Home')}
        {renderTab('/nutrition', 'Nutrition')}
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
