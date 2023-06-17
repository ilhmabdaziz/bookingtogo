import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {FieldGuestStyle} from './FieldGuest.style';

const FieldGuest = ({data, index, press, onChangeText}) => {
  return (
    <View style={FieldGuestStyle.container}>
      <TouchableOpacity style={FieldGuestStyle.titleOption}>
        <View>
          <Text>{data.title}</Text>
        </View>
        <View>
          <IconFontAwesome name="angle-down" size={20} color={'#000'} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: '60%',
          marginLeft: '4%',
        }}>
        <TextInput
          style={FieldGuestStyle.textFieldStyle}
          onChangeText={value => onChangeText(value, index)}
          value={data.name}
        />
      </View>
      <View style={FieldGuestStyle.containerIcon}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            paddingVertical: 2,
          }}
          onPress={() => press(data.id)}>
          <IconFontAwesome name="trash-o" size={32} color={'coral'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FieldGuest;
