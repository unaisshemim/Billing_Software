import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Intro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.primary}>Hi Unaiz</Text>
      <Text style={styles.secondary}>Welcome ....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop:40,marginLeft:27},
  primary: {fontSize:25,fontWeight:'bold',color:'black'},
  secondary: {fontSize:20},
});
export default Intro;
