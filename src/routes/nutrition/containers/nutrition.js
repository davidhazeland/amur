'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import {actions as myActions} from 'modules/nutrition';
import {actions as initialDataActions} from 'modules/initial-data';
import NutritionComponent from '../components/nutrition';

class Nutrition extends Component {
  componentDidMount() {
    this.props.actions.getInitialDataRequest();
  }

  componentWillUnmount() {
    this.props.actions.clearInitialData();
  }

  render() {
    const title = 'Nutrition';
    return (
    <DocumentTitle title={title}>
      <NutritionComponent {...this.props}/>
    </DocumentTitle>
    );
  }
}

Nutrition.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    InitialData: {
      foodList: [],
      ...state.InitialData
    },
    Home: state.Home
  };
}
function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, initialDataActions, myActions, {

  });
  return { actions: bindActionCreators(actions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Nutrition);
