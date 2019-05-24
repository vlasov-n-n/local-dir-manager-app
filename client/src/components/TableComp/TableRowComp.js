import React from 'react';
import * as PropTypes from 'prop-types';
import moment from 'moment';

import {table} from '../../constants/HomeCostants';
import {RowItem, TableRow} from './TableCompStyleComp';
import fileSizeConverter from '../../helpers/fileSizeConverter';

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
        <button onClick={() => handleOpenModal(directory)}>
          {table.filesBtn}
        </button>
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
