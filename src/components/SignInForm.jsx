import { Formik } from 'formik';
import { View, Pressable, Text, StyleSheet } from 'react-native'; 
import FormikTextInput from './FormikTextInput';
import { validateSignin } from '../validation/validateSignin';

import theme from '../theme';

const styles = StyleSheet.create({
  wide: {
    width: '100%'
  },
  border: {
    borderWidth: 1,
    borderRadius: 4
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderWidth: 0
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold
  },
  view: {
    paddingStart: 5,
    paddingEnd: 5
  },
  item: {
    marginTop: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const SignInForm = props => {
  const initialValues = {
    username: '',
    password: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.handleLogin}
      validationSchema={validateSignin}
    >
      {({ handleSubmit }) => (
        <View style={styles.view}>
          <FormikTextInput
            name='username'
            placeholder='username'
            style={[styles.border, styles.wide, styles.item]}
          />
          <FormikTextInput
            name='password'
            placeholder='password'
            secureTextEntry
            style={[styles.border, styles.wide, styles.item]}
          />
          <Pressable
            onPress={handleSubmit}
            style={[styles.border, styles.wide, styles.button, styles.item]}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
