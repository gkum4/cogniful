import React from 'react';

import { Container, ItemLink, ScheduleLink } from './styles';

const Navigation = () => {
  return (
    <Container>
      <ItemLink href="" target="_blank">
        Quem somos
      </ItemLink>

      <ItemLink href="" target="_blank">
        Sobre o nosso trabalho
      </ItemLink>

      <ScheduleLink href="" target="_blank">
        Agendar uma sessão
      </ScheduleLink>
    </Container>
  );
};

export default Navigation;
