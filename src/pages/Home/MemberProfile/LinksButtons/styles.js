import styled from 'styled-components';

export const Container = styled.p`
  display: flex;
  flex-direction: row;

  > a {
    margin-left: 15px;
    &:first-child {
      margin-left: 0;
    }

    > svg {
      width: 25px;
      height: 25px;
    }
  }
`;
