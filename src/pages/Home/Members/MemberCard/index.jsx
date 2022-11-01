import React from 'react';
import { Container, CoverContainer, CoverText } from './styles';

const MemberCard = ({
  data = {
    name: '',
    crp: '',
    approach: '',
  },
}) => {
  return (
    <Container>
      <CoverContainer>
        <CoverText>Ver mais</CoverText>
      </CoverContainer>

      <p>{data.name}</p>
    </Container>
  );
};

export default MemberCard;
