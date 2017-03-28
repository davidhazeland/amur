import React from 'react';
import Radium from 'radium';

import {computer} from 'styles';

import Navigation from './navigation';

const style = {
  width: '100%',
  minHeight: '300px',

  [computer]: {
    paddingLeft: '270px',
    paddingRight: '10px',
    position: 'absolute',
    top: '60px',
  }
}

const Content = ({children}) => {
  return (
    <div className="Content ui fluid container">
      <Navigation/>
      <div style={style}>
        {children}
      </div>
    </div>
  )
};

export default Radium(Content);
