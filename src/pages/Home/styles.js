import styled, { css } from 'styled-components';
import { headerHeight } from '../../components/Header/styles';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  position: relative;
  overflow-x: hidden;
`;

export const MainLogoButtonContainer = styled.div`
  display: flex;
  height: calc(100vh - ${headerHeight}px);
  justify-content: center;
  align-items: center;
  transition: height 1s;

  ${({ shouldShrink }) =>
    shouldShrink &&
    css`
      height: 0;
    `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 980px;
`;
