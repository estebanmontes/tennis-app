import styled from 'styled-components/native';
import { Text } from 'react-native';

const Text2 = styled(Text)`
  font-family: 'DMSans-Regular';
  font-size: 16px;
  color: #000;
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 18px;
`;

const Text1 = styled(Text)`
  font-family: 'DMSans-Bold';
  font-size: 36px;
  color: #000;
  margin-bottom: 26px;
`;

interface TextProps  {
    type: 't1' | 't2' | 't3';
    children: string;
  }

const Txt: React.FC<TextProps> = ({ type, children }) => {
    if (type === 't1') {
        return (
            <Text1>
                {children}
            </Text1>
        );
    }
    if (type === 't2') {
        return (
            <Text2>
                {children}
            </Text2>
        );
    }
}
export default Txt;