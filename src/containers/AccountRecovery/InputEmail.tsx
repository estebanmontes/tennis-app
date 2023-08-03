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
    email: Yup.string().email('Invalid email').required('Required'),
  });
  const handleFormSubmit = (values: any) => {
    // Do something with the form values (e.g., submit to backend)
    console.log(values);
  };
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <Txt type="t1">Recuperá tu contraseña</Txt>
      <Txt type="t2">Ingresá el correo electrónico asociado a tu cuenta. Enviaremos un código de confirmación para restablecer tu contraseña.</Txt>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <Input
              label="Correo electrónico"
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="Ingresá tu correo electrónico"
              error={touched.email && errors.email}
              icon="envelope"
            />

            <ButtonsContainer>
              <Button type="primary" onPress={() => handleSubmit()}>
              Enviar código
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
