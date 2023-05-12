import { Button, Text, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';

import theme from '../theme';
import { replace } from 'formik';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.appBar,
    color: theme.colors.gray,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 5
  }
});

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet porta est. Sed eu accumsan dolor, non sodales ligula. Sed et enim cursus dui luctus vestibulum. Curabitur nec sollicitudin dolor. Aliquam metus quam, euismod nec hendrerit vel, scelerisque ut mauris. Sed quis fermentum felis, vel mollis ex. Praesent elit ipsum, scelerisque id convallis at, fermentum ac tortor.
      </Text>
      <Button
        title='Go to sign in'
        onPress={()=>navigate('/signin', replace)}
      />
    </>
  );
};
