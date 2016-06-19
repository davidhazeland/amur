'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import {actions as myActions} from 'modules/home';
import {actions as initialDataActions} from 'modules/initial-data';
import HomeComponent from '../components/home';

class Home extends Component {
  componentDidMount() {
    this.props.actions.getInitialDataRequest();
  }

  componentWillUnmount() {
    this.props.actions.clear();
    this.props.actions.clearInitialData();
  }

  render() {
    const title = 'Home';
    return (
    <DocumentTitle title={title}>
      <HomeComponent {...this.props}/>
    </DocumentTitle>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    InitialData: {
      foodList: [],
      ...state.InitialData
    }
  };
}
function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, initialDataActions, myActions, {

  });
  return { actions: bindActionCreators(actions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
