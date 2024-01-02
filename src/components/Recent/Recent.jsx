import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Card, Button, Input} from '@rneui/themed';
const Recent = () => {
  return (
    
      <Card containerStyle={{borderRadius: 10}} >
        <Card.Title style={{fontSize: 24}}> item</Card.Title>
        <Card.Divider />
        <View style={styles.productDetails}>
          <Text style={styles.prize}>₹ </Text>
        </View>
        
      </Card>
    
  );
};
const styles=StyleSheet.create({

})
export default Recent;
