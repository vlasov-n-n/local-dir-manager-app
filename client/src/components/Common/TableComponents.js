import styled from 'styled-components';

export const TableWrap = styled.div(props => ({
  minWidth: props.minWidth
}));

export const Table = styled.table`
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 5px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  width: 100%;
`;

export const TableBody = styled.tbody`

`;

export const TableHeaderWrap = styled.thead`

`;

export const TableRow = styled.tr`
    :nth-child(even) {
      background-color: #f5f5f5;
  }
`;

export const RowItem = styled.td(props => ({
  padding: '6px 12px',
  borderRight: '1px solid rgba(224, 224, 224, 1);',
  textAlign: props.align || 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  ':last-child': {
    borderRight: 'none'
  },
}));

export const ColumnTitle = styled.th`
  color: rgba(0, 0, 0, 0.54);
  padding: 12px 10px;
  text-align: left;
  font-size: 0.675rem;
  font-weight: 400;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  border-right: 1px solid rgba(224, 224, 224, 1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  :last-child {
    border-right: none
  }
`;
