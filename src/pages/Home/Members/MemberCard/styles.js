import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  width: 275px;
  height: 105px;
  flex-direction: row;
  position: relative;
  color: var(--color-white);
`;

export const CoverContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00000081;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export const CoverText = styled.strong`
  font-size: 14px;
  font-weight: 600;
`;
