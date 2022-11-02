import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MemberCard from './MemberCard';
import {
  Container,
  MembersContainer,
  EmptyCard,
  MembersRow,
  Title,
  TitleContainer,
} from './styles';

const Members = ({ data = [], onClickMember = () => {} }) => {
  const [membersRows, setMembersRows] = useState([]);

  useEffect(() => {
    const rows = [];
    let row = [];

    data.forEach((element, index) => {
      row.push(element);

      if (index % 2 !== 0) {
        rows.push(row);
        row = [];
      }
    });

    if (row.length !== 0) {
      rows.push(row);
    }

    setMembersRows(rows);
  }, [data]);

  return (
    <Container>
      <TitleContainer>
        <Title>Membros</Title>
      </TitleContainer>

      <MembersContainer>
        {membersRows.map((row, index) => (
          <MembersRow key={index}>
            <MemberCard data={row[0]} onClick={onClickMember} />
            {row[1] ? <MemberCard data={row[1]} onClick={onClickMember} /> : <EmptyCard />}
          </MembersRow>
        ))}
      </MembersContainer>
    </Container>
  );
};

export default Members;
