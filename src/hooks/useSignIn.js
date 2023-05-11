import { useMutation, useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { useAuthStorage } from '../hooks/useAuthStorage';
import { AUTHENTICATE_USER } from '../graphql/queries';

export const useSignin = () => {
  const context = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE_USER);
  const client = useApolloClient();
  const navigate = useNavigate();

  const signIn = async ({ username, password }) => {
    const credentials = {username, password};
    try {
      const { data } = await mutate({ variables: { credentials }});
      if (data.authenticate) {
        await context.setAccessToken(data.authenticate.accessToken);
        client.resetStore();
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.log(' ---------- signin error: ', error);
    }
  };

  return [signIn, result];
};
