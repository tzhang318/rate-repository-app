import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { Formik } from 'formik';
import FormikTextInput from '../common/FormikTextInput';
import { CREATE_USER } from '../../graphql/queries';
import { validateUser } from '../../validation/validateUser';

import commonStyles from '../../styles/commonStyle';

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const SignUpForm = () => {
  const initialValues = {
    username: '',
    password: '',
    passwordConfirm: ''
  };
  const navigate = useNavigate();
  const [mutate] = useMutation(CREATE_USER);

  const signUp = async (values) => {
    try {
      await mutate({
        variables: {
          user: {
            username: values.username,
            password: values.password
          }
        }
      });
      navigate('/', { replace: true });
    } catch (error) {
      console.log('Error when create user: ', error);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={signUp}
      validationSchema={validateUser}
    >
      {({ handleSubmit }) => (
        <View style={commonStyles.container}>
          <FormikTextInput
            name='username'
            placeholder='username'
            style={[commonStyles.border, styles.item]}
          />
          <FormikTextInput
            name='password'
            placeholder='password'
            secureTextEntry={true}
            style={[commonStyles.border, styles.item]}
          />
          <FormikTextInput
            name='confirmPassword'
            placeholder='confirm password'
            secureTextEntry={true}
            style={[commonStyles.border, styles.item]}
          />
          <Pressable
            onPress={handleSubmit}
            style={[commonStyles.border, commonStyles.primaryButton, styles.item]}
          >
            <Text style={commonStyles.primaryButtonText}>
              Create
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  )
};
