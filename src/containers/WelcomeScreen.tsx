import React from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av';
import styled from 'styled-components/native';
import Button from '~/components/Button';
import TextButton from '~/components/TextButton';
import { useNavigation } from '@react-navigation/native';

const VideoBackground = styled(Video)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const BigText = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 60px;
  color: #fff;
  font-weight: bold;
  line-height: 62px; /* 60px */
  letter-spacing: -1.8px;
`;

const Paragraph = styled(Text)`
  font-family: 'DMSans-Regular';
  font-size: 16px;
  color: #fff;
  width: 90%;
  margin-bottom: 18px;
`;

const ScreenContainer = styled(View)`
  flex: 1;
  padding: 16px;
  display: flex;
`;

const OptionsContainer = styled(View)`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 62px;
`;

const LineButton = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-right: 32px;
  margin-left: 32px;
`;

const Text1 = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-bottom: 18px;
`;

const Text2 = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 12px;
`;

const TextBtn = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 16px;
  color: #fff;
  top: 7px;
`;

const LoginScreen: React.FC = () => {
  const [showMore, setShowMore] = React.useState(false);
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <VideoBackground
        source={require('../../assets/login-bg.mp4')}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      {!showMore && (
        <OptionsContainer>
          <BigText>Bienvenido al club.</BigText>
          <Paragraph>
            Unite y prepárate para competir con otros jugadores de tu nivel para estar en la cima de
            nuestro ranking.
          </Paragraph>
          <Button onPress={() => setShowMore(!showMore)} type="primary">
            Crear cuenta
          </Button>
          <Button onPress={() => navigation.navigate('LoginScreen')} type="secondary">
            Iniciar sesión
          </Button>
        </OptionsContainer>
      )}

      {showMore && (
        <OptionsContainer>
          <Text1> Creá tu cuenta</Text1>
          <Button onPress={() => navigation.navigate('RegisterScreen')} type="primary">
            Registrar correo electrónico
          </Button>
          <Text2> Otras opciones</Text2>
          <Button onPress={() => setShowMore(!showMore)} type="secondary">
            Continuar con Google
          </Button>
          <Button onPress={() => setShowMore(!showMore)} type="tertiary">
            Volver
          </Button>
          <LineButton>
            <TextBtn>Ya tenes una cuenta ?</TextBtn>
            <TextButton onPress={() => navigation.navigate('LoginScreen')}> Iniciá sesión</TextButton>
          </LineButton>
          
        </OptionsContainer>
      )}
    </ScreenContainer>
  );
};

export default LoginScreen;
