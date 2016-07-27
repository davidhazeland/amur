require('normalize.css');
require('bootstrap-loader');
require('styles/index.scss');

import createContent from './content';
import Header from './header';
import Navigation from './navigation';

export default React => {
  const Content = createContent(React);

  const App = (props) => {
    return (
      <div className="App">
        <Header/>
        <Navigation />
        <Content>
          {props.children}
        </Content>
      </div>
    );
  };

  App.propTypes = {};

  return App;
}
