import { useState } from 'react';
import { useAuthStorage } from './useAuthStorage';

export const useAccessToken = () => {
  const context = useAuthStorage();
  const [accessToken, setToken] = useState();

  context.getAccessToken().then(res => {
    setToken(res);
  });

  return accessToken;
}