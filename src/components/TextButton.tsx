import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
    color?: string
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
  border-radius: 8px;
  text-align: center;
  margin-top: 12px;
  min-height: 54px;
  display: flex;
  justify-content: center;
`;

const ButtonText = styled.Text<ButtonProps>`
  color: ${(props) => props.color ?? props.theme.colors.primary};
  text-decoration: underline;
  text-decoration-color: ${(props) => props.color ?? props.theme.colors.primary};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-weight: normal;
  font-weight: 500;
`;

const TextButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonText {...rest}>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default TextButton;
