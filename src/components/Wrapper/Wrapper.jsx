import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Wrapper = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles=StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        height:'100%'
    }
})
export default Wrapper;
