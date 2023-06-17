import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PaymentStyle from './Payment.style';
import {useNavigation, useTheme} from '@react-navigation/native';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import BottomTabOrder from '../../components/bottomTabOrder/BottomTabOrder';

const Payment = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [screen, setScreen] = useState({
    screenHeight: Dimensions.get('screen').height,
    screenWidth: Dimensions.get('screen').width,
  });
  // console.log(theme);
  return (
    <SafeAreaView
      style={{
        ...PaymentStyle.container,
        backgroundColor: theme,
      }}>
      <GeneralStatusBarColor
        backgroundColor="#335998"
        barStyle="light-content"
      />
      <View style={{flex: 1, backgroundColor: '#C0C0C0'}}>{/* content*/}</View>
      <BottomTabOrder
        leftText={'Harga mulai Dari'}
        rightText={'Rp. 200.000'}
        buttonTitle={'Pesan Kamar'}
        onPress={() => {
          navigation.navigate('PaymentDetail');
        }}
      />
    </SafeAreaView>
  );
};

export default Payment;
