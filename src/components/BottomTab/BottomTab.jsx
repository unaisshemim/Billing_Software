import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Settings, Chart, Profile, History} from '../../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNav from '../../navigation/Home/HomeNav';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer
      initialRouteName="Home"
      style={{flex: 1, bacgroundColor: '#FFFDFD'}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'HomeNav':
                iconName = 'home';
                break;
              case 'Settings':
                iconName = 'settings-outline';
                break;
              case 'Chart':
                iconName = 'bar-chart-outline';
                break;
              case 'History':
                iconName = 'receipt-outline';
                break;
              case 'Profile':
                iconName = 'person-circle-outline';
                break;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="HomeNav"
          component={HomeNav}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Chart"
          component={Chart}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
     
    </NavigationContainer>
  );
};

export default BottomTab;
