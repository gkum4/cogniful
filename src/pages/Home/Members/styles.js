import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const MembersContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  > div {
    margin-top: 30px;
  }
  > div:first-child {
    margin-top: 0px;
  }
`;

export const MembersRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > button:first-child {
    margin-right: 50px;
  }
`;

export const EmptyCard = styled.div`
  width: 275px;
  height: 105px;
`;
