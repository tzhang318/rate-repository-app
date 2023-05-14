import { View, StyleSheet } from 'react-native';
import Text from '../common/Text';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  label: {
    color: theme.colors.gray
  }
});

export const RepoStats = ({ label, counts }) => {
  return (
    <View style={styles.container}>
      <Text fontSize='subheading' fontWeight='bold'>{counts}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
