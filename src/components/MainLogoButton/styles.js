import styled, { css } from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s, transform 2s;
  transform: rotateY(180deg);

  &:hover {
    opacity: 0.8;
  }

  ${({ visible }) =>
    !visible &&
    css`
      transform: rotateY(360deg);

      > img {
        opacity: 0;
      }

      > img:nth-child(1) {
        transform: translateX(-30vw);
      }

      > img:nth-child(3) {
        transform: translateX(30vw);
      }
    `}
`;

export const ImagePart = styled.img`
  width: 110px;

  &:nth-child(2) {
    margin: 0 20px;
    width: 80px;
  }

  transition: transform 2s, opacity 2s;
  transition-delay: 2.2s;
`;
