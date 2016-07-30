'use strict';

require('styles/components/Content.scss');

export default React => ({children}) => {
  return (
    <div className="Content">
      {children}
    </div>
  )
}
