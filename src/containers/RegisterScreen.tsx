import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';
import * as Yup from 'yup';
import Txt from '~/components/Txt';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

const ScreenContainer = styled(View)`
  display: flex;
  flex: 1;
  padding-top: 100px;
  padding-left: 12px;
  padding-right: 12px;
`;

const ButtonsContainer = styled(View)`
  display: flex;
  flex: 3;
  margin-bottom: 62px;
  justify-content: flex-end;
  margin-top: 24px;
`;

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });
  const handleFormSubmit = (values: any) => {
    // Do something with the form values (e.g., submit to backend)
    console.log(values);
  };
  return (
    <ScreenContainer>
      <Txt type='t1'>Creá tu cuenta</Txt>
      <Txt type='t2'>Al crear tu cuenta, aceptas nuestros términos y condiciones.</Txt>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <Input
              label="Correo electrónico"
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="Enter your email"
              error={touched.email && errors.email}
              icon="envelope"
            />
            <Input
              label="Contraseña"
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Enter your password"
              error={touched.password && errors.password}
              isPassword
            />
            <ButtonsContainer>
              <Button onPress={handleSubmit} type="primary">Crear cuenta</Button>
              <Button onPress={() => navigation.goBack()} type="tertiary">
                Volver
              </Button>
            </ButtonsContainer>
          </>
        )}
      </Formik>
    </ScreenContainer>
  );
};

export default RegisterScreen;
