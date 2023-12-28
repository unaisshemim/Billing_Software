import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Card, Button, Input} from '@rneui/themed';
import Modal from 'react-native-modal';
import Edit from 'react-native-vector-icons/AntDesign';

const CartProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState({
    productName: '',
    prize: '',
    quantity: quantity,
  });
  const [cart, setCart] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const isAddButtonDisabled = !product.productName || !product.prize;

  const handleProductChange = (name, value) => {
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleQuantity = (changeAmount, index) => {
    const updatedCart = [...cart];

    // Ensure the item at the specified index exists and has the quantity property
    if (updatedCart[index] && updatedCart[index].hasOwnProperty('quantity')) {
      const newQuantity = updatedCart[index].quantity + changeAmount;

      // Ensure quantity doesn't go below 1
      if (newQuantity >= 1) {
        const originalPrize = parseFloat(updatedCart[index].prize) / updatedCart[index].quantity;
        const newPrize = originalPrize * newQuantity;
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: newQuantity,
          prize: newPrize
        };


        setCart(updatedCart);
      }
    }
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    if (isModalVisible) {
      // If closing the modal, reset the product state
      setProduct({
        productName: '',
        prize: '',
        quantity: 1,
      });
    }
  };
  const handleSubmit = () => {
    if (editingIndex !== null) {
      const updatedCart = [...cart];

      updatedCart[editingIndex] = {
        ...updatedCart[editingIndex],
        productName: product.productName,
        prize: product.prize,
        quantity: product.quantity,
      };
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
      setProduct({
        productName: '',
        prize: '',
        quantity: 1,
      });
    }
    toggleModal();
    setEditingIndex(null);
  };
  const handleEditProduct = index => {
    const selectedProduct = cart[index];

    setProduct({
      productName: selectedProduct.productName,
      prize: selectedProduct.prize.toString(), // Convert prize to string for Input component
      quantity: selectedProduct.quantity,
    });

    setModalVisible(true);
    setEditingIndex(index);
  };
  const handleDelete = index => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  console.log(cart);
  return (
    <View style={styles.cartContainer}>
      {cart?.map((item, index) => {
        return (
          <Card containerStyle={{borderRadius: 10}} key={index + 'cartcard'}>
            <Card.Title style={{fontSize: 24}}> {item.productName}</Card.Title>
            <Card.Divider />
            <View style={styles.productDetails}>
              <Text style={styles.prize}>₹ {item.prize}</Text>
              <View style={styles.quantity}>
                <Button
                  size="md"
                  containerStyle={{width: 40}}
                  onPress={() => handleQuantity(-1, index)}>
                  -
                </Button>
                <Text>{item.quantity}</Text>
                <Button
                  size="md"
                  containerStyle={{width: 40}}
                  onPress={() => {
                    handleQuantity(1, index);
                  }}>
                  +
                </Button>
              </View>
            </View>
            <View style={{marginTop: 20, flexDirection: 'row', marginLeft: 20}}>
              <Button
                size="md"
                color="wheat"
                onPress={() => {
                  handleEditProduct(index);
                }}>
                <Edit size={20} color="black" name="edit" />
              </Button>
              <Button
                size="md"
                color="red"
                containerStyle={{marginLeft: 10}}
                onPress={() => {
                  handleDelete(index);
                }}>
                <Edit size={20} color="white" name="delete" />
              </Button>
            </View>
          </Card>
        );
      })}

      <View style={{flex: 1}}>
        <Button
          title="Add Product"
          onPress={toggleModal}
          containerStyle={{marginTop: 30}}
        />

        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1}}>
            <View style={styles.modalConatiner}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginBottom: 30,
                }}>
                Add Product
              </Text>
              <Input
                placeholder="Product Name"
                name="productName"
                value={product.productName}
                onChangeText={text => handleProductChange('productName', text)}
                errorMessage={
                  product.productName.trim() === ''
                    ? 'Please enter a product name'
                    : ''
                }
                errorStyle={{color: 'red'}}
              />
              <Input
                placeholder="Prize"
                keyboardType="numeric"
                name="prize"
                value={product.prize}
                onChangeText={text => handleProductChange('prize', text)}
                errorMessage={
                  product.prize.trim() === ''
                    ? 'Please enter a valid prize'
                    : ''
                }
                errorStyle={{color: 'red'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title="Cancel"
                onPress={toggleModal}
                color="red"
                containerStyle={{marginRight: 20, width: 70}}
              />
              <Button
                title="Add"
                onPress={() => {
                  handleSubmit();
                  toggleModal();
                }}
                containerStyle={{width: 70}}
                disabled={isAddButtonDisabled}
              />
            </View>
          </View>
        </Modal>
      </View>
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

export default CartProducts;
