import { StyleSheet, Text, Platform } from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';

import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    paddingStart: 5,
    fontWeight: theme.fontWeights.bold
  },
  errorText: {
    marginTop: 5,
    color: Platform.select({
      ios: 'green',
      android: theme.colors.warningRed
    })
  },
  borderStyle: {
    borderColor: theme.colors.gray
  },
  borderError: {
    borderColor: theme.colors.warningRed
  }
});

const FormikTextInput = props => {
  console.log(' ******* props.keyboardType: ', props.keyboardType)
  const [field, meta, helpers] = useField(props.name);
  const showError = meta.touched && meta.error;
  const borderStyle = [...props.style, styles.input, showError ? styles.borderError : styles.borderStyle];
  return (
    <>
      <TextInput
        {...props}
        value={field.value}
        onChangeText={value=>helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        error={showError}
        style={borderStyle}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
