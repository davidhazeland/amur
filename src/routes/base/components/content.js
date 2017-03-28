import React from 'react';
import Radium from 'radium';

const style = {
  width: '100%',
  minHeight: '300px',

  '@media only screen and (min-width: 768px)': {
    paddingLeft: '270px',
    paddingRight: '10px',
    position: 'absolute',
    top: '60px',
  }
}

const Content = ({children}) => {
  return (
    <div className="Content" style={style}>
      {children}
    </div>
  )
};

export default Radium(Content);
