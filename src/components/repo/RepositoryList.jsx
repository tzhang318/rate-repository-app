import { SafeAreaView, FlatList, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { RepositoryItem } from './RepositoryItem';
import { Separator } from '../ItemSeparator';
// import useRepositories from '../hooks/useRepositories';
import { GET_REPOSITORIES } from '../../graphql/queries';

import theme from '../../theme';
import { useAccessToken } from '../../hooks/useAccessToken';

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.mainPage
  }
});

const RepositoryList = () => {
  // const { repositories } = useRepositories();
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    // Other options
  });
  const accessToken = useAccessToken();
  const navigate = useNavigate();

  if (!accessToken) {
    return <Text>no token</Text>
  }

  if (loading) {
    return <Text>loading...</Text>;
  }

  const repositoryNodes = data.repositories
    ? data.repositories.edges.map(edge => edge.node)
    : [];

  const onItemPress = id => {
    console.log(' ---- id: ', id);
    navigate(`/repo/${id}`, { replace: true })
  };

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable onPress={()=>onItemPress(item.id)}>
            <RepositoryItem repo={item} />
          </Pressable>
        )}
        keyExtractor={repo => repo.fullName}
      />
    </SafeAreaView>
  );
};

export default RepositoryList;
