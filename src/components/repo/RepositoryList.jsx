import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  Pressable,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  View
} from 'react-native';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';
import { RepositoryItem } from './RepositoryItem';
import { Separator } from '../common/ItemSeparator';
import { useRepositories } from '../../hooks/useRepositories';
import { SortPicker } from '../common/SortPicker';

import theme from '../../theme';
import { useAccessToken } from '../../hooks/useAccessToken';

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.mainPage
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%'
  },
  header: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  searchbar: {
    height: 44,
    width: '70%',
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 5
  }
});

const values = [
  { orderBy: 'CREATED_AT', orderDirection: 'DESC', value: 'CREATED_AT', prompt: 'Latest repositories' },
  { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC', value: 'HIGH', prompt: 'Highest rated repositories' },
  { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC', value: 'LOW', prompt: 'Lowest rated repositories' }
];

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setDirection] = useState('DESC');
  const [text, setText] = useState('');
  const [selectedSort, setSelectedSort] = useState(values[0].value);
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error, refetch } =
    useRepositories({ orderBy, orderDirection, searchKeyword});

  const accessToken = useAccessToken();
  const navigate = useNavigate();
  const [searchKeyword] = useDebounce(text, 500);

  useEffect(() => {
    refetch({ orderBy, orderDirection, searchKeyword });
  }, [orderBy, orderDirection, searchKeyword]);

  if (!accessToken) {
    return <Text>no token</Text>
  }

  const handleSort = target => {
    setSelectedSort(target.value);
    setOrderBy(target.orderBy);
    setDirection(target.orderDirection);
  };

  if (loading) {
    return <ActivityIndicator style={styles.loading} animating={true} color={theme.colors.primary}/>;
  }

  const repositoryNodes = data.repositories
    ? data.repositories.edges.map(edge => edge.node)
    : [];

  const onItemPress = id => {
    navigate(`/repo/${id}`, { replace: true })
  };

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.header}>
            <TextInput
              style={styles.searchbar}
              placeholder="Search"
              onChangeText={setText}
              value={searchKeyword}
            />
            <SortPicker
              handleSort={handleSort}
              values={values}
              selected={selectedSort}
            />
          </View>
        }
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
