import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableHead from './TableHeadComp';
import TableRowComp from './TableRowComp';
import {SectionTitle, SectionWrap} from '../Common/CommonComponents';
import {Table, TableBody, TableWrap} from '../Common/TableComponents';
import {table} from '../../constants/HomeCostants';
import {dirsSorter} from '../../helpers/sorter';

class TableComp extends Component {
  static propTypes = {
    /** @type {DirectoriesList} */
    directories: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      parent: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      child: PropTypes.array
    })),
    /** Function for open modal window */
    handleOpenModal: PropTypes.func.isRequired
  };

  render() {
    const {
      /** @type {array<DirectoryItem>} */
      directories,
      /**
       * @type {function}
       * @param {DirectoryItem}
       */
      handleOpenModal
    } = this.props;

    return (
      <SectionWrap
        direction={'column'}
      >
        <SectionTitle>
          {table.title}
        </SectionTitle>
        <TableWrap minWidth={800}>
          <Table>
            <TableHead/>
            <TableBody>
              {dirsSorter(directories, ['-date']).map(directory =>
                <TableRowComp
                  key={directory.path}
                  directory={directory}
                  handleOpenModal={handleOpenModal}
                />)}
            </TableBody>
          </Table>
        </TableWrap>
      </SectionWrap>
    );
  }
}


export default TableComp;
