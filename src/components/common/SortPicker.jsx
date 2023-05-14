import {Picker} from '@react-native-picker/picker';
import { View, StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: theme.colors.white,
  },
  pickerStyle:{
    width:'80%',
    height: 44,
  },
  item: {
    height: 44,
    color: 'gray'
  }
});

export const SortPicker = ({ handleSort, values, selected }) => {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.pickerStyle}
        itemStyle={styles.item}
        selectedValue={selected}
        onValueChange={(item, index) => handleSort(values[index])}
        mode='dialog'
      >
        {values.map(item => 
          <Picker.Item
            label={item.prompt}
            value={item.value}
            key={item.value}
          />
        )}
      </Picker>
    </View>
  )
};
