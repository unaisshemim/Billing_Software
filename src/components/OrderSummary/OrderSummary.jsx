
import React from 'react';
import { Card } from '@rneui/base';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const cart = useSelector(state => state.cart.cart);
  const sumOfPrizes = cart.reduce((total, item) => {
    const prize = parseFloat(item.prize); // Convert prize to a float
    return total + prize;
  }, 0);
  return (
    <Card containerStyle={styles.summaryContainer}>
      <Card.Title style={{fontSize: 24,color:"black"}}> Summary</Card.Title>
      <Card.Divider />
      <View style={{flexDirection:'row',justifyContent:'space-between',}}>
      <Card.Title style={{fontSize: 22,color:'black'}}> Total </Card.Title>
      <Card.Title style={{fontSize: 22,color:'red'}}> ₹ {sumOfPrizes}</Card.Title>
      </View>
    </Card>
  );
};

const styles=StyleSheet.create({
  summaryContainer:{
    marginBottom:10,
  }
})
export default OrderSummary;
