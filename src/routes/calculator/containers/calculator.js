import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentTitle from 'react-document-title';

import {actions as myActions} from 'businesses/calculator';
import {actions as notificationActions} from 'ironlake/businesses/notification';
import {actions as initialActions, selectors as initialSelectors} from 'ironlake/businesses/initial';

import CalculatorComponent from '../components/calculator';

class Calculator extends Component {
  componentDidMount() {
    this.props.actions.initialize();
  }

  componentWillUnmount() {
    this.props.actions.clear();
    this.props.actions.clearInitial();
    this.props.actions.clearNotification();
  }

  render() {
    const title = 'Calculator';
    return (
    <DocumentTitle title={title}>
      <CalculatorComponent {...this.props}/>
    </DocumentTitle>
    );
  }
}

Calculator.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    Initial: initialSelectors.get({
      foodList: []
    })(state),
    Calculator: state.Calculator,
    Notification: state.Notification
  };
}
function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, notificationActions, initialActions, myActions, {

  });
  return { actions: bindActionCreators(actions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
