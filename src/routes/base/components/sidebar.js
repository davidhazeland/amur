import React from 'react';

import {Link} from 'react-router';

import { Sidebar as SidebarComponent, Menu, Image } from 'semantic-ui-react';

import logo from 'images/logo-white.png';

const Sidebar = (props) => {
  const {visible, path} = props;

  const renderTab = (to, name) => {
    return (
      <Menu.Item active={path === to}>
        <Link to={to}>{name}</Link>
      </Menu.Item>
    );
  }

  return (
    <SidebarComponent as={Menu} animation="push" width="thin" visible={visible} vertical inverted>
      <Menu.Item name='gamepad'>
        <Image src={logo} width="30" />
      </Menu.Item>
      
      {renderTab('/', 'Home')}
      {renderTab('/nutrition', 'Nutrition')}

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
