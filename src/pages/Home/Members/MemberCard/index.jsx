import React, { useCallback, useMemo } from 'react';
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
    approaches: [],
    profileImage: '',
  },
  onClick = () => {},
}) => {
  const handleClick = useCallback(() => {
    onClick(data);
  }, [data]);

  const approaches = useMemo(() => {
    return (
      <>
        {data.approaches.map((approach, index) => {
          if (index === 0) {
            return approach;
          }

          return (
            <>
              <br />
              {approach}
            </>
          );
        })}
      </>
    );
  }, []);

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
          <InformationText>{approaches}</InformationText>
        </PsychologistInformationContainer>
      </InformationContainer>
    </Container>
  );
};

export default MemberCard;
