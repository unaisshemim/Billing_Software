import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Hamburger from 'react-native-vector-icons/Feather';
import Bell from 'react-native-vector-icons/FontAwesome5';

const TopBar = ({HeadName}) => {
  return (
    <View style={styles.topNavbar}>
      <TouchableOpacity>
        <Hamburger name="menu" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.headline}>{HeadName}</Text>
      <TouchableOpacity>
        <Bell name="bell" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  topNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headline: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
});

export default TopBar;
