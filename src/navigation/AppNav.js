import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(242, 242, 242)',
  },
};

const MyTheme2 = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#C0C0C0',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function AppNav() {
  return (
    <NavigationContainer theme={MyTheme2}>
      {/* Rest of your app code */}
      <AppStack />
    </NavigationContainer>
  );
}

export default AppNav;
