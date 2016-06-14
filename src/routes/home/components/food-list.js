'use strict';

import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const FoodList = ({data}) => {
  return (
    <div className="FoodList">
      <BootstrapTable data={data} striped={true} hover={true} pagination>
          <TableHeaderColumn dataField="name" isKey={true} filter={ { type: 'TextFilter', delay: 300, placeholder: 'Search' } } dataAlign="center"></TableHeaderColumn>
          <TableHeaderColumn dataField="carb" dataSort={true} width="70">Carb</TableHeaderColumn>
          <TableHeaderColumn dataField="fat" dataSort={true} width="70">Fat</TableHeaderColumn>
          <TableHeaderColumn dataField="protein" dataSort={true} sortFunc={ sortByName } width="100">Protein</TableHeaderColumn>
          <TableHeaderColumn dataField="calo" dataSort={true} sortFunc={ sortByName } width="70">Calo</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
};

function sortByName(a, b, order, field) {
  const x = parseFloat(a[field]);
  const y = parseFloat(b[field]);
  if (order === 'desc') {
    if (x > y) {
      return -1;
    } else if (x < y) {
      return 1;
    }
    return 0;
  }
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  }
  return 0;
}

FoodList.displayName = 'FoodList';

export default FoodList;
