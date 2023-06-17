import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Payment from '../screens/payment/Payment';
import HeaderBarItem from '../components/header/HeaderBarItem';
import {getHeaderTitle} from '@react-navigation/elements';
import PaymentDetail from '../screens/PaymentDetail/PaymentDetail';
import GuestAdd from '../screens/guestAdd/GuestAdd';
import {fonts} from '../assets/fonts';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Payment"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          // headerShown: false,
          headerTransparent: true,
          title: 'BookingToGo',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: fonts.primary.bold,
          },
          headerTintColor: '#fff',

          // headerTitle: props => (
          //   <HeaderBarItem {...props} title={'BookingToGo'} />
          // ),
          // headerLeft: props => (
          //   <HeaderBarItem
          //     {...props}
          //     title={'left'}
          //     onPress={() => {
          //       // Do something
          //     }}
          //   />
          // ),
          // headerRight: props => (
          //   <HeaderBarItem
          //     {...props}
          //     title={'right'}
          //     onPress={() => {
          //       // Do something
          //     }}
          //   />
          // ),

          headerStyle: {
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: '#335998',
            height: 70,
            shadowColor: '#000',
            elevation: 25,
            justifyContent: 'center',
            alignItems: 'center',
          },
          header: ({navigation, route, options, back}) => {
            const title = getHeaderTitle(options, route.name);
            // console.log('options : ', options);
            return (
              <HeaderBarItem
                title={title}
                leftButton={
                  back ? (
                    <MyBackButton onPress={navigation.goBack} />
                  ) : undefined
                }
                style={options.headerStyle}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="PaymentDetail"
        component={PaymentDetail}
        // options={({route}) => ({title: route.params?.title})}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#FFF',
          },
          title: 'Payment Details',
          headerStyle: {
            backgroundColor: '#335998',
          },
        }}
      />
      <Stack.Screen
        name="GuestAdd"
        component={GuestAdd}
        // options={({route}) => ({title: route.params?.title})}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#FFF',
          },
          title: 'Tambah Data Tamu',
          headerStyle: {
            backgroundColor: '#335998',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
