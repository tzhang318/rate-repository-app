import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import FormikTextInput from '../FormikTextInput';
import { validateReview } from '../../validation/validateReview';
import { CREATE_REVIEW } from '../../graphql/queries';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    padding: 10
  },
  wide: {
    // width: '100%'
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
  item: {
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const ReviewForm = props => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();
  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: 0,
    text: ''
  };

  const onSubmit = async (values) => {
    try {
      const { data } = await mutate({
        variables: {
          review: {
            ownerName: values.ownerName,
            repositoryName: values.repositoryName,
            rating: Number(values.rating),
            text: values.text
          }
        }
      });
      navigate(`/repo/${data.createReview.repositoryId}`, { replace: true });
    } catch (error) {
      console.log(' --- error creating review, ', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validateReview}
    >
      {
        ({ handleSubmit }) => (
          <View style={styles.container}>
            <FormikTextInput
              name='ownerName'
              placeholder='ownerName'
              style={[styles.border, styles.wide, styles.item]}
            />
            <FormikTextInput
              name='repositoryName'
              placeholder='repositoryName'
              style={[styles.border, styles.wide, styles.item]}
            />
            <FormikTextInput
              name='rating'
              placeholder='rating'
              keyboardType='numeric'
              style={[styles.border, styles.wide, styles.item]}
            />
            <FormikTextInput
              name='text'
              placeholder='text'
              style={[styles.border, styles.wide, styles.item]}
              multiline
            />
            <Pressable
              onPress={handleSubmit}
              style={[styles.border, styles.wide, styles.button, styles.item]}
            >
              <Text style={styles.buttonText}>Post</Text>
            </Pressable>
          </View>
        )
      }
    </Formik>
  )
};
