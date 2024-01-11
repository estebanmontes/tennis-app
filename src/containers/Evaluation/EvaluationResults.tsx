import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';
import Loader from '~/components/Loader';
import Logo from '~/components/Logo';
import Txt from '~/components/Txt';
import { useAuth } from '~/context/authContext';
import { addLevel } from '~/services/profileServices';

import { ResultData } from './data';

const BigText = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 44px;
  font-weight: 700;
  line-height: 62px; /* 60px */
  letter-spacing: -1.8px;
`;

const Paragraph = styled(Text)`
  font-family: 'DMSans-Regular';
  font-size: 16px;
  width: 90%;
  margin-bottom: 18px;
`;

const ScreenContainer = styled(View)`
  flex: 1;
  padding: 80px 16px 16px 16px;
  background-color: #fff;
  display: flex;
`;

const OptionsContainer = styled(View)`
  flex: 2;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 62px;
`;

const ButtonContainer = styled(View)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
`;

const EvaluationResult: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const { updateUserInfo } = useAuth();
  // console.log(route.params);
  const getSumOfResults = (results: any[]) => {
    return results.reduce((acc, result) => acc + result.answer, 0);
  };
  React.useEffect(() => {
    const sumOfResults = getSumOfResults(route.params.data);
    console.log('hey', sumOfResults);
    if (sumOfResults >= 7) {
      console.log('set', ResultData[5]);
      setData(ResultData[5]);
    }
    if (sumOfResults >= 5 && sumOfResults < 7) {
      console.log('set', ResultData[4]);
      setData(ResultData[4]);
    }
    if (sumOfResults > 3 && sumOfResults < 5) {
      console.log('set', ResultData[3]);
      setData(ResultData[3]);
    }
    if (sumOfResults >= 1 && sumOfResults <= 3) {
      console.log('set', ResultData[2]);
      setData(ResultData[2]);
    }
    if (sumOfResults === 0) {
      setData(ResultData[0]);
    }
  }, [route.params.data]);

  const onPressCreate = async () => {
    setLoading(true);
    const response = await addLevel(data?.level);
    if (response && response.user) {
      updateUserInfo(response.user);
      setLoading(false);
      return navigation.navigate('HomeScreen');
    }
  };

  return (
    <ScreenContainer>
      <Logo />
      <Loader isVisible={loading} />
      <OptionsContainer>
        <Txt type="t3">{'Sobre tu nivel'}</Txt>
        <BigText>Jugador {data?.level}</BigText>
        <Paragraph>{data?.description}</Paragraph>
      </OptionsContainer>
      <ButtonContainer>
        <Button onPress={onPressCreate} type="primary">
          Crear mi perfil y unirme al club
        </Button>
        <Button
          border
          onPress={() => navigation.navigate('EvaluationWelcomeScreen')}
          type="secondary"
        >
          Retomar mi evaluación
        </Button>
      </ButtonContainer>
    </ScreenContainer>
  );
};

export default EvaluationResult;
