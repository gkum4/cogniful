import React from 'react';
import { useCallback } from 'react';
import {
  Container,
  CoverContainer,
  CoverText,
  ImageContainer,
  InformationContainer,
  InformationText,
  Line,
  MemberImage,
  NameContainer,
  NameText,
  PsychologistInformationContainer,
} from './styles';
// import MemberMock from '../../../../assets/mock.jpg';

const MemberCard = ({
  data = {
    name: '',
    crp: '',
    gender: '',
    approach: '',
    profileImage: '',
  },
  onClick = () => {},
}) => {
  const handleClick = useCallback(() => {
    onClick(data);
  }, [data]);

  return (
    <Container onClick={handleClick}>
      <CoverContainer>
        <CoverText>Ver mais</CoverText>
      </CoverContainer>

      <ImageContainer>
        <MemberImage src={data.profileImage} />
      </ImageContainer>

      <InformationContainer>
        <NameContainer>
          <NameText>{data.name}</NameText>
        </NameContainer>

        <Line />

        <PsychologistInformationContainer>
          <InformationText>
            Psicólog{data.gender === 'male' ? 'o' : 'a'} - CRP {data.crp}
          </InformationText>
          <InformationText>{data.approach}</InformationText>
        </PsychologistInformationContainer>
      </InformationContainer>
    </Container>
  );
};

export default MemberCard;
