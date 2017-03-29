import React, {Component} from 'react';
import {Autocomplete} from 'businesses/components';
import cx from 'classnames';

import {resolve, getName, toBase} from 'utils/food';

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
          wrapperProps={{className:'ui large fluid search input', style:{display: 'flex'}}}
          inputProps={{placeholder: '300g beef...', id: 'states-autocomplete'}}
          items={foodList}
          getItemValue={(item) => item.name}
          onChange={(event, value) => {
            this.setState({ value })
          }}
          onSelect={(value, item) => {
            const {quantity} = resolve(this.state.value);
            onSelect({
              quantity,
              food: item
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

export function matchStateToTerm (state, value) {
  const name = getName(value);
  if (!name || name.length < 2) {
    return false;
  }
  const keyword = toBase(name.toLowerCase());

  return toBase(state.name.toLowerCase()).includes(keyword);
}

CalculatorSearch.displayName = 'CalculatorSearch';

export default CalculatorSearch;
