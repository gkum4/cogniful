import styled from 'styled-components';

export const headerHeight = 74;

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: ${headerHeight}px;
  align-items: flex-end;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 980px;
  align-items: center;
  justify-content: space-between;
`;
