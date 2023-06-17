import React from 'react';
import {Text, View} from 'react-native';
import IconMaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {fonts} from '../../assets/fonts';
import {ItemGuestStyle} from './RenderItemGuest.style';

const RenderItemGuest = ({onIndex, title, name}) => {
  return (
    <View style={ItemGuestStyle.containerItem}>
      <IconMaterialIcon name="emoji-people" size={20} color={'#335998'} />
      <Text style={ItemGuestStyle.text}>
        {title} {name}
      </Text>
    </View>
  );
};

export default RenderItemGuest;
