import styled, { css } from 'styled-components';

export const Container = styled.button`
  display: flex;
  position: fixed;
  z-index: 0;

  ${({ posTop, posBottom, posLeft, posRight }) => {
    const top = posTop ? posTop : 'auto';
    const bottom = posBottom ? posBottom : 'auto';
    const left = posLeft ? posLeft : 'auto';
    const right = posRight ? posRight : 'auto';

    return css`
      top: ${top}px;
      bottom: ${bottom}px;
      left: ${left}px;
      right: ${right}px;
    `;
  }}
`;

export const Logo = styled.img`
  object-fit: contain;
  width: 60px;
  height: 60px;
`;
