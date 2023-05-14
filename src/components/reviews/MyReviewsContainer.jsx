import { useQuery } from '@apollo/client';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { GET_CURRENT_USER } from '../../graphql/queries';
import { Reviews } from './Reviews';

import commonStyles from '../../styles/commonStyle';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'wheat'
  }
})
export const MyReviewsContainer = props => {
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews: true
    }
  });
  if (loading) {
    return <ActivityIndicator style={commonStyles.loading} animating={true} />;
  }

  return (
    <View style={styles.container} >
      <Reviews reviews={data.me.reviews.edges} {...props} />
    </View>
  );
};
