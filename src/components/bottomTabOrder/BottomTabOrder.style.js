import {StyleSheet} from 'react-native';
import {fonts} from '../../assets/fonts';

const BottomTabOrderStyle = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: '#FFF',
    width: '100%',
    flex: 0.15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  subTabBarContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  summaryStyle: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#335998',
    padding: 10,
    width: '70%',
    alignItems: 'center',
    borderRadius: 40,
    elevation: 5,
  },
  buttonFont: {
    color: '#FFF',
  },
  textStyle: {
    fontFamily: fonts.primary.medium,
    fontSize: 14,
  },
});

export default BottomTabOrderStyle;
