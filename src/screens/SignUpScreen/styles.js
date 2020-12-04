import { StyleSheet } from 'react-native';
import { ALICE_BLUE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: ALICE_BLUE,
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 50,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  iconContainer: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imgIconContainer: {
    width: 123,
    height: 123,
  },
});

export default styles;
