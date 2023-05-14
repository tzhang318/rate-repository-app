import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import FormikTextInput from '../common/FormikTextInput';
import { validateReview } from '../../validation/validateReview';
import { CREATE_REVIEW } from '../../graphql/queries';

import commonStyles from '../../styles/commonStyle';

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'wheat',
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10
  },
  item: {
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const ReviewForm = () => {
  const [mutate] = useMutation(CREATE_REVIEW);
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
          <View style={styles.form}>
            <FormikTextInput
              name='ownerName'
              placeholder='ownerName'
              style={[commonStyles.border, styles.item]}
            />
            <FormikTextInput
              name='repositoryName'
              placeholder='repositoryName'
              style={[commonStyles.border, styles.item]}
            />
            <FormikTextInput
              name='rating'
              placeholder='rating'
              keyboardType='numeric'
              style={[commonStyles.border, styles.item]}
            />
            <FormikTextInput
              name='text'
              placeholder='text'
              style={[commonStyles.border, styles.item]}
              multiline
            />
            <Pressable
              onPress={handleSubmit}
              style={[commonStyles.primaryButton, styles.item]}
            >
              <Text style={commonStyles.primaryButtonText}>Post</Text>
            </Pressable>
          </View>
        )
      }
    </Formik>
  )
};
