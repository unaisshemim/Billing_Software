import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Hamburger from 'react-native-vector-icons/Feather';
import Bell from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topNavbar}>
        <TouchableOpacity>
          <Hamburger name="menu" size={30} color="black" />
        </TouchableOpacity>
        <Text >Home</Text>
        <TouchableOpacity>
          <Bell name="bell" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topNavbar: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
});
export {Home};
