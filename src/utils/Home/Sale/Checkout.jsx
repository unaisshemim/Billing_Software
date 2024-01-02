import {View, Text, Button, ToastAndroid, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Wrapper from '../../../components/Wrapper/Wrapper';
import {ScrollView} from 'react-native-gesture-handler';
import CheckoutProuducts from '../../../components/CheckoutProducts/CheckoutProuducts';
import OrderSummary from '../../../components/OrderSummary/OrderSummary';
import {useDispatch, useSelector} from 'react-redux';
import {reset} from '../../../redux/Cart/Cart';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Checkout = () => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const sumOfPrizes = cart.reduce((total, item) => {
    const prize = parseFloat(item.prize); // Convert prize to a float
    return total + prize;
  }, 0);

  const getCurrentDate = () => {
    const currentDate = new Date();
    return `${currentDate.getDate()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getFullYear()}`;
  };

  const generateInvoice = () => {
    // Generate a unique identifier (UUID)
    const uniqueId = uuid.v4();
  
    // Get the current timestamp
    const timestamp = new Date().getTime();
  
    // Combine the timestamp and unique identifier to create a unique invoice number
    const invoiceNumber = `${timestamp}-${uniqueId}`;
  
    return invoiceNumber;
  };
  

  let finalResult = {
    date: getCurrentDate(),
    invoice:generateInvoice(),
    products: cart,
    total: sumOfPrizes,
  };


  const storeData = async (value) => {
    try {

      // Retrieve existing products from AsyncStorage
      const existingProducts = await AsyncStorage.getItem('products');
      let products = existingProducts ? JSON.parse(existingProducts) : [];
  
      // Add the new product to the existing products
      products.push(value);
      console.log(products)
  
      // Store the updated products back in AsyncStorage
      await AsyncStorage.setItem('products', JSON.stringify(products));
  
    } catch (e) {
      // Handle saving error
      console.log(e);
    }
  };
  

  const handleCheckout = () => {
    // Check if the cart is empty
    if (cart.length === 0) {
      // Display an alert if the cart is empty
      Alert.alert('Alert', 'Your cart is empty. Please add items to checkout.');
    } else {

      storeData(finalResult)
      // Display an alert with "Cancel" and "Continue" buttons
      Alert.alert(
        'Checkout',
        'Are you sure you want to proceed with the checkout?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Continue',
            onPress: () => {
              // Continue with the checkout logic
              dispatch(reset());
              navigation.push('Home');
              ToastAndroid.show(
                'Product Sailed!',
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
              );
              // Dispatch the reset action to empty the cart in Redux
            },
          },
        ],
        {cancelable: false},
      );
    }
  };

  return (
    <Wrapper>
      <ScrollView>
        <CheckoutProuducts />
      </ScrollView>
      <OrderSummary />
      <Button
        title="Checkout"
        onPress={handleCheckout}
        disabled={cart.length === 0}
      />
    </Wrapper>
  );
};

export default Checkout;
