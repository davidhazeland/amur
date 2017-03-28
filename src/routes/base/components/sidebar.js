import React from 'react';

import {Link} from 'react-router';

import logo from 'images/logo.png';

import { Sidebar as SidebarComponent, Menu } from 'semantic-ui-react'

const Sidebar = (props) => {
  const {visible} = props;
  return (
    <SidebarComponent as={Menu} animation='push' width='thin' visible={visible} vertical inverted>

    </SidebarComponent>
  );
};

Sidebar.propTypes = {

}

Sidebar.displayName = 'Sidebar';

export default Sidebar;
