import styled from 'styled-components';

export const SectionWrap = styled.div(props => ({
  paddingBottom: '24px',
  width: '100%',
  display: 'flex',
  flexDirection: props.direction || 'rows',
  alignItems: props.alignItems || null
}));

export const SectionTitle = styled.h3`
  padding-bottom: 12px;
`;

export const ButtonComp = styled.button`
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  border-bottom-color: rgb(221, 221, 221);
  background-color: rgb(221, 221, 221);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 400;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  outline:none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(224,224,224,1);
`;
