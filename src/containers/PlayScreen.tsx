import React from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import Logo from '~/components/Logo';
import PlayCard from '~/components/PlayCard';
import Txt from '~/components/Txt';

const PlayOptions = [
  {
    id: 1,
    title: 'Reportar Resultado',
    desc: 'Registra tu ultimo resultado',
    icon: 'Marcador',
  },
  {
    id: 2,
    title: 'Reservar Cancha',
    desc: 'Busca y reserva tu cancha favorita',
    icon: 'Cancha',
  },
  {
    id: 3,
    title: 'Buscar Rival',
    desc: 'Creá un reto y encontrá rivales',
    icon: 'Target',
  },
  {
    id: 4,
    title: 'Entrenamiento',
    desc: 'Busca un entrenador',
    icon: 'Pito',
  },
];

const ScreenContainer = styled(View)`
  flex: 1;
  padding: 80px 16px 12px 16px;
  background-color: #fff;
  display: flex;
`;

const PlayScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Logo color="#000" />
      <Txt type="t1">Match Hub</Txt>
      <Txt type="t2">¿Qué querés hacer hoy?</Txt>

      <FlatList
        data={PlayOptions}
        contentContainerStyle={{ paddingVertical: 32 }}
        renderItem={({ item }) => (
          <PlayCard icon={item.icon || ''} title={item.title} desc={item.desc} onPress={() => {}} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* Add your login form and logic here */}
    </ScreenContainer>
  );
};

export default PlayScreen;
