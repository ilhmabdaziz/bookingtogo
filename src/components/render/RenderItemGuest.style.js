import {StyleSheet} from 'react-native';
import {fonts} from '../../assets/fonts';

export const ItemGuestStyle = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    fontFamily: fonts.primary.Regular,
    color: '#000',
    fontSize: 13,
  },
});
