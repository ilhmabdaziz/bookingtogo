import React from 'react';
import {Text, View} from 'react-native';
import {fonts} from '../../assets/fonts';

const LabelInvestigation = ({label, date}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <Text
        style={{
          fontFamily: fonts.primary.bold,
          fontSize: 14,
          color: '#000',
        }}>
        {label}
      </Text>
      <Text
        style={{
          fontFamily: fonts.primary.Regular,
          fontSize: 11,
          color: 'grey',
        }}>
        {date}
      </Text>
    </View>
  );
};

export default LabelInvestigation;
