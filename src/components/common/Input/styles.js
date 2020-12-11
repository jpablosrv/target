import { StyleSheet } from 'react-native';
import { DIM_GREY, LIGHT_GREY } from 'constants/colors';

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: LIGHT_GREY,
    borderWidth: 1,
  },
  inputActive: {
    borderColor: DIM_GREY,
  },
  button: {
    alignSelf: 'center',
    borderColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default styles;
