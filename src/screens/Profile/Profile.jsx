import {View, Text} from 'react-native';
import React from 'react';
import TopBar from '../../components/TopBar/TopBar';

const Profile = ({navigation}) => {
  const state = navigation.getState();
  //geting the home headName
  let HeadName = state.routes[state.index].name;
  return (
    <View>
      <TopBar HeadName={HeadName} />
    </View>
  );
};

export {Profile};
