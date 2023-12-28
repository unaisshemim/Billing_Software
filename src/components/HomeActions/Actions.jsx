import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

//MaterialCommunityIcons
const Actions = () => {
  const Boxes = [
    {
      heading: 'Sales',
      subHeading: 'Machine and Parts',
      icon: 'sale',
      nav: 'Sales',
    },
    {
      heading: 'Service',
      subHeading: 'Machine and Stove',
      icon: 'wrench',
      nav: 'Service',
    },
  ];

  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        {Boxes.map((value, index) => {
          return (
            <View style={styles.actionBox} key={index}>
              <View style={styles.left}>
                <View style={[styles.top, styles.padding]}>
                  <Text style={styles.heading}>{value.heading} </Text>
                  <Text style={styles.heading}>{value.subHeading}</Text>
                </View>
                <View style={[styles.bottom]}>
                  <TouchableOpacity
                    style={styles.generate}
                    onPress={() => {
                      navigation.navigate(value.nav);
                    }}>
                    <Text style={{color: 'white'}}>Generate</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.right}>
                <MaterialCommunityIcons
                  name={value.icon}
                  size={80}
                  color="black"
                />
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  actionBox: {
    width: '95%',
    minHeight: '40%',
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
  },
  padding: {
    padding: 30,
  },
  left: {
    flex: 2,
  },
  top: {flex: 3},
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 23,
    color: 'black',
    fontWeight: 'bold',
  },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  generate: {
    backgroundColor: 'black',
    width: '50%',
    height: '90%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Actions;
