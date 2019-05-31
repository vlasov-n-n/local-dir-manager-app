import styled from 'styled-components';

export const FieldTitle = styled.p`
  margin-right: 20px;
`;

export const DirectoryInput = styled.input(props => ({
  marginRight: '20px',
  background: 'none',
  borderBottom: props.error ? '2px solid #FF8C76' : '2px solid #ced4da',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  padding: '5px',
  outline: 'none',
  transition: 'border-bottom-color 0.6s linear',

  ':focus': {
    borderBottom: props.error ? '2px solid red' : '2px solid black'
  }
}));
