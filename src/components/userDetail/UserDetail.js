import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HeaderContent from '../headerContent/HeaderContent';
import {fonts} from '../../assets/fonts';

const UserDetail = ({nameUser, emailUser, phoneUser}) => {
  return (
    <View>
      <HeaderContent
        title={'Detail Pesanan'}
        marginLeft={0}
        marginBottom={10}
      />
      <View style={{paddingHorizontal: 10}}>
        <Text
          style={{
            fontFamily: fonts.primary.bold,
            color: '#000',
            fontSize: 12,
          }}>
          {nameUser}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: fonts.primary.Regular,
              fontSize: 11,
              color: 'grey',
            }}>
            {emailUser}
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{textDecorationLine: 'underline'}}>ubah</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: fonts.primary.Regular,
            fontSize: 11,
            color: 'grey',
          }}>
          {phoneUser}
        </Text>
      </View>
    </View>
  );
};

export default UserDetail;
