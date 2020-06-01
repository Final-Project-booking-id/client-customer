import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/index'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/home'
import MerchantPage from './src/merchant-page'
import MapPage from './src/map-page'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Merchant'
            component={MerchantPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Map'
            component={MapPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
