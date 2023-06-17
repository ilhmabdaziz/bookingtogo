import React from 'react';
import {Image, Text, View} from 'react-native';
import HeaderContent from '../headerContent/HeaderContent';
import {fonts} from '../../assets/fonts';

const CardHeader = ({name, classDetail, benefit, image_uri}) => {
  return (
    <View>
      <HeaderContent
        title={'Detail Pesanan'}
        marginLeft={0}
        marginBottom={10}
      />
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 0.2,
          borderRadius: 5,
          padding: 15,
        }}>
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: 'stretch',
            borderRadius: 5,
          }}
          source={{uri: image_uri}}
        />
        <View style={{paddingHorizontal: 15}}>
          <Text
            style={{
              color: '#335998',
              fontFamily: fonts.primary.bold,
              fontSize: 13,
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontFamily: fonts.primary.Regular,
              fontSize: 11,
              color: 'grey',
            }}>
            {classDetail}
          </Text>
          <Text
            style={{
              fontFamily: fonts.primary.Regular,
              fontSize: 11,
              color: 'grey',
            }}>
            {benefit}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardHeader;
