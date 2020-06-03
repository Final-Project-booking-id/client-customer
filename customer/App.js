import React from 'react';
import store from './store/index'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/home'
import MerchantPage from './src/merchant-page'
import MapPage from './src/map-page'
import ServicePage from './src/service-page'
import DetailPage from './src/detail-page'
import BookingPage from './src/booking-page'
import RegisterPage from './src/register-page';
import LoginPage from './store/login-page'

const Stack = createStackNavigator()

export default function App() {

  return (
    <Provider store={store} >
      <NavigationContainer>
        {/* <NavigationComponent /> */}
        <Stack.Navigator>
          <Stack.Screen
            name='Register'
            component={RegisterPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Login'
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Book'
            component={BookingPage}
            options={{ headerShown: false }}
          />
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
            name='Service'
            component={ServicePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Detail'
            component={DetailPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


// function NavigationComponent() {
//   const CustomerId = useSelector(state => state.CustomerId)
//   // if (CustomerId){
//   //   return(
//   console.log(CustomerId)
//   //   )
//   // }
//   return (
//     <Stack.Navigator>
//       {
//         CustomerId.length ? (<> <Stack.Screen
//           name='Home'
//           component={Home}
//           options={{ headerShown: false }}
//         />
//           <Stack.Screen
//             name='Book'
//             component={BookingPage}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name='Merchant'
//             component={MerchantPage}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name='Map'
//             component={MapPage}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name='Service'
//             component={ServicePage}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name='Detail'
//             component={DetailPage}
//             options={{ headerShown: false }}
//           /></>) : (<Stack.Screen
//             name='Register'
//             component={RegisterPage}
//             options={{ headerShown: false }}
//           />)
//       }


//     </Stack.Navigator>
//   )
// }