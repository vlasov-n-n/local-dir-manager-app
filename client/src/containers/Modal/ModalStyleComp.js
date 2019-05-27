import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: fixed;
  z-index: 1300;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalBackground = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  position: fixed;
  touch-action: none;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-width: 450px;
  min-height: 400px;
  border-radius: 4px;
`;

export const ModalTitle = styled.div`
  padding: 24px 24px;
`;

export const ModalList = styled.ul`
  margin: 24px;
  flex: 1;
`;

export const ModalListItem = styled.li`
  display: flex;
  height: 33px;
  :nth-child(odd) {
    background-color: #f5f5f5;
  }
`;

export const FileListItem = styled.div(props => ({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '6px',
  width: props.width,
  borderRight: props.border && '1px solid rgba(224, 224, 224, 1)'
}));

export const ModalBtn = styled.div`
  padding: 24px 24px;
  display: flex;
  flex-direction: row-reverse;
`;
