import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {baseUrl} from "../../../utils/Url";


export default function Customer({navigation}) {


  const [userData, setUserData] = useState({});

  const handleOnChange =  (name, text) => {
    setUserData({
      ...userData,
      [name] : text
    });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
  };
    try{
    

    const response =  await  fetch(`${baseUrl}/user/SignIn`, requestOptions);
    const data  = await response.json();
    console.log("data",data); 
    
    if(data?.success){
      console.log("Success");
      console.log({id : data?.data?._id});
      navigation.navigate('HomeCustomer', {userId : data?.data?._id });
    }else{
      Alert.alert("Error", data?.message);
    }
    //navigation.navigate('Customer');
    
    }catch(error){
      console.log("error", error);
    }
  }
  
  
/*
      try{
      const requestOptions = {
        method  : "GET",
        headers: { 'Content-Type': 'application/json' }
      };
      console.log("yup ", requestOptions);
    const response =  await  fetch(`${baseUrl}`, requestOptions);
      console.log({response});
    const data  = await response.json();
    // localStorage.setItem('data', data)
    console.log("data",data); 
    //navigation.navigate('Customer');
    navigation.navigate('Home');
    }catch(error){
      console.log("error", error);
    }
  }
  

*/







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
            placeholder="Enter  Email"
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
        <View style={styles.submitButton}>
            <TouchableOpacity style={styles.submit} onPress={handleOnSubmit}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.text}>
        
        <TouchableOpacity style={{marginVertical : 10}} onPress={() => navigation.navigate('customerSignUp')}>
        <Text style = {{color : "#fff"}}>I Don't have an Account</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </ScrollView>
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
    backgroundColor: 'blue',
    justifyContent:'center',
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
    marginTop: 30,
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
