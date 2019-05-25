import styled from 'styled-components';

export const FieldTitle = styled.p`
  margin-right: 20px;
`;

export const DirectoryInput = styled.input`
  margin-right: 20px;
  background: none;
  border-bottom: 2px solid #ced4da;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 5px;
  outline:none;
  
  transition: border-bottom-color 0.6s linear;
  
  :focus {
    border-bottom: 2px solid black;  
  }
`;
