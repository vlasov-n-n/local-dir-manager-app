import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getAllDirAction, createDirAction} from '../../ducks/HomeDuck';
import {openModalAction} from '../../ducks/ModalDuck';
import {HomeWrap, Title} from './HomeStyleComp';
import FieldComp from '../../components/FieldComp';
import TableComp from '../../components/TableComp';
import {homeTitle} from '../../constants/HomeCostants';
import Diagram from '../../components/Diagram';

class Index extends PureComponent {
  static propTypes = {
    /** Action for fet all directory */
    getAllDirAction: PropTypes.func.isRequired,
    /** Create new directory */
    createDirAction: PropTypes.func.isRequired,
    /** Open modal window */
    openModal: PropTypes.func.isRequired,
    /** Create dir error */
    createDirError: PropTypes.string,
    /** @type {Directories} */
    directories: PropTypes.shape({
      defaultPath: PropTypes.string.isRequired,
      dirList: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        parent: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        path: PropTypes.string.isRequired,
        child: PropTypes.array
      }))
    })
  };

  /**
   * Get directories list for init application
   */
  componentWillMount() {
    this.props.getAllDirAction();
  }

  render() {
    const {
      /** @type {Directories} */
      directories,
      /** @type {function} */
      createDirAction,
      /** @type {function} */
      openModal,
      /** @type {string | null} */
      createDirError
    } = this.props;

    return (
        <HomeWrap>
          <Title>{homeTitle}</Title>
          <FieldComp
            defaultDirectoryPath={directories.defaultPath}
            createDirAction={createDirAction}
            createDirError={createDirError}
            filesStatistic={directories.filesStatistic}
          />
          <Diagram
            filesStatistic={directories.filesStatistic}
          />
          <TableComp
            handleOpenModal={openModal}
            directories={directories.directories}
          />
        </HomeWrap>
    );
  }
}

const mapStateToProps = state => {
  return {
    directories: state.home.directories,
    createDirError: state.home.createDirError
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAllDirAction: () => dispatch(getAllDirAction()),
    createDirAction: (newDirName) => dispatch(createDirAction(newDirName)),
    openModal: (info) => dispatch(openModalAction(info))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
