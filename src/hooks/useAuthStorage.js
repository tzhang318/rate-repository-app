import { createContext, useContext } from 'react';

const AuthStorageContext = createContext();

export const useAuthStorage = () => {
  const context = useContext(AuthStorageContext);

  if (context === undefined) {
    throw new Error('useAuthStorage must be used within auth provided space')
  }
  return context;
};

export default AuthStorageContext;
