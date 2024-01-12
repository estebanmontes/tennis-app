import { Text } from 'react-native';
import styled from 'styled-components/native';

const Text2 = styled(Text)`
  font-family: 'DMSans-Regular';
  font-size: 16px;
  color: ${(props: TextProps) => props.color ?? '#000'};
  font-weight: 400;
  margin-bottom: 8px;
`;

const Text1 = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 36px;
  color: ${(props: TextProps) => props.color ?? '#000'};
`;

const Text3 = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 24px;
  color: ${(props: TextProps) => props.color ?? '#000'};
`;

const Text4 = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 16px;
  font-weight: 700;
  color: ${(props: TextProps) => props.color ?? '#000'};
`;

const TextMono = styled(Text)`
  font-family: 'DMSans-Mono';
  font-size: 16px;
  font-weight: 400;
  color: ${(props: TextProps) => props.color ?? '#000'};
  text-transform: ${(props: TextProps) => (props.uppercase ? 'uppercase' : 'none')};
`;

interface TextProps {
  type: 't1' | 't2' | 't3' | 't4' | 'mono';
  children: string;
  color?: string;
  uppercase?: boolean;
}

const Txt: React.FC<TextProps> = ({ type, children, ...props }) => {
  if (type === 't1') {
    return <Text1 {...props}>{children}</Text1>;
  }
  if (type === 't2') {
    return <Text2 {...props}>{children}</Text2>;
  }
  if (type === 't3') {
    return <Text3 {...props}>{children}</Text3>;
  }
  if (type === 't4') {
    return <Text4 {...props}>{children}</Text4>;
  }
  if (type === 'mono') {
    return <TextMono {...props}>{children}</TextMono>;
  }
};
export default Txt;
