import {View, Text} from 'react-native';
import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Wrapper from '../../components/Wrapper/Wrapper';
import Recent from '../../components/Recent/Recent';

const History = ({navigation}) => {
  const state = navigation.getState();
  //geting the home headName
  let HeadName = state.routes[state.index].name;
  return (
    <Wrapper>
      <TopBar HeadName={HeadName} />
    <Recent/>
    </Wrapper>
  );
};

export {History};
