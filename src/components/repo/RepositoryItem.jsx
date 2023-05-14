import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import * as Linking from 'expo-linking';
import { Avatar } from '../common/Avatar';
import { Separator, VerticalSeparator } from '../common/ItemSeparator';
import { RepoStats } from './RepoStats';
import { Reviews } from '../reviews/Reviews';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  main: {
    backgroundColor: 'wheat',
    paddingTop: 10,
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingBottom: 10
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
    marginTop: 5,
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
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  buttonText: {
    fontSize: theme.fontSizes.appBar,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.appBarText
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
    forksCount,
    url,
    reviews
  } = repo;
  
  const getCount = (count) => {
    if (count / 1000 > 1) {
      const temp = Math.round(count/100);
      return `${temp/10}k`;
    }
    return count;
  }

  const handlePress = () => {
    Linking.openURL(`${url}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Avatar url={repo.ownerAvatarUrl} />
          <VerticalSeparator />
          <View style={styles.headerText}>
            <Text style={styles.name}>{fullName}</Text>
            <Text style={styles.description}>{description}</Text>
            {language && <View style={styles.languageContainer}>
              <Text style={styles.language}>{language}</Text>
            </View>}
          </View>
        </View>
        <View style={styles.stats}>
          <RepoStats label={'Stars'} counts={getCount(stargazersCount)} />
          <RepoStats label={'Forks'} counts={getCount(forksCount)} />
          <RepoStats label={'Reviews'} counts={getCount(reviewCount)} />
          <RepoStats label={'Rating'} counts={getCount(ratingAverage)} />
        </View>
        {url &&
          <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Open in GitHub</Text>
          </Pressable>
        }
      </View>
      <Separator />
      {reviews &&
        <View style={styles.main}>
          <Reviews reviews={reviews?.edges} />
        </View>
      }
    </SafeAreaView>
  );
};
