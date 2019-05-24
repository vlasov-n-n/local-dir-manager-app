import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border: 1px solid black;
`;

export const TableBody = styled.tbody`
  
`;

export const TableHeaderWrap = styled.thead`
  background-color: #e0e0e0;
`;

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #e0e0e0;;
  }
`;

export const RowItem = styled.td(props => ({
  padding: '6px 12px',
  borderRight: '1px solid black',
  textAlign: props.align || 'left',
  ':last-child': {
    borderRight: 'none'
  }
}));

export const ColumnTitle = styled.th`
  padding: 12px 10px;
  text-align: left;
  border-right: 1px solid black;
  :last-child {
    border-right: none
  }
`;
