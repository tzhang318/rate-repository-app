import { FlatList } from 'react-native';
import { Separator } from '../common/ItemSeparator';
import { ReviewItem } from './ReviewItem';

export const Reviews = ({ reviews, ownersView }) => {
  const getReviewSubheader = review => 
    ownersView ? review.node.repository.fullName : review.node.user.username;

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={Separator}
      renderItem={
        ({item}) => <ReviewItem subheader={getReviewSubheader(item)} review={item} />
      }
      keyExtractor={review => review.node.id}
    />
  );
};
