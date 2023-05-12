import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: 'white'
  },
  verticalSeparator: {
    width: 10
  }
});

export const Separator = () => <View style={styles.separator} />;

export const VerticalSeparator = () => <View style={styles.verticalSeparator} />;
