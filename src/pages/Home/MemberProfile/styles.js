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
  width: 55vw;
  height: 36vw;
`;

export const ProfileImage = styled.img`
  height: 100%;
  width: 22vw;
  object-fit: cover;
  border-radius: 20px 0 0 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 36vw;
  background-color: var(--color-primary-medium);
  border-radius: 0 20px 20px 0;
  overflow-y: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 23px 20px;
  overflow-y: auto;
`;

export const MemberName = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const CRPText = styled.strong`
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const SmallTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-top: 35px;
`;
