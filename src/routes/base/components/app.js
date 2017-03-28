require('normalize.css');
require('styles/index.css');

import React, {Component} from 'react';

import Content from './content';
import Header from './header';

import { Sidebar as SidebarComponent } from 'semantic-ui-react';

import Sidebar from './sidebar';

import {StyleRoot} from 'radium';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarVisible: false
    }
  }

  handleToggleSidebar() {
    this.setState(state => ({
      sidebarVisible: !state.sidebarVisible
    }));
  }

  render() {
    return (
      <StyleRoot>
        <SidebarComponent.Pushable className="App">
          <Sidebar visible={this.state.sidebarVisible}/>
          <SidebarComponent.Pusher>
            <Header {...this.props} onToggleSidebar={this.handleToggleSidebar.bind(this)}/>
            <Content>
              {this.props.children}
            </Content>
          </SidebarComponent.Pusher>
        </SidebarComponent.Pushable>
      </StyleRoot>
    );
  }
}

export default App;
