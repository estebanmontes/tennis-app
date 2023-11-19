import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Platform, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
  label: string;
  error?: string | boolean;
  isPassword?: boolean;
  hideDate?: boolean;
  icon?: string;
  isDate?: boolean;
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

const Input: React.FC<InputProps> = ({
  label,
  error,
  isPassword,
  icon,
  isDate,
  hideDate,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  const onChangeDate = (event: any, selectedDate?: Date | undefined) => {
    if (event.type === 'dismissed') {
      setShowDate(false);
      return;
    }

    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };
  return (
    <InputContainer>
      <Label>{label}</Label>
      {!isDate && (
        <InputField error={error} secureTextEntry={isPassword && !showPassword} {...rest} />
      )}
      {isDate && (
        <InputField
          onFocus={() => {
            setShowDate(true);
          }}
          onBlur={() => {
            setShowDate(false);
          }}
          showSoftInputOnFocus={false}
          placeholder={formatDate(date)}
          value={formatDate(date)}
          error={error}
          {...rest}
        />
      )}
      {isDate && showDate && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChangeDate}
        />
      )}
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
