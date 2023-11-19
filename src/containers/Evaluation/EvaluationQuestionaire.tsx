import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';
import InputRadio from '~/components/InputRadio';
import TabProgress from '~/components/TabsProgress';
import Txt from '~/components/Txt';

const Question = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 24px;
  color: #000;
  width: 90%;
  margin-top: 12px;
  margin-bottom: 16px;
`;

const ScreenContainer = styled(View)`
  flex: 1;
  background-color: #fff;
  padding: 80px 16px 16px 16px;
  display: flex;
`;

const BottomContainer = styled(View)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const questionaire = [
  {
    text: 'Nivel',
    question: '¿Cómo calificarías tu nivel general en tennis?',
    description: '¡No seás modesto! Tratá de elegir la opción que mejor describa tu nivel.',
    options: ['Novato', 'Principiante', 'Avanzado', 'Experto', 'Open'],
  },
  {
    text: 'Experiencia',
    question: '¿Hace cuánto tiempo empezaste a jugar tennis?',
    options: [
      'Recien inicio',
      'Menos de 2 años',
      'Mas de 4 años',
      'Mas de 6 años',
      'Mas de 8 años',
    ],
  },
];

const questionaireNTPR = [
  {
    text: 'Nivel',
    question: '¿Conocés tu ranking NTPR?',
    options: [
      'No lo conozco',
      'Principiante (1.0 a 2.5 NTPR)',
      'Intermedio (3.0 a 4.o NTPR)',
      'Avanzado (4.5 en adelante NTPR)',
    ],
  },
  {
    text: 'Experiencia',
    question: '¿Hace cuánto tiempo empezaste a jugar tennis?',
    options: [
      'Recien inicio',
      'Menos de 2 años',
      'Mas de 4 años',
      'Mas de 6 años',
      'Mas de 8 años',
    ],
  },
];

const EvaluationScreen: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const route = useRoute();
  const isNTPR = route.params?.isNTPR;
  const navigation = useNavigation();
  const [data, setData] = React.useState(isNTPR ? questionaireNTPR : questionaire);

  const handleAnswer = (answer: number) => {
    data[step - 1].answer = answer;
    setData([...data]);
  };

  const onNext = () => {
    setStep(step + 1);
    if (step === 2) {
      navigation.navigate('EvaluationResultsScreen', {
        data,
      });
    }
  };

  React.useEffect(() => {
    if (isNTPR) {
      setData(questionaireNTPR);
    } else {
      setData(questionaire);
    }
  }, []);

  return (
    <ScreenContainer>
      <TabProgress step={step} count={2} />
      <Txt uppercase={true} type="mono">
        {data[step - 1]?.text}
      </Txt>
      <Question>{data[step - 1]?.question}</Question>
      {data[step - 1]?.description && <Txt type="t2">{data[step - 1]?.description}</Txt>}
      {data[step - 1]?.options.map((option, index) => (
        <InputRadio
          key={index}
          selected={data[step - 1].answer === index}
          onSelect={() => handleAnswer(index)}
          label={option}
        />
      ))}
      <BottomContainer>
        <Button onPress={() => onNext()} type="primary">
          {
            {
              1: 'Siguiente',
              2: 'Ver resultado',
            }[step]
          }
        </Button>
        {step > 1 && (
          <Button
            style={{ borderWidth: 2, borderColor: '#C0C0C0' }}
            onPress={() => setStep(step - 1)}
            type="secondary"
          >
            Anterior
          </Button>
        )}
      </BottomContainer>
    </ScreenContainer>
  );
};

export default EvaluationScreen;
