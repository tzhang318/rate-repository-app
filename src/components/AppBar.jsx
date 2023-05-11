import { View, ScrollView, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useState, useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import Constants from 'expo-constants';
import { AppBarTab } from './AppBarTab';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

import theme from '../theme';
import { useAuthStorage } from '../hooks/useAuthStorage';
import { useAccessToken } from '../hooks/useAccessToken';

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
  }
});

const AppBar = () => {
  const client = useApolloClient();
  const context = useAuthStorage();
  const accessToken = useAccessToken();
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  // const { data, loading, error } = useQuery(GET_USER);

  useEffect(() => {
    if (accessToken) {
      setAuthorized(true);
    }
  }, [accessToken]);

  const onPress = async (e) => {
    e.preventDefault();
    await context.removeAccessToken();
    client.resetStore();
    setAuthorized(!authorized);
    navigate('/signin', { replace: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName='Repositories' url=''/>
        {authorized ?
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