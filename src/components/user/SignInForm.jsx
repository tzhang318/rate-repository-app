import { Formik } from 'formik';
import { View, Pressable, Text, StyleSheet } from 'react-native'; 
import FormikTextInput from '../FormikTextInput';
import { validateSignin } from '../../validation/validateSignin';
import commonStyles from '../../styles/commonStyle';

const styles = StyleSheet.create({
  wide: {
    width: '100%'
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
            style={[commonStyles.border, styles.wide, styles.item]}
          />
          <FormikTextInput
            name='password'
            placeholder='password'
            secureTextEntry
            style={[commonStyles.border, styles.wide, styles.item]}
          />
          <Pressable
            onPress={handleSubmit}
            style={[commonStyles.border, styles.wide, commonStyles.primaryButton, styles.item]}
          >
            <Text style={commonStyles.primaryButtonText}>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
