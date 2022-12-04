import React from 'react';

import { Section, TitleContainer, TextContainer, Title, Text } from './styles';

const WhoWeAre = () => {
  return (
    <Section id="who_we_are">
      <TitleContainer>
        <Title>Quem somos</Title>
      </TitleContainer>
      <TextContainer>
        <Text>
          Olá! Nós somos o grupo Cogniful, formado por psicólogos que oferecem serviços de
          atendimento psicoterapêutico.
          <br />
          <br />
          Fomos estudantes da mesma turma de psicologia da PUCPR, onde nos conhecemos e nos tornamos
          amigos, descobrindo também interesses profissionais em comum. Iniciando a carreira de
          psicólogos, percebemos a necessidade de compartilhar experiências e conhecimentos para um
          maior desenvolvimento profissional. Neste primeiro momento, criamos um grupo de estudos e
          intervisão que cumpriu com esses propósitos. Ao longo dos encontros, pudemos notar os
          resultados positivos em nossos atendimentos individuais discutidos nesses encontros, e a
          partir daí surgiu a ideia de criar algo em conjunto, dando um nome e forma ao projeto:
          Cogniful!
          <br />
          <br />
          Nós do grupo Cogniful trabalhamos com abordagens cognitivo-comportamentais da psicologia,
          as quais são dinâmicas, interativas e colaborativas, de forma que terapeuta e paciente
          trabalham em conjunto diante das questões levantadas para buscar soluções mais saudáveis e
          correspondentes com os objetivos do paciente, além da promoção de sua saúde mental e de
          uma vida mais valorosa.
          <br />
          <br />
          Qualquer dúvida, ficamos à disposição!
        </Text>
      </TextContainer>
    </Section>
  );
};

export default WhoWeAre;
