import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {baseUrl} from "../../../utils/Url";
export default function VendorSignUp({navigation}) {



  const [vendorData, setVendorData] = useState({});

  const handleOnChange =  (name, text) => {
    setVendorData({
      ...vendorData,
      [name] : text
    });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vendorData)
  };
    try{
    const response =  await  fetch(`${baseUrl}/vendor/register`, requestOptions);
    const data  = await response.json();
    // localStorage.setItem('data', data)
    console.log("data",data);
    navigation.navigate('Vendor');
    }catch(error){
      console.log("error", error);
    }
  }
  
  
  


  return (
    <ScrollView>
      <View style={styles.logo}>
        <Image
          source={require('../../../Assets/Helpme.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Enter First Name"
            onChangeText={(text) => handleOnChange("firstName" , text)}
            style={styles.TextInput}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Enter Last Name"
            onChangeText={(text) => handleOnChange("lastName" , text)}
            style={styles.TextInput}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Enter Name or Email"
            onChangeText={(text) => handleOnChange("email" , text)}
            style={styles.TextInput}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Enter Password"
            onChangeText={(text) => handleOnChange("password" , text)}
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={true}
            textContentType={'password'}
            style={styles.TextInput}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Enter Confirm Password"
            onChangeText={(text) => handleOnChange("cPassword" , text)}
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={true}
            textContentType={'password'}
            style={styles.TextInput}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.submitButton}>
            <TouchableOpacity style={styles.submit} onPress={handleOnSubmit}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.text}>
        <Text>I Already have an Account</Text>
        <TouchableOpacity style={styles.textButton} onPress={() => navigation.navigate('Vendor')}>
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
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
      backgroundColor: 'blue',
      // justifyContent:'center',
      height: 400,
      borderRadius: 50,
      marginHorizontal: 10,
      marginVertical: 30,
    },
    text: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    textButton: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#cccccc',
      borderRadius: 50,
      marginVertical: 5,
    },
    containerTextInput: {
      marginHorizontal: 10,
      marginTop: 20,
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 20,
    },
    TextInput: {
      height: 40,
      borderColor: '#fff',
      color: '#fff',
    },
    submit:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:30,
      paddingHorizontal:20,
      paddingVertical:15,
      backgroundColor:'#8585e0',
      borderRadius:50,
      marginHorizontal:70
    },
  
  });
  