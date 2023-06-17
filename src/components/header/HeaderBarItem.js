import React from 'react';
import {View, Text} from 'react-native';
import HeaderBarItemStyle from './HeaderBarItem.style';

const HeaderBarItem = props => {
  // console.log(props);
  return (
    <View style={props.style}>
      <Text style={HeaderBarItemStyle.textTitle}>{props.title}</Text>
    </View>
  );
};
export default HeaderBarItem;
