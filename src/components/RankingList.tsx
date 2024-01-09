import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import Txt from '~/components/Txt';

const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  margin-left: 8px;
  border-radius: 15px;
`;

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
`;

const RankingList = ({ rankings }) => {
  //   useEffect(() => {
  //     const getRankings = async () => {
  //       const response = await fetch('http://localhost:3000/api/rankings');
  //       const rankings = await response.json();
  //       setRankings(rankings);
  //     };
  //     getRankings();
  //   }, []);

  const RankingItem = ({ ranking, position }: { ranking: any }) => (
    <ItemContainer>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Txt type="t4" color="#000">
          {position + 1}
        </Txt>
        <Avatar source={{ uri: ranking.image }} />
        <Txt type="t2" color="#000">
          {ranking.name}
        </Txt>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <AntDesign name="caretdown" size={12} color="green" />
        <Txt type="t4" color="#000">
          {`${ranking.score} pts`}
        </Txt>
      </View>
    </ItemContainer>
  );

  return (
    <View
      style={{
        marginTop: 12,
        marginHorizontal: 16,
        marginBottom: 36,
        paddingBottom: 36,
        height: 300,
      }}
    >
      <FlatList
        data={rankings}
        renderItem={({ item, index }) => <RankingItem ranking={item} position={index} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RankingList;
