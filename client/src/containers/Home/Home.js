import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getAllDirAction, createDirAction} from '../../ducks/HomeDuck';
import {HomeWrap, Title} from './HomeStyleComp';
import FieldComp from '../../components/FieldComp';
import TableComp from '../../components/TableComp';
import ModalComp from '../../components/ModalComp';
import {homeTitle} from '../../constants/HomeCostants';

class Home extends PureComponent {
  static propTypes = {
    /** @type {function} Get all directory */
    getAllDirAction: PropTypes.func.isRequired,
    /** @type {function} Create new directory */
    createDirAction: PropTypes.func.isRequired,
    /** @type Directories */
    directories: PropTypes.shape({
      defaultPath: PropTypes.string.isRequired,
      dirList: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        dirs: PropTypes.number.isRequired,
        files: PropTypes.number.isRequired,
        size: PropTypes.string.isRequired,
      }))
    })
  };

  constructor(props) {
    super(props);
    this.state = {
      /** @type {boolean} */
      modalIsOpen: false,
      /** @type {Directory || null} */
      currentDirInfo: null
    }
  }

  /**
   * Get directories list for init application
   */
  componentWillMount() {
    this.props.getAllDirAction();
  }

  /**
   * Open modal with current directory information
   * @param {Directory} directory
   */
  handleOpenModal = (directory) => {
    this.setState({
      modalIsOpen: true,
      currentDirInfo: directory
    })
  };

  /**
   * Closing the modal and clear the state field currentDirInfo
   */
  handleCloseModal = () => {
    this.setState({
      modalIsOpen: false,
      currentDirInfo: null
    })
  };

  render() {
    const {
      directories,
      createDirAction
    } = this.props;

    return (
      <HomeWrap>
        <Title>{homeTitle}</Title>
        <FieldComp
          defaultDirectoryPath={directories.defaultPath}
          createDirAction={createDirAction}
        />
        <TableComp
          handleOpenModal={this.handleOpenModal}
          directories={directories}
        />
        <ModalComp
          currentDirInfo={this.state.currentDirInfo}
          handleCloseModal={this.handleCloseModal}
        />
      </HomeWrap>
    );
  }
}

const mapStateToProps = state => {
  return {
    directories: state.home.directories
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAllDirAction: () => dispatch(getAllDirAction()),
    createDirAction: (newDirName) => dispatch(createDirAction(newDirName))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
