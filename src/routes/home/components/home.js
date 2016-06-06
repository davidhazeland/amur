'use strict';

import React from 'react';
import {pick} from 'lodash/object';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Home = (props) => {
  const {
    InitialData: {
      animals,
      vegetables
    }
  } = props;

  const data = animals.concat(vegetables).map(item => pick(item, ['name', 'carb', 'fat', 'protein', 'calo']));

  return (
    <div className="Home">
      <BootstrapTable data={data} striped={true} hover={true} pagination>
          <TableHeaderColumn dataField="name" isKey={true} dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
          <TableHeaderColumn dataField="carb" dataSort={true}>Carb</TableHeaderColumn>
          <TableHeaderColumn dataField="fat">Fat</TableHeaderColumn>
          <TableHeaderColumn dataField="protein">Protein</TableHeaderColumn>
          <TableHeaderColumn dataField="calo">Calo</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
