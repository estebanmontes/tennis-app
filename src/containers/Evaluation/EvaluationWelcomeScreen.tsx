import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';
import Logo from '~/components/Logo';
import Txt from '~/components/Txt';

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
  padding: 80px 16px 16px 16px;
  background-color: #000;
  display: flex;
`;

const OptionsContainer = styled(View)`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 62px;
`;

const EvaluationWelcome: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <Logo />
      <OptionsContainer>
        <Txt color={'#fff'} uppercase={true} type="mono">
          Bienvenido al club
        </Txt>
        <BigText>Descubrí tu nivel NTPR.</BigText>
        <Paragraph>
          A través de 7 preguntas, evaluaremos tu experiencia y destrezas en tenis para brindarte
          una experiencia acorde.
        </Paragraph>
        <Button onPress={() => navigation.navigate('QuestionaireScreen')} type="primary">
          Iniciar evaluación
        </Button>
      </OptionsContainer>
    </ScreenContainer>
  );
};

export default EvaluationWelcome;
