import React from 'react';
import * as PropTypes from 'prop-types';

import {table} from '../../constants/HomeCostants';
import {TableHeaderWrap, ColumnTitle} from './TableCompStyleComp';

const TableHeader = () => {
  return (
    <TableHeaderWrap>
      <tr>
        <ColumnTitle>
          {table.data}
        </ColumnTitle>
        <ColumnTitle>
          {table.baseDir}
        </ColumnTitle>
        <ColumnTitle>
          {table.dirs}
        </ColumnTitle>
        <ColumnTitle>
          {table.files}
        </ColumnTitle>
        <ColumnTitle>
          {table.sumSize}
        </ColumnTitle>
        <ColumnTitle>
          {/*empty*/}
        </ColumnTitle>
      </tr>
    </TableHeaderWrap>
  )

};

TableHeader.propTypes = {};

export default TableHeader;
