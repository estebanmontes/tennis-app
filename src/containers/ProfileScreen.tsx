import { Formik } from 'formik';
import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';
import * as Yup from 'yup';
import Button from '~/components/Button';
import Input from '~/components/Input';
import InputRadio from '~/components/InputRadio';
import Txt from '~/components/Txt';

const ScreenContainer = styled(View)`
  display: flex;
  flex: 1;
  padding-top: 100px;
  padding-left: 12px;
  padding-right: 12px;
`;
const Label = styled.Text`
  font-size: 16px;
  font-family: 'DMSans-Regular';
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const ButtonsContainer = styled(View)`
  display: flex;
  flex: 3;
  margin-bottom: 62px;
  justify-content: flex-end;
  margin-top: 24px;
`;

const genderOptions = [
  {
    value: 'male',
    label: 'Masculino',
  },
  {
    value: 'female',
    label: 'Femenino',
  },
  // {
  //   value: 'other',
  //   label: 'Mixto',
  // },
];

const InputCodeScreen: React.FC = () => {
  const validationSchema = Yup.object().shape({
    code: Yup.string().required('Required'),
  });
  const handleFormSubmit = (values: any) => {
    // Do something with the form values (e.g., submit to backend)
    console.log(values);
  };
  const [hideDate, setHideDate] = useState(false);
  return (
    <ScreenContainer>
      <Txt type="t1">Perfil de jugador</Txt>
      <TouchableWithoutFeedback accessible={false} onPress={() => setHideDate(true)}>
        <Formik
          initialValues={{ name: '', lastname: '', email: '', dob: '', sex: '', gender: '' }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
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
              <Input
                isDate={true}
                hideDate={hideDate}
                label="Fecha de nacimiento"
                value={values.dob}
                onDateChange={
                  (handleChange('dob'),
                  (value: any) => {
                    console.log('value', value);
                  })
                }
                // placeholder="Ingresá tu fecha de nacimiento"
                error={touched.dob && errors.dob}
              />
              <Label>Género</Label>
              {genderOptions.map((option, index) => (
                <InputRadio
                  key={index}
                  selected={values.gender === option.value}
                  onSelect={() => {
                    setFieldValue('gender', option.value);
                  }}
                  label={option.label}
                />
              ))}
              <ButtonsContainer>
                <Button type="primary" onPress={() => handleSubmit()}>
                  Crear Perfil
                </Button>
              </ButtonsContainer>
            </>
          )}
        </Formik>
      </TouchableWithoutFeedback>
    </ScreenContainer>
  );
};

export default InputCodeScreen;
