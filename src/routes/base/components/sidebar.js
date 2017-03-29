import React from 'react';

import {Link} from 'react-router';
import cx from 'classnames';
import { Sidebar as SidebarComponent, Menu, Image } from 'semantic-ui-react';

import logo from 'images/logo-white.png';

import {Translate} from 'react-redux-i18n';

const Sidebar = (props) => {
  const {visible, path} = props;

  const renderTab = (to, name) => {
    const classes = cx('item', {
      active: path === to
    });
    return (
      <Link to={to} className={classes}>{name}</Link>
    );
  }

  return (
    <SidebarComponent as={Menu} animation="push" width="thin" visible={visible} vertical inverted>
      <Menu.Item name='gamepad'>
        <Image src={logo} width="30" />
      </Menu.Item>

      {renderTab('/', <Translate value="base.home"/>)}
      {renderTab('/nutrition', <Translate value="base.nutrition"/>)}

      <Menu.Item target="_blank" href="https://github.com/davidhazeland/amur">
        Github
      </Menu.Item>
    </SidebarComponent>
  );
};

Sidebar.propTypes = {

}

Sidebar.displayName = 'Sidebar';

export default Sidebar;
