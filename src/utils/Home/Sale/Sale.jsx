import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import Wrapper from '../../../components/Wrapper/Wrapper';
import CartProducts from '../../../components/CartProducts/CartProducts';
import {ScrollView} from 'react-native-gesture-handler';

const Sales = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <ScrollView>
        <CartProducts />
      </ScrollView>
      <Button
        title="Cart"
        onPress={() => {
          navigation.navigate('Checkout');
        }}
        color={'black'}
        style={{borderRadius: '20px'}}
      />
    </Wrapper>
  );
};

export {Sales};
