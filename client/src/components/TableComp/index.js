import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableHead from './TableHeadComp';
import {SectionTitle, SectionWrap} from '../Common/StyledComponents';
import {table} from '../../constants/HomeCostants';
import TableRowComp from './TableRowComp';
import {Table, TableBody} from './TableCompStyleComp';

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
    /** @type {function} */
    handleOpenModal: PropTypes.func.isRequired
  };

  render() {
    const {
      /** @type {DirectoriesList} */
      directories,
      /**
       * @type {function}
       * @param {DirectoryItem}
       */
      handleOpenModal
    } = this.props;

    return (
      <SectionWrap>
        <SectionTitle>
          {table.title}
        </SectionTitle>
        <Table>
          <TableHead/>
          <TableBody>
            {directories.map(directory =>
                <TableRowComp
                  key={directory.path}
                  directory={directory}
                  handleOpenModal={handleOpenModal}
                />
              )
            }
          </TableBody>
        </Table>
      </SectionWrap>
    );
  }
}


export default TableComp;
