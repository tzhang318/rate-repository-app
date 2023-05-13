import { StyleSheet, View, Platform } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from '../components/appBar/AppBar';
import RepositoryList from '../components/repo/RepositoryList';
import SignInForm from '../components/SignInForm';
import { useSignin } from '../hooks/useSignIn';
import { useAccessToken } from '../hooks/useAccessToken';
import { Home } from './Home';
import { RepositoryItemContainer } from '../components/repo/RepositoryItemContainer';
import { ReviewForm } from '../components/reviews/ReviewForm';

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
            <Route path='/repo/:id' element={<RepositoryItemContainer />} exact />
            <Route path='/createreview' element={<ReviewForm />} exact />
            <Route path='*' element={<Navigate to='/' replace />} />
          </>
        }
        {!accessToken &&
          <>
            <Route path='/signin' element={<SignInForm handleLogin={handleLogin} />} exact />
            <Route path='*' element={<Navigate to='/home' replace />} />
            <Route path='/home' element={<Home />} replace />
          </>
        }
      </Routes>
    </View>
  );
};

export default Main;