import { Pressable, Text } from 'react-native';

import commonStyles from '../../styles/commonStyle';

export const OpenUrlButton = props => {
  return (
    <Pressable style={commonStyles.primaryButton} onPress={props.onPress}>
      <Text style={commonStyles.primaryButtonText}>{props.label}</Text>
    </Pressable>
  );
};
