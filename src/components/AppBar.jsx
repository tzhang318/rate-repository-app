import { View, ScrollView, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import Constants from 'expo-constants';
import { AppBarTab } from './AppBarTab';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

import theme from '../theme';
import { useAuthStorage } from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground
  },
  text: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.appBar,
    fontWeight: theme.fontWeights.bold,
    paddingLeft: 10,
    paddingBottom: 12
  },
  loadingText: {
    color: theme.colors.gray,
    fontSize: theme.fontSizes.appBar,
    fontWeight: theme.fontWeights.bold,
    marginTop: '20%',
    alignSelf: 'center'
  }
});

const AppBar = () => {
  const client = useApolloClient();
  const context = useAuthStorage();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useQuery(GET_USER);
  if (loading) {
    return <Text style={styles.loadingText}>Loading ...</Text>;
  }

  const onPress = async (e) => {
    e.preventDefault();
    await context.removeAccessToken();
    client.resetStore();
    navigate('/signin', { replace: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName='Repositories' url=''/>
        {data?.me ?
          <Pressable onPress={onPress}>
            <Text style={styles.text}>Signout</Text>
          </Pressable>
          :
          <AppBarTab tabName='Signin' url='signin'/>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;