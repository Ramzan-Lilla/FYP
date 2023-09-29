import { View, Text, StyleSheet , Image} from 'react-native'
import React, {useEffect} from 'react'

export default function Welcome({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 5000);
    }, [])
    
  return (
    <View style = {styles.container}>
        <Image source={require('../../Assets/Helpme.png')}  style = {styles.Image}/>
    </View>
  )
}


const styles  = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    Image : {
        width: "100%",
        height : "100%",
        
    }
})
