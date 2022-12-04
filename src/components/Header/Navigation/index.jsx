import React from 'react';

import { Container, ItemLink, ScheduleLink } from './styles';

const Navigation = () => {
  return (
    <Container>
      <ItemLink href="#who_we_are">Quem somos</ItemLink>

      <ItemLink href="#members">Membros</ItemLink>

      <ScheduleLink href="https://forms.gle/t7AJvoD7GqCaBPKP7" target="_blank">
        Agendar uma sessão
      </ScheduleLink>
    </Container>
  );
};

export default Navigation;
