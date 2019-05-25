import React from 'react';
import * as PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import {table} from '../../constants/HomeCostants';
import {RowItem, TableRow} from '../Common/TableComponents';
import fileSizeConverter from '../../helpers/fileSizeConverter';

export const TableBtn = styled.button`
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  border-bottom-color: rgb(221, 221, 221);
  background-color: rgb(221, 221, 221);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 400;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  outline:none;
`;

const TableRowComp = (props) => {
  const {
    /**
     * @type {function}
     * @param {DirectoryItem}
     */
    handleOpenModal,
    /** @type {DirectoryItem} */
    directory
  } = props;

  return (
    <TableRow>
      <RowItem>
        {moment(directory.date).format('DD:MM:YYYY hh:mm')}
      </RowItem>
      <RowItem>
        {directory.path}
      </RowItem>
      <RowItem>
        {directory.child.filter(i => i.type === 'DIR').length}
      </RowItem>
      <RowItem>
        {directory.child.filter(i => i.type === 'FILE').length}
      </RowItem>
      <RowItem>
        {fileSizeConverter(directory.size)}
      </RowItem>
      <RowItem align={'center'}>
        <TableBtn onClick={() => handleOpenModal(directory)}>
          {table.filesBtn}
        </TableBtn>
      </RowItem>
    </TableRow>
  )

};

TableRowComp.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
  directory: PropTypes.shape({
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    parent: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    child: PropTypes.array
  })
};

export default TableRowComp;
