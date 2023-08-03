import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Txt from '~/components/Txt';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

const ScreenContainer = styled(View)`
  display: flex;
  flex: 1;
  padding-top: 100px;
  padding-left: 12px;
  padding-right: 12px;
`;
const Text1 = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 36px;
  color: #000;
  margin-bottom: 26px;
`;

const ButtonsContainer = styled(View)`
  display: flex;
  flex: 3;
  margin-bottom: 62px;
  justify-content: flex-end;
  margin-top: 24px;
`;

const InputEmailScreen: React.FC = () => {
  const validationSchema = Yup.object().shape({
    code: Yup.string().required('Required'),
  });
  const handleFormSubmit = (values: any) => {
    // Do something with the form values (e.g., submit to backend)
    console.log(values);
  };
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <Txt type="t1">Confirmá tu correo electrónico</Txt>
      <Txt type="t2">Hemos enviado un mensaje de confirmación a tu correo electrónico. Si tu código no aparece en menos de un minuto, intentá de nuevo.</Txt>
      <Formik
        initialValues={{ code: '' }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <Input
              label="Código de verificación"
              value={values.code}
              onChangeText={handleChange('code')}
              placeholder="Ingresá el código de confirmación"
              error={touched.code && errors.code}
              icon="envelope"
            />

            <ButtonsContainer>
              <Button type="primary" onPress={() => handleSubmit()}>
              Verificar cuenta
              </Button>
              <Button onPress={() => navigation.goBack()} type="tertiary">
                Reenviar código
              </Button>
            </ButtonsContainer>
          </>
        )}
      </Formik>
    </ScreenContainer>
  );
};

export default InputEmailScreen;
