'use strict';

import React from 'react';

const Calculator = () => {
  return (
    <div className="Calculator">
      <div className="ui icon input">
        <input type="text" placeholder="300g bắp bò..." />
        <i className="search icon"></i>
      </div>

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
