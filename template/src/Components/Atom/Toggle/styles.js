import {StyleSheet} from 'react-native';
export const styles = lang =>
  StyleSheet.create({
    toglleBtn: {
      width: 60,
      height: 30,
      backgroundColor: lang == 'fr' ? 'red' : 'white',
      borderRadius: 15,
      justifyContent: 'center',
      paddingHorizontal: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    roundItem: {
      width: 28,
      height: 28,
      borderRadius: 15,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignSelf: lang == 'fr' ? 'flex-end' : 'flex-start',
    },
  });
