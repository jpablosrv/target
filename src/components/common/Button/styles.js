import { StyleSheet } from 'react-native';
import { BLACK, GREY, GREY_DISABLED, WHITE } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: BLACK,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'center',
    width: '80%',
  },
  buttonText: {
    fontSize: 18,
    color: WHITE,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  btnDisable: {
    color: GREY_DISABLED,
  },
  btnContainerDisable: {
    backgroundColor: GREY,
  },
});

export default styles;
