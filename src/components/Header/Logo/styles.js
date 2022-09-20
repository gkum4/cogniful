import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  justify-content: space-between;
`;

export const BoldTitle = styled.strong`
  -webkit-touch-callout: none; // iOS Safari
  -webkit-user-select: none; // Safari
  -khtml-user-select: none; // Konqueror HTML
  -moz-user-select: none; // Old versions of Firefox
  -ms-user-select: none; // Internet Explorer/Edge
  user-select: none; // Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox

  font-weight: bold;
  font-style: italic;
  font-size: 36px;
  color: var(--color-primary-dark);
`;

export const Title = styled.strong`
  -webkit-touch-callout: none; // iOS Safari
  -webkit-user-select: none; // Safari
  -khtml-user-select: none; // Konqueror HTML
  -moz-user-select: none; // Old versions of Firefox
  -ms-user-select: none; // Internet Explorer/Edge
  user-select: none; // Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox

  font-weight: normal;
  font-style: italic;
  font-size: 36px;
  color: var(--color-primary-dark);

  margin-left: 5px;
`;
