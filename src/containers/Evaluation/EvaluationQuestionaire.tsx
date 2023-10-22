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
  margin-bottom: 4px;
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
    text: 'Experiencia',
    question: '¿Hace cuánto tiempo empezaste a jugar tennis?',
    options: [
      'Nunca he jugado anteriormente',
      'Menos de 6 meses',
      'Menos de 1 año',
      'Menos de 2 años',
      'Mas de 2 años',
    ],
  },
  {
    text: 'Nivel',
    question: '¿Cómo calificarías tu nivel general en tennis?',
    description: '¡No seás modesto! Tratá de elegir la opción que mejor describa tu nivel.',
    options: ['Principiante', 'Intermedio', 'Avanzado', 'Experto', 'Profesional'],
  },
  {
    text: 'Tecnica',
    question: '¿Cómo calificarías el nivel de tu forehand?',
    description: 'Calificá tu nivel de consistencia al golpear estos remates.',
    options: [
      'Nada consistente',
      'Poco consistente',
      'Consistente',
      'Muy consistente',
      'Extremadamente consistente',
      'No se que es un forehand',
    ],
  },
  {
    text: 'Tecnica',
    question: '¿Cómo calificarías el nivel de tu backhand?',
    description: 'Calificá tu nivel de consistencia al golpear estos remates.',
    options: [
      'Nada consistente',
      'Poco consistente',
      'Consistente',
      'Muy consistente',
      'Extremadamente consistente',
      'No se que es un backhand',
    ],
  },
  {
    text: 'Tecnica',
    question: '¿Cómo calificarías el nivel de tu devolución?',
    description: 'Calificá tu nivel de consistencia al realizar devoluciones.',
    options: [
      'Nada consistente',
      'Poco consistente',
      'Consistente',
      'Muy consistente',
      'Extremadamente consistente',
      'No sé que es un devolución',
    ],
  },
  {
    text: 'Posicionamiento',
    question: '¿Cómo calificarías tus habilidades de posicionamiento en la cancha?',
    description: 'Elige la opción que mejor refleje tu capacidad.',
    options: ['No desarrollada', 'Mala', 'Promedio', 'Buena', 'Avanzada'],
  },
  {
    text: 'Rendimiento',
    question: '¿Cómo calificarías tu rendimiento en situaciones de partido?',
    description: 'Elige la opción que mejor refleje tu capacidad.',
    options: ['Malo', 'Bajo', 'Promedio', 'Bueno', 'Excelente'],
  },
];

const EvaluationScreen: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState(questionaire);
  const handleAnswer = (answer: number) => {
    data[step - 1].answer = answer;
    setData([...data]);
  };

  const onNext = () => {
    setStep(step + 1);
  };

  return (
    <ScreenContainer>
      <TabProgress step={step} count={7} />
      <Txt uppercase={true} type="mono">
        {data[step - 1].text}
      </Txt>
      <Question>{data[step - 1].question}</Question>
      {data[step - 1].description && <Txt type="t2">{data[step - 1].description}</Txt>}
      {data[step - 1].options.map((option, index) => (
        <InputRadio
          key={index}
          selected={data[step - 1].answer === index}
          onSelect={() => handleAnswer(index)}
          label={option}
        />
      ))}
      <BottomContainer>
        <Button onPress={() => onNext()} type="primary">
          Siguiente
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
