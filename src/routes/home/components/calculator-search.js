'use strict';

import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';
import cx from 'classnames';

import {resolve, getName} from 'utils/food';

class CalculatorSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    const {
      foodList,
      onSelect
    } = this.props;

    return (
      <div className="CalculatorSearch">
        <Autocomplete
          value={this.state.value}
          wrapperProps={{className:'ui search focus'}}
          inputProps={{placeholder: '300g bắp bò...', id: 'states-autocomplete', className: 'prompt'}}
          items={foodList}
          getItemValue={(item) => item.name}
          onChange={(event, value) => {
            this.setState({ value })
          }}
          onSelect={(value, item) => {
            const {quantity} = resolve(this.state.value);
            onSelect({
              quantity,
              item
            });
            this.setState({
              value: ''
            });
          }}
          shouldItemRender={matchStateToTerm}
          renderItem={(item, isHighlighted) => {
            const itemClass = cx('result', {
              active: isHighlighted
            });
            return (
              <a key={item.id} className={itemClass}>
                <div className="content">
                  <div className="title" title={item.name}>{item.name}</div>
                </div>
              </a>
            );
          }}
          renderMenu={(items) => {
            const menuClass = cx('results transition', {
              visible: items.length > 0
            });
            return (
              <div className={menuClass} style={{display:'block !important'}}>
                {items}
              </div>
            );
          }}
        />
      </div>
    );
  }
}

function matchStateToTerm (state, value) {
  const name = getName(value);
  if (!name || name.length < 2) {
    return false;
  }
  return (
    state.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
  );
}

CalculatorSearch.displayName = 'CalculatorSearch';

export default CalculatorSearch;
