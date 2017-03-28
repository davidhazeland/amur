import React from 'react';
import cx from 'classnames';
import Radium from 'radium';

import {Link} from 'react-router';
import {Icon} from 'semantic-ui-react';

import logo from 'images/logo.png';

import styles from 'styles';

const Header = (props) => {
  const {
    path,
    onToggleSidebar
  } = props;
  const renderTab = (to, name) => {
    const classes = cx('item', {
      active: path === to
    });
    return (
      <div style={styles.mobileHidden}>
        <Link to={to} className={classes}>{name}</Link>
      </div>
    );
  }

  return (
    <div className="Header">
      <div className="ui secondary pointing menu">
        <div className="item" onClick={onToggleSidebar} style={styles.mobileOnly}>
          <Icon name="sidebar"></Icon>
        </div>
        <div style={styles.mobileHidden}>
          <Link to="/" className="item brand">
              <img className="logo" src={logo} alt=""/>
              Amur
          </Link>
        </div>
        {renderTab('/', 'Home')}
        {renderTab('/nutrition', 'Nutrition')}
        <div className="right menu">
          <a target="_blank" href="https://github.com/davidhazeland/amur" className="ui item">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

Header.displayName = 'Header';

export default Radium(Header);
