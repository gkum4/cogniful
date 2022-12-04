import styled from 'styled-components';
import { headerHeight } from '../../../components/Header/styles';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - ${headerHeight}px);
  justify-content: center;
`;

export const TitleContainer = styled.div`
  width: 280px;
  margin-bottom: 10px;
`;

export const TextContainer = styled.div`
  width: 700px;
  margin-left: 300px;
`;

export const Title = styled.h2``;

export const Text = styled.p`
  font-size: 20px;
  line-height: 25px;
`;
