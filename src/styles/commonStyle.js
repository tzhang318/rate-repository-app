import { StyleSheet } from 'react-native';

import theme from '../theme';

const commonStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.mainPage
  },
  border: {
    borderWidth: 1,
    borderRadius: 4
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  primaryButtonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.button
  },
  deleteButton: {
    backgroundColor: theme.colors.warningRed
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    color: theme.colors.gray
  }
});

export default commonStyles;
