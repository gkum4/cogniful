import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  width: 430px;
  height: 220px;
  flex-direction: row;
  position: relative;
  color: var(--color-white);
`;

export const CoverContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #00000090;
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
  font-size: 16px;
  font-weight: 600;
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MemberImage = styled.img`
  object-fit: cover;
  width: 135px;
  height: 135px;
  border-radius: 50%;
`;

export const InformationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const NameContainer = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  /* align-items: center; */
  justify-content: end;
  padding-bottom: 7px;
`;

export const NameText = styled.strong`
  font-size: 21px;
  font-weight: 600;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-white);
`;

export const PsychologistInformationContainer = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  padding-top: 7px;
  padding-left: 10px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const InformationText = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: start;
`;
