import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppComponent from '../components/app';

class App extends Component {
  render() {
    return (
      <AppComponent {...this.props}>
        {this.props.children}
      </AppComponent>
    );
  }
}

App.propTypes = { actions: PropTypes.object.isRequired };
function mapStateToProps(state, ownProps) {
  return {
    path: ownProps.location.pathname
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({}, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
