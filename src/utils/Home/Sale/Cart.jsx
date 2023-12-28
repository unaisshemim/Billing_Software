import { View, Text, Button } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/Wrapper/Wrapper'
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
const navigation = useNavigation();
  return (
    <Wrapper>
        <View>
 
            <Button title="Checkout" onPress={()=>{navigation.push('Checkout')}}/>
        </View>
    </Wrapper>
  )
}

export default Cart