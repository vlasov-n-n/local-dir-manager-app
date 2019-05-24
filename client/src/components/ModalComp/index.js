import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ModalWrap} from './ModalStyleComp';

class ModalComp extends Component {
  static propTypes = {
    /** @type {DirectoryItem} */
    currentDirInfo: PropTypes.shape({
      date: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      parent: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      child: PropTypes.array
    }),
    /** @type {boolean} */
    isOpen: PropTypes.bool.isRequired
  };

  render() {
    return (
      <ModalWrap isOpen={this.props.isOpen}>
      </ModalWrap>
    );
  }
}

export default ModalComp;
