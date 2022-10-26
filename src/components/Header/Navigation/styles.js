import styled, { css } from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  > button,
  > a {
    margin-left: 25px;
  }
`;

export const ItemLink = styled.a`
  font-weight: normal;
  font-size: 14px;
  color: var(--color-primary-dark);
  ${({ isCurrentPage }) =>
    isCurrentPage &&
    css`
      font-weight: bold;
    `};
`;

export const ScheduleLink = styled.a`
  font-weight: normal;
  font-size: 14px;
  padding: 12px 10px;
  color: var(--color-primary-dark);
  background-color: var(--color-secondary-medium);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;
