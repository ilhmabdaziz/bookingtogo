import {StyleSheet} from 'react-native';

export const FieldGuestStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    height: 40,
    marginBottom: '5%',
  },
  titleOption: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    width: '20%',
    height: '100%',
  },
  textFieldStyle: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  containerIcon: {
    //   backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: '16%',
  },
});
