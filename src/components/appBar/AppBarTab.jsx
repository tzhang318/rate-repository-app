import { Pressable, Text, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.appBar,
    fontWeight: theme.fontWeights.bold,
    paddingLeft: 10,
    paddingBottom: 12
  }
});

export const AppBarTab = props => {
  return (
    <Pressable>
      <Link to={`/${props.url}`}>
        <Text style={styles.text}>{props.tabName}</Text>
      </Link>
    </Pressable>
  );
}