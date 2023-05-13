import { View, Text, StyleSheet } from 'react-native';
import { CircleContent } from '../CircleContent';
import { formatDate_dateFns } from '../../utils/date';

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
    width: '90%'
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
  }
});

export const ReviewItem = ({ review }) => {
  const { node } = review;
  return (
    <View style={styles.horizontal}>
      <CircleContent text={node.rating} myStyle={styles.circle} />
      <View style={styles.vertical}>
        <Text style={[styles.subheader, styles.user]}>{node.user.username}</Text>
        <Text style={[styles.subheader, styles.date]}>{formatDate_dateFns(node.createdAt)}</Text>
        <Text style={styles.text} >{node.text}</Text>
      </View>
    </View>
  );
};
