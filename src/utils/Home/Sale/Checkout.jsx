import {View, Text, Button, ToastAndroid} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Wrapper from '../../../components/Wrapper/Wrapper';
import {ScrollView} from 'react-native-gesture-handler';
import CheckoutProuducts from '../../../components/CheckoutProducts/CheckoutProuducts';
import OrderSummary from '../../../components/OrderSummary/OrderSummary';


const Checkout = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <ScrollView>
        <CheckoutProuducts />
      </ScrollView>
      <OrderSummary />
      <Button
        title="Checkout"
        onPress={() => {
          navigation.push('Home');
          ToastAndroid.show('Product Sailed!', ToastAndroid.LONG,ToastAndroid.CENTER);
          
        }}
      />
    </Wrapper>
  );
};

export default Checkout;
