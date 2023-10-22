import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Yup from 'yup';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Txt from '~/components/Txt';

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

const InputCodeScreen: React.FC = () => {
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
      <Txt type="t1">Perfil de jugador</Txt>
      <Formik
        initialValues={{ name: '', lastname: '', email: '', dob: '', sex: '' }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <Input
              label="Nombre"
              value={values.name}
              onChangeText={handleChange('name')}
              placeholder="Ingresá tu nombre"
              error={touched.name && errors.name}
            />
            <Input
              label="Apellido"
              value={values.lastname}
              onChangeText={handleChange('lastname')}
              placeholder="Ingresá tu apellido"
              error={touched.lastname && errors.lastname}
            />

            <ButtonsContainer>
              <Button type="primary" onPress={() => handleSubmit()}>
                Crear Perfil
              </Button>
            </ButtonsContainer>
          </>
        )}
      </Formik>
    </ScreenContainer>
  );
};

export default InputCodeScreen;
