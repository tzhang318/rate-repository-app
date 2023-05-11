import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from './Avatar';
import { Separator, VerticalSeparator } from './ItemSeparator';
import { RepoStats } from './RepoStats';

import theme from '../theme';

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'wheat',
    paddingTop: 10,
    paddingLeft: 10
  },
  header: {
    flexDirection: 'row',
  },
  headerText: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 310  //not ideal, need a way to wrap text
  },
  name: {
    color: 'black',
    fontWeight: theme.fontWeights.bold,
    height: 25,
  },
  description: {
    color: theme.colors.gray,
    overflowWrap: 'normal'
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5
  },
  language: {
    color: 'white',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export const RepositoryItem = ({ repo }) => {
  const {
    fullName,
    description,
    language,
    stargazersCount,
    ratingAverage,
    reviewCount,
    forksCount
  } = repo;

  const getCount = (count) => {
    if (count / 1000 > 1) {
      const temp = Math.round(count/100);
      return `${temp/10}k`;
    }
    return count;
  }

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Avatar url={repo.ownerAvatarUrl} />
        <VerticalSeparator />
        <View style={styles.headerText}>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.language}>{language}</Text>
          </View>
        </View>
      </View>
      <Separator />
      <View style={styles.stats}>
        <RepoStats label={'Stars'} counts={getCount(stargazersCount)} />
        <RepoStats label={'Forks'} counts={getCount(forksCount)} />
        <RepoStats label={'Reviews'} counts={getCount(reviewCount)} />
        <RepoStats label={'Rating'} counts={getCount(ratingAverage)} />
      </View>
      <Separator />
    </View>
  );
};
