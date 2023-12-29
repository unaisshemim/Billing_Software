import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Card, Button, Input} from '@rneui/themed';
import Modal from 'react-native-modal';
import Edit from 'react-native-vector-icons/AntDesign';

const CheckoutProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([
    {productName: 'Mango', prize: 100, quantity: 1},
    {productName: 'Mango', prize: 100, quantity: 1},
    {productName: 'Mango', prize: 100, quantity: 1},
    {productName: 'Mango', prize: 100, quantity: 1},
    {productName: 'Mango', prize: 100, quantity: 1},
    {productName: 'Mango', prize: 100, quantity: 1},
  ]);

  return (
    <View style={styles.cartContainer}>
      {cart?.map((item, index) => {
        return (
          <Card containerStyle={{borderRadius: 10}} key={index + 'cartcard'}>
            <Card.Title style={{fontSize: 24,color:'purple'}}> {item.productName}</Card.Title>
            <Card.Divider />
            <View style={styles.productDetails}>
              <Text style={styles.prize}>₹ {item.prize}</Text>
              <View style={styles.quantity}>
                <Text>{item.quantity}</Text>
              </View>
            </View>
          
          </Card>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
  flex: 1,
   
  },
  prize: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'green',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '40%',
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalConatiner: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
  },
});

export default CheckoutProducts;
