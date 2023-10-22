import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components/native';
const RadioButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const RadioButtonLabel = styled.Text`
  font-family: 'DMSans-Regular';
  font-size: 16px;
  font-weight: 400;
  color: #000;
  margin-left: 8px;
`;

const RadioButton = ({ label, selected, onSelect }) => {
  return (
    <RadioButtonContainer onPress={onSelect}>
      <FontAwesome name={selected ? 'dot-circle-o' : 'circle-o'} size={24} color="black" />
      <RadioButtonLabel>{label}</RadioButtonLabel>
    </RadioButtonContainer>
  );
};

export default RadioButton;
