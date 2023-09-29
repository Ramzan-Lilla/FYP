import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';  
import { baseUrl } from '../../utils/Url';
export default function Search_screen({navigation}) {
  const route = useRoute();
  const { location , issues , vehicleTypes, userId } = route.params;
  const [loading, setloading] = useState(false);
  const [vendor, setVendor] = useState([]);
  const getvendorData = async () => {
    try {
      setloading(true);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(location)
    };
      const getData  = await fetch(`${baseUrl}/booking/search`, requestOptions);
      const data = await getData.json();
      console.log({data});
      if (data?.status) {
        setloading(false);
        setVendor(data?.vendors);
      }else{
        setVendor([]);
        setloading(false);
      }
      return;
    } catch (error) {
      setloading(false);
      setVendor([]);
      console.log({error});
    }
  } 

  useEffect(() => {
    getvendorData();
  }, [])
  
  const handleBookNow = async (item) => {
    const payload = {
      userId,
      location,
      issues,
      vehicleType : vehicleTypes[0]?.type,
      vendorId : item?._id
    }
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    const getData  = await fetch(`${baseUrl}/booking/vendor`, requestOptions);
      const data = await getData.json();
      console.log({data});
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <ScrollView style={{
      width : Dimensions.get('screen').width,
      height : Dimensions.get('screen').height
    }}>
    {loading ? <Text style={style.text}>Loading...</Text> : 
      vendor?.length > 0 ? 
      vendor.map(item => {
        return (
          <View style={style.View_Card} key={item?._id}>
      <View style={style.card_Header}>
        <Image
          source={require('../Images/Profile.png')}
          style={style.card_Image}
        />
        <View style={style.card_Name}>
          <Text style={style.Text_Name}>{item?.firstName + " " + item?.lastName}</Text>
        </View>
      </View>
      <View style={style.card_Description}>
        <Text style={style.Text_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          consequuntur aperiam quia ab magni sit ipsum sequi blanditiis
          incidunt voluptatum!
        </Text>
      </View>
      <View style={style.card_Buttons}>
        <TouchableOpacity style={style.Accept_Button} onPress={() => handleBookNow(item)} >
          <Text style={{color :'white'}}> Book Now </Text>
        </TouchableOpacity>
        
      </View>
    </View>
        )
      }) : 
    <Text style={style.text}>Not Available</Text>
    
    }
  </ScrollView>
  );
}


const style = StyleSheet.create({
    Refresh : {
      position :'absolute',
      right :0 ,
      marginHorizontal : 5,
      marginVertical : 10
    },
    Header :{
      display :"flex",
      flexDirection : "row",
    },
    View_Card: {
      width: '95%',
      height: 150,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      marginHorizontal: 10,
      marginVertical : 5
    },
    card: {
      width: '100%',
      height: '100%',
      marginVertical : 25
    },
    card_Header: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: 5,
      marginVertical: 5,
    },
    card_Image: {
      width: 50,
      height: 50,
    },
    card_Name: {
      padding: 5,
      marginHorizontal: 5,
    },
    Text_Name: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    Text_description: {
      fontSize: 13,
      paddingHorizontal: 5,
    },
    card_Buttons : {
      display : 'flex',
      flexDirection : "row",
      marginVertical : 5
    },
    Accept_Button : {
      backgroundColor  : 'green',
      paddingHorizontal : 5,
      paddingVertical: 5,
      marginHorizontal : 5
    },
    text : {
      display :'flex',
      justifyContent : 'center',
      alignItems : 'center',
      alignSelf :'center',
      alignContent : 'center',
      marginVertical : "50%",
      fontSize : 20,
      fontWeight : 'bold'
    }  
  });
  