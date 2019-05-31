import styled from 'styled-components';

export const HomeWrap = styled.div`
  display: flex;
  flex: 1;
  margin: 24px;
  flex-direction: column;
`;

export const Title = styled.h1`
  padding-bottom: 24px;
`;

export const FieldError = styled.p`
  position: absolute;
  z-index: 9999;
  font-size: 10px;
  color: red;
`;
