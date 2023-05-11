import { StyleSheet, View, Platform } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignInForm from './SignInForm';
import { useSignin } from '../hooks/useSignIn';
import { useAccessToken } from '../hooks/useAccessToken';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  backgroundColor: Platform.select({
    ios: 'aqua',
    android: 'lime',
    default: 'limegreen'
  }),
  text: {
    fontFamily: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    })
  }
});

const Main = () => {
  const [signIn] = useSignin();
  const accessToken = useAccessToken();
  const handleLogin = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(' ---- ---- e: ', e);
    }
  };

  return (
    <View style={[styles.container, styles.fontFamily, styles.backgroundColor]}>
      <AppBar />
      <Routes>
        {accessToken &&
          <>
            <Route path='/' element={<RepositoryList />} exact />
            <Route path='*' element={<Navigate to='/' replace />} />
          </>
        }
        {!accessToken &&
          <>
            <Route path='/signin' element={<SignInForm handleLogin={handleLogin} />} exact />
            <Route path='*' element={<Navigate to='/signin' replace />} />
          </>
        }
      </Routes>
    </View>
  );
};

export default Main;