
import React from 'react';
import { Card } from '@rneui/base';
import { StyleSheet, View } from 'react-native';

const OrderSummary = () => {
  return (
    <Card containerStyle={styles.summaryContainer}>
      <Card.Title style={{fontSize: 24,color:"black"}}> Summary</Card.Title>
      <Card.Divider />
      <View style={{flexDirection:'row',justifyContent:'space-between',}}>
      <Card.Title style={{fontSize: 22,color:'black'}}> Total </Card.Title>
      <Card.Title style={{fontSize: 22,color:'red'}}> ₹ 1000</Card.Title>
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
