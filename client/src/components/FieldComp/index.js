import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {DirectoryButton, DirectoryInput, FieldTitle, FieldWrap} from './DirFieldStyleComp';
import {newDirBtn, newDirTitle} from '../../constants/HomeCostants';
import {SectionWrap} from '../Common/StyledComponents';

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
      <SectionWrap>
        <FieldTitle>{newDirTitle}</FieldTitle>
        <DirectoryInput
          type="text"
          name="dirPath"
          onChange={(e) => this.handleChangeInput(e)}
          value={this.state.dirPath}
          error={this.state.error}
        />
        <DirectoryButton
          onClick={() => this.handleCreateNewDir()}
        >
          {newDirBtn}
        </DirectoryButton>
      </SectionWrap>
    );
  }
}

export default FieldComp;
