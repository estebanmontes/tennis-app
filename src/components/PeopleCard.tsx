import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components/native';
import Txt from '~/components/Txt';

const PeopleCardContainer = styled.View`
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  height: 188px;
  flex-direction: column;
  margin: 2px;
  flex: 1;
`;

const AvatarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Badge = styled.View`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 4px 8px;
  margin-left: 8px;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 8px;
`;

const CardsContainer = styled.View`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  flex-direction: row;
`;

const PeopleCard = ({ people }: { people: any[] }) => {
  return (
    <CardsContainer>
      {people.map((person) => (
        <PeopleCardContainer
          style={{
            shadowColor: 'rgba(112, 112, 112, 0.40)',
            shadowOffset: {
              width: 6,
              height: 6,
            },
            shadowOpacity: 0.3,
            shadowRadius: 8,
          }}
          key={person.id}
        >
          <Avatar source={{ uri: person.image }} />
          <Txt
            type="t4"
            color="#000"
            style={{
              textAlign: 'center',
            }}
          >
            {person.name}
          </Txt>
          <AntDesign name="caretdown" size={12} color="#CA0012" />
          <Txt
            style={{
              textAlign: 'center',
            }}
            type="t4"
            color="#000"
          >
            {`${person.score} pts`}
          </Txt>
        </PeopleCardContainer>
      ))}
    </CardsContainer>
  );
};

export default PeopleCard;
