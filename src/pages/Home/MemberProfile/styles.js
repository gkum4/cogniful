import styled, { css } from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background-color: #00000081;

  transition: opacity 0.5s, visibility 0.5s;

  ${({ visible }) =>
    !visible &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 509px;
`;

export const ProfileImage = styled.img`
  height: 100%;
  width: 330px;
  object-fit: cover;
  border-radius: 20px 0 0 20px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary-medium);
  flex-direction: column;
  border-radius: 0 20px 20px 0;
  padding: 23px 20px;
`;

export const MemberName = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const CRPText = styled.strong`
  font-size: 16px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const SmallTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
`;

export const Spacer = styled.div`
  height: ${({ verticalSpacing }) => (verticalSpacing ? verticalSpacing : 0)}px;
  width: ${({ horizontalSpacing }) => (horizontalSpacing ? horizontalSpacing : 0)}px;
`;
