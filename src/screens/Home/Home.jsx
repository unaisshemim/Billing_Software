import React from 'react';

import TopBar from '../../components/TopBar/TopBar';
import Intro from '../../components/Intro/Intro';
import Wrapper from '../../components/Wrapper/Wrapper';
import Actions from '../../components/HomeActions/Actions';
import Toast from 'react-native-toast-message';



const Home = ({navigation}) => {
  const state = navigation.getState();
  //geting the home headName
  let HeadName = state.routes[state.index].name;


  return (
    <Wrapper>
     <Toast/>
      <TopBar HeadName={HeadName} />
      <Intro />
      <Actions />
    </Wrapper>
  );
};

export {Home};
