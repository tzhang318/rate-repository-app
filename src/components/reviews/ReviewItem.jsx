import { View, Text, Alert, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import { useMutation } from '@apollo/client';
import { CircleContent } from '../common/CircleContent';
import { formatDate_dateFns } from '../../utils/date';
import { OpenUrlButton } from '../common/OpenUrlButton';
import { DeleteButton } from '../common/DeleteButton';
import { DELETE_REVIEW, GET_CURRENT_USER } from '../../graphql/queries';

import theme from '../../theme';

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    paddingTop: 10
  },
  vertical: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    width: '100%'
  },
  circle: {
    marginLeft: 10
  },
  subheader: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  },
  user: {
    color: theme.colors.gray,
    paddingTop: 10,
    paddingBottom: 10
  },
  date: {
    color: theme.colors.lightGray,
    paddingBottom: 10
  },
  text: {
    paddingRight: 10,
  },
  buttonContainer: {
    // justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  button: {
    flex: 1
  }
});

export const ReviewItem = ({ review, subheader }) => {
  const { node } = review;
  // eslint-disable-next-line no-unused-vars
  const [deleteReview, {data, loading, error}] =
    useMutation(DELETE_REVIEW, {
      refetchQueries: [GET_CURRENT_USER]
    });

  const onPress = () => {
    Linking.openURL(`${node.repository.url}`);
  };

  const onDelete = () => {
    console.log(' *** deleting this review: ', node.id)
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: async () => {
        console.log('Now deleting review: ', node.id);
        deleteReview({
          variables: {
            deleteReviewId: node.id
          }
        });
      }},
    ]);
  };

  return (
    <View style={styles.vertical}>
      <View style={styles.horizontal}>
        <CircleContent text={node.rating} myStyle={styles.circle} />
        <View style={styles.vertical}>
          <Text style={[styles.subheader, styles.user]}>{subheader}</Text>
          <Text style={[styles.subheader, styles.date]}>{formatDate_dateFns(node.createdAt)}</Text>
          <Text style={styles.text} >{node.text}</Text>
        </View>
      </View>
      {node.repository?.url && (
        <View style={[styles.horizontal, styles.buttonContainer]}>
          <View style={styles.button}>
            <OpenUrlButton onPress={onPress} label='View repository' />
          </View>
          <View style={styles.button}>
            <DeleteButton onPress={onDelete} label='Delet review' />
          </View>
        </View>
      )}
    </View>
  );
};
