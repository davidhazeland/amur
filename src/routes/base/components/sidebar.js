import React from 'react';

import {Link} from 'react-router';

import { Sidebar as SidebarComponent, Menu, Image } from 'semantic-ui-react';

import logo from 'images/logo-white.png';

const Sidebar = (props) => {
  const {visible} = props;
  return (
    <SidebarComponent as={Menu} animation='push' width='thin' visible={visible} vertical inverted>
      <Menu.Item name='gamepad'>
        <Image src={logo} width="30" />
      </Menu.Item>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/nutrition">Nutrition</Link>
      </Menu.Item>
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
