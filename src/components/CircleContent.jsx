import { Text, View, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    borderColor: theme.colors.primary,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }
});

export const CircleContent = ({ text, myStyle }) => (
  <View style={[styles.container, myStyle]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);