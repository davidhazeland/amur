'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import {actions as myActions} from 'modules/home';
import HomeComponent from '../components/home';

class Home extends Component {
  componentWillUnmount() {
    this.props.actions.clear();
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

function mapStateToProps() {
  return {

  };
}
function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, myActions, {

  });
  return { actions: bindActionCreators(actions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
