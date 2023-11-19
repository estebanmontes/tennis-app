import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  type: 'primary' | 'secondary' | 'tertiary';
  border?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
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
  flex-direction: row;
  border: ${(props) => (props.border ? `2px solid #C0C0C0` : 'none')};
  align-items: center;
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

const IconLeftContainer = styled.View`
  margin-right: 12px;
`;
const IconRightContainer = styled.View`
  margin-left: 12px;
`;

const Button: React.FC<ButtonProps> = ({ iconLeft, type, children, iconRight, ...rest }) => {
  return (
    <ButtonContainer type={type} {...rest}>
      {iconLeft && <IconLeftContainer>{iconLeft}</IconLeftContainer>}
      <ButtonText type={type}>{children}</ButtonText>
      {iconRight && <IconRightContainer>{iconRight}</IconRightContainer>}
    </ButtonContainer>
  );
};

export default Button;
