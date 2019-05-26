import React from 'react';

import {TableHeaderWrap, ColumnTitle} from '../Common/TableComponents';
import {table} from '../../constants/HomeCostants';

const TableHeader = () => {
  return (
    <TableHeaderWrap>
      <tr>
        {table.tableTitles.map((title, index) =>
          <ColumnTitle key={index}>{title}</ColumnTitle>
        )}
      </tr>
    </TableHeaderWrap>
  )
};

export default TableHeader;
