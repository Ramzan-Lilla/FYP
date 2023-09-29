import {View, Image, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

import {transform} from '@babel/core';

export default function ButtonScreen({navigation}) {
  return (
    <View>
      <View style={styles.logo}>
        <Image
          source={require('../../Assets/Helpme.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.HelpMe}>
          <Text style={styles.HelpMeText}>HELP ME</Text>
        </View>
        <View style={styles.Button}>
          <Button
            title="Vendor"
            onPress={() => navigation.navigate('Vendor')}
          />
        </View>
        <View style={styles.Button}>
          <Button
            title="Customer"
            onPress={() => navigation.navigate('Customer')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginHorizontal: '35%',
    marginVertical: 30,
    width: 100,
    height: 100,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    //flex: 1,
    marginTop:50,
    justifyContent: 'center',
    // alignItems :'center'
  },
  Button: {
    marginHorizontal: 40,
    marginVertical: 10,
   // paddingHorizontal: 30,
  },

  HelpMe: {
    alignItems: 'center',
    marginVertical: 20,
  },
  HelpMeText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});
