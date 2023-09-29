import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeCustomer({navigation}) {
  const route = useRoute();
  const { userId} = route.params;
  console.log({userId});
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("BookMechanic" , {userId})}>
          <Image source={require('../Images/Mechanic.jpeg')} style={styles.image} /> 
          <Text style={styles.text}>Book Mechanic</Text>
        </TouchableOpacity>
        { <TouchableOpacity style={styles.button} onPress = {()=>navigation.navigate("check_history_c")}>
          <Image source={require('../Images/history.png')} style={styles.image} />
          <Text style={styles.text}>Check_History</Text>
        </TouchableOpacity> }
      </View>
      { <TouchableOpacity style={styles.button} onPress = {() =>navigation.navigate("Customer")}>
        <Image source={require('../Images/logout.png')} style={styles.image} />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    width: 150,
  },
  image: {
    height: 150,
    width: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});