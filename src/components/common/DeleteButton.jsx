import { Pressable, Text } from 'react-native';

import commonStyles from '../../styles/commonStyle';

export const DeleteButton = props => {
  return (
    <Pressable
      style={[
        commonStyles.primaryButton,
        commonStyles.deleteButton
      ]}
      onPress={props.onPress}
    >
      <Text style={commonStyles.primaryButtonText}>{props.label}</Text>
    </Pressable>
  );
};
