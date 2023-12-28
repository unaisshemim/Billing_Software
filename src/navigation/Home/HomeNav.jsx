import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Sales, Service} from '../../utils';
import {Home} from '../../screens';
import Cart from '../../utils/Home/Sale/Cart';
import Checkout from '../../utils/Home/Sale/Checkout';

const HomeNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Sales" component={Sales} />
      <Stack.Screen name="Service" component={Service} />
      <Stack.Screen
        name="Cart"
        component={Cart}
        // options={{headerShown: false}}
      />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};

export default HomeNav;
