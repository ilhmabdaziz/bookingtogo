import {CheckBox} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';

const CheckBoxComp = ({selectedIndex, onIndex, onPress, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 10,
        // backgroundColor: 'red',
      }}>
      <CheckBox
        checked={selectedIndex === onIndex}
        onPress={onPress}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={{marginVertical: -5, marginLeft: -10}}
        title={title}
        textStyle={
          {
            // color: 'blue',
          }
        }
        size={20}
      />
    </View>
  );
};

export default CheckBoxComp;
