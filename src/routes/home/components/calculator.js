'use strict';

import React from 'react';

import Search from './calculator-search';

const Calculator = (props) => {
  const {
    data
  } = props;

  function handleSelectFood() {

  }

  return (
    <div className="Calculator">
      <Search foodList={data} onSelect={handleSelectFood}/>

      <table className="ui orange table">
        <thead>
          <tr><th>Food</th>
          <th>Calories</th>
          <th>Carb</th>
          <th>Fat</th>
          <th>Protein</th>
        </tr></thead><tbody>
          <tr>
            <td>Apples</td>
            <td>200</td>
            <td>200</td>
            <td>200</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>310</td>
            <td>310</td>
            <td>310</td>
            <td>0g</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>310</th>
            <th>310</th>
            <th>310</th>
            <th>10g</th>
          </tr>
        </tfoot>
      </table>

      <button className="ui right floated primary button">Reset</button>
    </div>
  );
};

Calculator.displayName = 'Calculator';

export default Calculator;
