import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
  },
  contain: {
    flex: 1,
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E5897',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  titleBtn: {
    color: 'white',
    fontSize: 10,
  },
  name: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Roboto-Bold',
  },
  quote: {
    fontFamily: 'Roboto-Light',
    fontSize: 13,
    color: '#000000',
    paddingVertical: 5,
  },
});
