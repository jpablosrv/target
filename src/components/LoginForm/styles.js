import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 0.6,
    justifyContent: 'space-evenly',
  },
  button: {
    alignSelf: 'center',
    borderColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 2,
  },
  iconContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
  imgIconContainer: {
    width: 123,
    height: 123,
  },
});

export default styles;
