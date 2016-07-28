'use strict';

import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const FoodList = ({data}) => {
  const options = {
    paginationSize: 3
  };

  const style = {
    width: 720
  };

  return (
    <div className="FoodList" style={style}>
      <BootstrapTable data={data} striped={true} hover={true} pagination options={options}>
          <TableHeaderColumn dataField="name" isKey={true} filter={ { type: 'TextFilter', delay: 300, placeholder: 'Search' } } dataAlign="center"></TableHeaderColumn>
          <TableHeaderColumn dataField="carb" dataSort={true} width="90">Carb (g)</TableHeaderColumn>
          <TableHeaderColumn dataField="fat" dataSort={true} width="90">Fat (g)</TableHeaderColumn>
          <TableHeaderColumn dataField="protein" dataSort={true} sortFunc={ sortByName } width="110">Protein (g)</TableHeaderColumn>
          <TableHeaderColumn dataField="calo" dataSort={true} sortFunc={ sortByName } width="110">Calo (Kcal)</TableHeaderColumn>
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
