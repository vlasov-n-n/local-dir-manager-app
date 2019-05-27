import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {connect} from 'react-redux';

import {
  FileListItem,
  Modal, ModalBackground,
  ModalBtn,
  ModalList,
  ModalListItem,
  ModalTitle,
  ModalWrap
} from './ModalStyleComp';
import {modal} from '../../constants/HomeCostants';
import {ButtonComp, Line} from '../../components/Common/CommonComponents';
import fileSizeConverter from '../../helpers/fileSizeConverter';
import {filesSorter} from '../../helpers/sorter';
import {closeModalAction} from '../../ducks/ModalDuck';

class Index extends Component {
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
    isOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired
  };

  render() {
    const {
      /** @type {boolean} */
      isOpen,
      /** @type {DirectoryItem} */
      currentDirInfo,
      /** @type {function} */
      handleCloseModal
    } = this.props;

    const isDir = '<DIR>';

    if (isOpen) {
      return (
        <ModalWrap>
          <ModalBackground/>
          <Modal>
            <ModalTitle>
              {currentDirInfo.path} {moment(currentDirInfo.date).format('DD:MM:YYYY hh:mm')}
            </ModalTitle>
            <Line/>
            <ModalList>
              <ModalListItem>
                <FileListItem
                  width={'60%'}
                  border>
                  {modal.files}
                </FileListItem>
                <FileListItem>
                  {modal.size}
                </FileListItem>
              </ModalListItem>
              {filesSorter(currentDirInfo.child).map((child, index) => (
                <ModalListItem key={child.name + index}>
                  <FileListItem
                    width={'60%'}
                    border
                  >
                    {child.name}
                  </FileListItem>
                  <FileListItem>
                    {child.type === 'FILE' ? fileSizeConverter(child.size) : isDir}
                  </FileListItem>
                </ModalListItem>
              ))}
            </ModalList>
            <Line/>
            <ModalBtn>
              <ButtonComp onClick={() => handleCloseModal()}>
                {modal.closeBtn}
              </ButtonComp>
            </ModalBtn>
          </Modal>
        </ModalWrap>
      );
    } else return null
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.modal.modalIsOpen,
    currentDirInfo: state.modal.currentDirInfo
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleCloseModal: () => dispatch(closeModalAction())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
