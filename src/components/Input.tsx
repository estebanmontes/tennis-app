import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  label: string;
  error?: string | boolean;
  isPassword?: boolean;
  icon?: string;
}

const InputContainer = styled.View`
  margin-bottom: 16px;
  position: relative;
`;

const Label = styled.Text`
  font-size: 16px;
  font-family: 'DMSans-Regular';
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const InputField = styled.TextInput`
  font-size: 16px;
  font-family: 'DMSans-Regular';
  font-size: 16px;
  font-weight: 400;
  border-radius: 12px;
  padding: 16px;
  min-height: 52px;
  border: 2px solid ${(props) => (props.error ? props.theme.colors.error : props.theme.colors.gray)};
`;

const IconContainer = styled.View`
  position: absolute;
  top: 45px;
  right: 16px;
`;

const ErrorText = styled.Text`
  color: ${(props) => props.theme.colors.error};
`;

const PasswordToggleIcon = styled.TouchableOpacity``;

const Input: React.FC<InputProps> = ({ label, error, isPassword, icon, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField error={error} secureTextEntry={isPassword && !showPassword} {...rest} />
      {icon && (
        <IconContainer>
          <FontAwesome name={icon} size={20} color="black" />
        </IconContainer>
      )}
      {isPassword && (
        <IconContainer>
          <PasswordToggleIcon onPress={togglePasswordVisibility}>
            <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={20} color="black" />
          </PasswordToggleIcon>
        </IconContainer>
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default Input;
