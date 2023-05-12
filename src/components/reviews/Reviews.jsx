import { FlatList } from 'react-native';
import { Separator } from '../ItemSeparator';
import { ReviewItem } from './ReviewItem';

export const Reviews = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={Separator}
      renderItem={
        ({item}) => <ReviewItem review={item} />
      }
      keyExtractor={review => review.id}
    />
  );
};
