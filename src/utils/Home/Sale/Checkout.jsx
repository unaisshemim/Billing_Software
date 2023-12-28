import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Checkout = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Checkout"
        onPress={() => {
          navigation.push('Home');
        }}
      />
    </View>
  );
};

export default Checkout;
