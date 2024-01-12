import { TouchableOpacity, View } from 'react-native';
import Icon from './Icon';
import Txt from './Txt';

const PlayCard = ({
  onPress,
  title,
  icon,
  desc,
}: {
  onPress: () => void;
  title: string;
  icon: string;
  desc: string;
}) => {
  return (
    <TouchableOpacity
      style={{
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {
          width: 1,
          height: 0,
        },
        shadowOpacity: 0.42,
        shadowRadius: 2.22,
        elevation: 3,
        minHeight: 128,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0, .4)',
        marginBottom: 16,
        marginHorizontal: 2,
        borderRadius: 12,
        display: 'flex',
        padding: 24,
      }}
      onPress={onPress}
    >
      <View>
        <View style={{ marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Icon name={icon} size={24} fill="#000" />
          <Icon name="ArrowRight" size={24} fill="#000" />
        </View>

        <Txt type="t4">{title}</Txt>
        <Txt type="t2">{desc}</Txt>
      </View>
    </TouchableOpacity>
  );
};

export default PlayCard;
