import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import GuestAddStyle from './GuestAdd.style';
import {fonts} from '../../assets/fonts';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderContent from '../../components/headerContent/HeaderContent';
import FieldGuest from '../../components/fieldGuest/FieldGuest';

const GuestAdd = props => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [dataTamu, setDataTamu] = useState(props.route.params.dataTamu);
  // console.log(dataTamu);

  const pressTrashHandler = id => {
    if (dataTamu.length > 1) {
      setDataTamu(prevData => {
        return prevData.filter(data => data.id !== id);
      });
    }
  };

  const pressAddGuestHandler = () => {
    setDataTamu(prevData => {
      return [...prevData, {id: Math.random(), title: 'Tn', name: ''}];
    });
  };

  const onCHangeText = (value, index) => {
    let newArr = [...dataTamu];
    newArr[index] = {
      ...newArr[index],
      name: value,
    };
    setDataTamu(newArr);
  };

  return (
    <SafeAreaView
      style={{
        ...GuestAddStyle.container,
        backgroundColor: theme,
        flexDirection: 'column',
        // backgroundColor: '#FFF',
        // padding: 20,
      }}>
      <ScrollView
        style={{
          backgroundColor: '#FFF',
          padding: 20,
        }}>
        <HeaderContent title={'Data Tamu'} marginLeft={0} marginBottom={10} />

        {/* <FlatList
          data={dataTamu}
          keyExtractor={item => {
            return item.id.toString();
          }}
          // horizontal
          // pagingEnabled
          // showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <FieldGuest datas={item} />;
          }}
        /> */}

        {dataTamu.map((data, index) => {
          return (
            <View key={data.id}>
              <FieldGuest
                data={data}
                index={index}
                press={pressTrashHandler}
                onChangeText={onCHangeText}
              />
            </View>
          );
        })}

        <View style={GuestAddStyle.guestAdd}>
          <TouchableOpacity
            style={{
              padding: 5,
            }}
            onPress={() => pressAddGuestHandler()}>
            <Text style={GuestAddStyle.textGuestAdd}>+ Tambah Data Tamu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={GuestAddStyle.containerButton}>
        <TouchableOpacity
          style={GuestAddStyle.touchArea}
          onPress={() =>
            navigation.navigate('PaymentDetail', {dataTamuUpdate: dataTamu})
          }>
          <Text style={GuestAddStyle.textButton}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GuestAdd;
