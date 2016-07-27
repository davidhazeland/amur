require('normalize.css');
require('bootstrap-loader');
require('styles/index.scss');

import createContent from './content';
import Header from './header';

export default React => {
  const Content = createContent(React);

  const App = (props) => {
    return (
      <div className="App">
        <Header/>
        <Content>
          {props.children}
        </Content>
      </div>
    );
  };

  App.propTypes = {};

  return App;
}
