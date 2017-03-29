

import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import {actions as myActions} from 'businesses/nutrition';
import {actions as initialActions, selectors as initialSelectors} from 'ironlake/businesses/initial';

import NutritionComponent from '../components/nutrition';

class Nutrition extends Component {
  componentDidMount() {
    this.props.actions.initialize();
  }

  componentWillUnmount() {
    this.props.actions.clear();
    this.props.actions.clearInitial();
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
    Initial: initialSelectors.get({
      foodList: []
    })(state)
  };
}
function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, initialActions, myActions, {

  });
  return { actions: bindActionCreators(actions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Nutrition);
