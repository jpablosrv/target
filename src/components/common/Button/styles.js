import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 0.6,
    justifyContent: 'space-evenly',
  },
  iconContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
  imgIconContainer: {
    width: 123,
    height: 123,
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'center',
    width: '80%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  btnDisable: {
    color: '#505050',
  },
  btnContainerDisable: {
    backgroundColor: '#808080',
  },
});

export default styles;
