import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {DirectoryInput, FieldTitle} from './DirFieldStyleComp';
import {errors, newDirBtn, newDirTitle} from '../../constants/HomeCostants';
import {ButtonComp, SectionWrap} from '../Common/CommonComponents';
import {FieldError} from '../../containers/Home/HomeStyleComp';

class FieldComp extends Component {
  static propTypes = {
    /** Default directory location */
    defaultDirectoryPath: PropTypes.string.isRequired,
    /** Create new directory */
    createDirAction: PropTypes.func.isRequired,
    /** Create dir error */
    createDirError: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      /** @type {string} */
      dirPath: this.props.defaultDirectoryPath
    };
  }

  /**
   * Change input
   * @param {SyntheticInputEvent} e
   */
  handleChangeInput = (e) => {
    if(!e.target.value.search(/^\.\/opt\//)) {
      this.setState({
        dirPath: e.target.value
      })
    }
  };

  /**
   * Call createDirAction
   */
  handleCreateNewDir = () => {
    const {dirPath} = this.state;
    this.props.createDirAction(dirPath.replace('./opt/',''))
  };

  /**
   * @param {SyntheticInputEvent} e
   */
  pressEnter = (e) => {
    if (e.key === 'Enter') {
      this.handleCreateNewDir()
    }
  };

  render() {
    const {
      /** @type {string | null} */
      createDirError
    } = this.props;

    return (
      <SectionWrap
        alignItems={'center'}
      >
        <FieldTitle>{newDirTitle}</FieldTitle>
        <div>
          <DirectoryInput
            type="text"
            name="dirPath"
            onChange={(e) => this.handleChangeInput(e)}
            value={this.state.dirPath}
            onKeyPress={(e) => this.pressEnter(e)}
            error={createDirError}
          />
          <FieldError>{errors[createDirError]}</FieldError>
        </div>
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
