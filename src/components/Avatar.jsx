import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5
  }
});

export const Avatar = props => {
  return (
    <Image style={styles.avatar} source={{ uri: props.url }} />
  )
};
