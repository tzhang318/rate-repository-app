import { StyleSheet } from 'react-native';

import theme from '../theme';

const commonStyles = StyleSheet.create({
  container: {
    padding: 10
  },
  border: {
    borderWidth: 1,
    borderRadius: 4
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderWidth: 0
  },
  primaryButtonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold
  }
});

export default commonStyles;
