import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  type: 'primary' | 'secondary' | 'tertiary';
}

const getBackgroundColor = (type: ButtonProps['type'], theme: any) => {
  switch (type) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.white;
    case 'tertiary':
      return theme.colors.black;
  }
};

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => getBackgroundColor(props.type, props.theme)};
  padding: 12px 24px;
  border-radius: 8px;
  text-align: center;
  margin-top: 12px;
  min-height: 54px;
  display: flex;
  justify-content: center;
`;

const ButtonText = styled.Text<ButtonProps>`
  color: ${(props) =>
    props.type === 'tertiary' ? props.theme.colors.white : props.theme.colors.black};
  font-size: 16px;
  text-align: center;
  font-weight: normal;
  font-weight: 500;
`;

const Button: React.FC<ButtonProps> = ({ type, children, ...rest }) => {
  return (
    <ButtonContainer type={type} {...rest}>
      <ButtonText type={type}>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
