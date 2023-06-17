import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BottomTabOrderStyle from './BottomTabOrder.style';

const BottomTabOrder = ({leftText, rightText, buttonTitle, onPress}) => {
  return (
    <View style={BottomTabOrderStyle.tabBarContainer}>
      <View style={BottomTabOrderStyle.subTabBarContainer}>
        <View style={BottomTabOrderStyle.summaryStyle}>
          <Text style={BottomTabOrderStyle.textStyle}>{leftText}</Text>
          <Text style={BottomTabOrderStyle.textStyle}>{rightText}</Text>
        </View>
        <View style={BottomTabOrderStyle.buttonContainer}>
          <TouchableOpacity
            style={BottomTabOrderStyle.buttonStyle}
            onPress={onPress}>
            <Text style={BottomTabOrderStyle.buttonFont}>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default BottomTabOrder;
