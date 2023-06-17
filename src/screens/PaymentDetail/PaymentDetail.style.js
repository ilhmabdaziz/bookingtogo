import {StyleSheet} from 'react-native';

const PaymentDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingVertical: '5%',
    borderBottomWidth: 0.2,
  },
  numberHeader: {
    width: 20,
    height: 20,
    backgroundColor: '#335998',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PaymentDetailStyle;
