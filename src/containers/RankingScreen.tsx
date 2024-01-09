import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';
import PeopleCard from '~/components/PeopleCard';
import RankingList from '~/components/RankingList';
import { useAuth } from '~/context/authContext';
import { RankingData } from '../../assets/dummyData/data';
import Txt from '../components/Txt';

const RankinContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

const ScreenContainer = styled(View)`
  background-color: #fff;
  padding: 80px 16px 16px 16px;
  display: flex;
  flex: 1;
`;

const BigText = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 60px;
  color: #000;
  font-weight: bold;
  line-height: 62px; /* 60px */
  margin-top: 12px;
  letter-spacing: -1.8px;
`;

const NoResultContainer = styled(View)`
  display: flex;
  text-align: center;
  width: 90%;
  align-items: center;
  margin: 0 auto;
`;

const RankingScreen: React.FC = () => {
  const { userInfo } = useAuth();
  const rankingTopThree = RankingData.slice(0, 3);
  return (
    <ScreenContainer>
      <Txt type="t3" color="#000" uppercase={false}>
        Tu Ranking
      </Txt>
      <Txt type={'t1'}>{userInfo?.level}</Txt>
      <Txt type="t2" color="#000" uppercase={false}>
        {'Este ranking muestra jugadores nivel 4.5 NTPR en adelante. '}
      </Txt>
      <RankinContainer>
        <Button
          style={{
            width: '80%',
            marginRight: 12,
          }}
          type="tertiary"
          iconRight={<FontAwesome name="bolt" size={24} color="white" />}
        >
          <>Reportar Marcador</>
        </Button>
        <Button type="secondary" border>
          <FontAwesome name="filter" size={24} color="black" />
        </Button>
      </RankinContainer>
      <PeopleCard people={rankingTopThree} />
      <RankingList rankings={RankingData} />
      {/* <NoResultContainer>
        <LookingIcon width={200} height={200} />
        <Txt
          style={{
            textAlign: 'center',
          }}
          type="t3"
          color="#000"
          uppercase={false}
        >
          Aún no hay jugadores registrados en esta categoría.
        </Txt>
        <Txt
          style={{
            textAlign: 'center',
          }}
          type="t2"
          color="#000"
          uppercase={false}
        >
          ¡Nuestro club acaba de comenzar! Invita a tus amigos a unirse a nosotros.
        </Txt>
      </NoResultContainer> */}
      {/* Add your login form and logic here */}
    </ScreenContainer>
  );
};

export default RankingScreen;
