import { View, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.mainPage
  },
  verticalSeparator: {
    width: 10
  }
});

export const Separator = () => <View style={styles.separator} />;

export const VerticalSeparator = () => <View style={styles.verticalSeparator} />;
