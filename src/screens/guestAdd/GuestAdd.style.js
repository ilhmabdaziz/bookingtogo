import {StyleSheet} from 'react-native';
import {fonts} from '../../assets/fonts';

const GuestAddStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  guestAdd: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: '10%',
  },
  textGuestAdd: {
    textDecorationLine: 'underline',
    color: 'orange',
    fontSize: 13,
    fontFamily: fonts.primary.Regular,
  },
  containerButton: {
    // position: 'absolute',
    backgroundColor: '#FFF',
    // height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // bottom: 0,
    paddingBottom: '5%',
  },
  touchArea: {
    backgroundColor: 'coral',
    paddingHorizontal: '30%',
    paddingVertical: '3%',
    borderRadius: 50,
  },
  textButton: {
    color: '#FFF',
    fontFamily: fonts.primary.Regular,
    fontSize: 14,
  },
});

export default GuestAddStyle;
