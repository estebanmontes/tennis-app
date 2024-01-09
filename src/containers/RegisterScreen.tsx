import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import * as Yup from 'yup';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Loader from '~/components/Loader';
import Txt from '~/components/Txt';
import { useAuth } from '~/context/authContext';

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
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });
  const theme = useTheme();
  const { register } = useAuth();

  const handleFormSubmit = async (values: any) => {
    setLoading(true);
    console.log(values);
    const res = await register(values);
    if (res && res.success) {
      setLoading(false);
      navigation.navigate('EvaluationWelcomeScreen');
    } else {
      console.log('error', res);
      setLoading(false);
      setError(res.message);
    }
  };

  console.log(theme.colors.error);

  return (
    <ScreenContainer>
      <Txt type="t1">Creá tu cuenta</Txt>
      <Txt type="t2">Al crear tu cuenta, aceptas nuestros términos y condiciones.</Txt>
      <Loader isVisible={loading} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            {error ? (
              <Txt type="t2" color={theme.colors.error}>
                {error}
              </Txt>
            ) : null}
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
              <Button onPress={handleSubmit} type="primary">
                Crear cuenta
              </Button>
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
