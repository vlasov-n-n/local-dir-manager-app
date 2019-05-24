import styled from 'styled-components';

export const ModalWrap = styled.div(props => ({
  display: props.isOpen ? 'flex' : 'none',
}));
