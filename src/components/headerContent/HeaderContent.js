import React from 'react';
import {Text, View} from 'react-native';
import {HeaderContentStyle} from './HeaderContent.style';

const HeaderContent = ({title, marginLeft, marginBottom}) => {
  return (
    <View style={{marginLeft: marginLeft, marginBottom: marginBottom}}>
      <Text style={HeaderContentStyle.text}>{title}</Text>
    </View>
  );
};

export default HeaderContent;
