import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {DirectoryInput, FieldTitle} from './DirFieldStyleComp';
import {newDirBtn, newDirTitle} from '../../constants/HomeCostants';
import {ButtonComp, SectionWrap} from '../Common/CommonComponents';
import {Doughnut} from 'react-chartjs-2';

class FieldComp extends Component {
  static propTypes = {
    /** @type {string} Default directory location */
    defaultDirectoryPath: PropTypes.string.isRequired,
    /** @type {function} Create new directory */
    createDirAction: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      /** @type {string} This value directory location for create*/
      dirPath: this.props.defaultDirectoryPath,
      /** @type {boolean} This checking empty value*/
      isEmpty: false
    };
  }

  /**
   * Change input
   * @param {SyntheticInputEvent} e
   */
  handleChangeInput = (e) => {
    this.setState({
      dirPath: e.target.value,
      isEmpty: e.target.value.length === 0
    })
  };

  /**
   * Call createDirAction
   */
  handleCreateNewDir = () => {
    const {dirPath, isEmpty} = this.state;

    if(!isEmpty) {
      this.props.createDirAction(dirPath)
    }
  };

  render() {
    return (
      <SectionWrap
        alignItems={'center'}
      >
        <FieldTitle>{newDirTitle}</FieldTitle>
        <DirectoryInput
          type="text"
          name="dirPath"
          onChange={(e) => this.handleChangeInput(e)}
          value={this.state.dirPath}
          error={this.state.error}
        />
        <ButtonComp
          onClick={() => this.handleCreateNewDir()}
        >
          {newDirBtn}
        </ButtonComp>
      </SectionWrap>
    );
  }
}

export default FieldComp;
