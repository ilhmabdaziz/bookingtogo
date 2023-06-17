import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import PaymentDetailStyle from './PaymentDetail.style';
import {useNavigation, useTheme} from '@react-navigation/native';
import {CheckBox} from '@rneui/themed';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {fonts} from '../../assets/fonts';
// import {DataTamu} from '../../model/dataTamu';
import RenderItemGuest from '../../components/render/RenderItemGuest';
import HeaderContent from '../../components/headerContent/HeaderContent';
import CardHeader from '../../components/cardDetail/CardDetail';
import LabelInvestigation from '../../components/labelCheck/LabelInvestigation';
import UserDetail from '../../components/userDetail/UserDetail';
import CheckBoxComp from '../../components/checkBox/CheckBoxComp';

const PaymentDetail = props => {
  const params = props.route.params;
  console.log(params);
  const theme = useTheme();
  const navigation = useNavigation();
  const [selectedIndex, setIndex] = React.useState(0);

  const DataTamu =
    params === undefined
      ? [
          {
            id: 1,
            title: 'Tn',
            name: 'Jhon Doe',
          },
          {
            id: 2,
            title: 'Ny',
            name: 'Jho Jhon',
          },
        ]
      : params.dataTamuUpdate;

  const [isLoading, setIsLoading] = useState(true);
  const [dataHotel, setDataHotel] = useState({
    hotel_name: '',
    type_room: '',
    room: '',
    guest: '',
    check_in: '',
    check_out: '',
    night: 0,
    image_uri: '',
  });

  useEffect(() => {
    isLoading ? getHotelData() : null;
  }, [isLoading]);

  const getHotelData = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'X-Parse-Application-Id',
      'Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3',
    );
    myHeaders.append(
      'X-Parse-REST-API-Key',
      '4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy',
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    await fetch(
      'https://parseapi.back4app.com/classes/hotel/bVonXoSUHK',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        let dataResult = JSON.parse(result);
        setDataHotel({
          ...dataHotel,
          hotel_name:
            dataResult.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params
              .hotel_name,
          type_room:
            dataResult.chosen_hotel.data.get_chosen_hotel.chosen_hotel_room
              .room_name,
          room: dataResult.chosen_hotel.data.get_chosen_hotel
            .chosen_hotel_params.total_room,
          guest:
            dataResult.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params
              .guest_adult,
          check_in:
            dataResult.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params
              .check_in,
          check_out:
            dataResult.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params
              .check_out,
          image_uri:
            dataResult.chosen_hotel.data.get_chosen_hotel.chosen_hotel_detail
              .images[0].url,
        });
        setIsLoading(false);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <SafeAreaView
      style={{
        ...PaymentDetailStyle.container,
        backgroundColor: theme,
        flexDirection: 'column',
      }}>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
          }}>
          <ActivityIndicator size={'large'} color="#999999" />
        </View>
      ) : (
        <ScrollView
          style={{
            backgroundColor: '#FFF',
          }}>
          <>
            <View style={PaymentDetailStyle.containerHeader}>
              <View style={PaymentDetailStyle.numberHeader}>
                <Text style={{color: '#FFF', fontSize: 12}}>1</Text>
              </View>
              <HeaderContent title={'Detail Pesanan'} marginLeft={10} />
            </View>

            <View
              style={{
                borderBottomWidth: 0.2,
                padding: 20,
              }}>
              <CardHeader
                name={dataHotel.hotel_name}
                classDetail={dataHotel.type_room}
                benefit={`${dataHotel.room} room . ${dataHotel.guest} guest . ${dataHotel.night} night`}
                image_uri={dataHotel.image_uri}
              />

              <LabelInvestigation
                label={'Check-in'}
                date={dataHotel.check_in}
              />
              <LabelInvestigation
                label={'Check-out'}
                date={dataHotel.check_out}
              />

              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                <IconFontisto
                  name="spinner-refresh"
                  size={20}
                  color={'coral'}
                />
                <View style={{marginLeft: 5}}>
                  <Text style={{color: 'coral', fontSize: 13}}>
                    Dapat di Refund jika dibatalkan
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                padding: 20,
                borderBottomWidth: 0.2,
              }}>
              <UserDetail
                nameUser={'Tn. Andreas Andreas'}
                emailUser={'andreasandreas@gmail.com'}
                phoneUser={'+62 81248073411'}
              />
            </View>

            <View
              style={{
                marginVertical: 15,
                padding: 20,
              }}>
              <CheckBoxComp
                selectedIndex={selectedIndex}
                onIndex={0}
                onPress={() => setIndex(0)}
                title={'Saya memesan untuk sendiri'}
              />
              <CheckBoxComp
                selectedIndex={selectedIndex}
                onIndex={1}
                onPress={() => setIndex(1)}
                title={'Saya memesan untuk orang lain'}
              />

              <HeaderContent
                title={'Data Tamu'}
                marginLeft={0}
                marginBottom={10}
              />

              {DataTamu.map((data, index) => {
                return (
                  <View key={data.id}>
                    <RenderItemGuest
                      onIndex={data.id}
                      title={data.title}
                      name={data.name}
                    />
                  </View>
                );
              })}

              <TouchableOpacity
                style={{alignItems: 'flex-end'}}
                onPress={() =>
                  navigation.navigate('GuestAdd', {dataTamu: DataTamu})
                }>
                <Text style={{textDecorationLine: 'underline'}}>
                  Ubah Data Tamu
                </Text>
              </TouchableOpacity>
            </View>
          </>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default PaymentDetail;
