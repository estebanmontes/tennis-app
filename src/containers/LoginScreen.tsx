import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import * as Yup from 'yup';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Loader from '~/components/Loader';
import TextButton from '~/components/TextButton';
import { useAuth } from '~/context/authContext';

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

const LoginScreen: React.FC = () => {
  const theme = useTheme();
  const [loading, setLoading] = React.useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });
  const { login } = useAuth();
  const handleFormSubmit = async (values: any) => {
    setLoading(true);
    // Do something with the form values (e.g., submit to backend)
    const response = await login(values.email, values.password);
    console.log('login res', response);
    const { user } = response;
    if (user) {
      setLoading(false);
      navigation.navigate('EvaluationWelcomeScreen');
    }
    setLoading(false);
    console.log(values);
  };
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <Text1>Iniciá sesión</Text1>
      <Loader isVisible={loading} />
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
              <Button type="primary" onPress={() => handleSubmit()}>
                Iniciar sesión
              </Button>
              <TextButton
                onPress={() => navigation.navigate('InputEmailScreen')}
                color={theme.colors.green}
              >
                Olvidaste tu contraseña?
              </TextButton>
            </ButtonsContainer>
          </>
        )}
      </Formik>
    </ScreenContainer>
  );
};

export default LoginScreen;
