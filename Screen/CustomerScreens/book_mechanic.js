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
  Alert,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { MaterialIcons } from 'react-native-vector-icons';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// navigator.geolocation = require('@react-native-community/geolocation');
import Geolocation from '@react-native-community/geolocation';
import { useRoute } from '@react-navigation/native';

export default function book_mechanic({navigation}) {
  const [location, setLocation] = useState({});
  const route = useRoute();
  const { userId } = route.params;
  const handleToggle = (item, state, setState) => {
    const isItemSelected = state.some(
      selectedItem => selectedItem.id === item.id,
    );
    if (isItemSelected) {
      setState(state.filter(selectedItem => selectedItem.id !== item.id));
    } else {
      setState([...state, item]);
    }
  };

  const [vehicleTypes, setVehicleTypes] = useState([]);

  const vehicleTypesData = [
    {id: 1, type: 'Two Wheeler'},
    {id: 2, type: 'Four Wheeler'},
    {id: 3, type: 'Trucks'},
  ];

  const issuesData = [
     { id: 1, issue: 'Puncture' },
     { id: 2, issue: 'Engine' },
     { id: 3, issue: 'Oil Related' },
     { id:4, issue: 'Others' },
   
   ];
   const [issues, setIssues] = useState([]);

   const handleOnSumit = () => {
    
    if (!location.lat) {
      return Alert.alert("Error", "Please Enter Location");
    }else if(!issues[0]?.issue){
      return Alert.alert("Error", "Please Enter your issues For Vendor");
    }else if(!vehicleTypes[0]?.type){
      return Alert.alert("Error", "Please Enter your Vehicle Type");
    }else{
      navigation.navigate('Search_screen', {location , issues, vehicleTypes, userId})
    
    }
    // Alert.alert("Error", "Please Add Issus");
   }




  return (
    <SafeAreaView style={style.container}>
      <SafeAreaView>
        <Text style={style.Text_Name}>Enter Your Location Here</Text>
        <View style={style.map}>
          <SafeAreaView style={{height: 200}}>
            <GooglePlacesAutocomplete
              placeholder="Search"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true

                if (details) {
                  const {lat, lng} = details.geometry.location;
                  setLocation({
                    address : details?.formatted_address,
                    lat,
                    lng
                  });
                  // console.log('Longitude:', details?.geometry);
                }

                console.log('data', data);
                console.log('details', details);
              }}
              query={{
                key: 'AIzaSyAftQBR4pWZCHyd1PiDUgEBnj-CA5S2UZM',
                language: 'en',
                type: ['geocode', 'cities'],
              }}
              listViewDisplayed="auto"
              fetchDetails={true}
              GooglePlacesDetailsQuery={{
                fields: ['geometry', 'formatted_address'],
              }}
              styles={{
                container: {
                  width: Dimensions.get('screen').width - 75,
                  height: Dimensions.get('screen').height - 60,
                },
              }}
            />
          </SafeAreaView>
          <View>
            <TouchableOpacity
              style={style.submit}
              onPress={handleOnSumit}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView style={{height : 300}}>
        <Text style={style.heading}>Type of Vehicle:</Text>
        {vehicleTypesData.map(item => (
          <CheckBox
            key={item.id}
            title={item.type}
            checked={vehicleTypes.some(
              selectedItem => selectedItem.id === item.id,
            )}
            onPress={() => handleToggle(item, vehicleTypes, setVehicleTypes)}
            checkedIcon={<MaterialIcons name="check" size={20} color="black" />}
          />
        ))}


        <Text style={style.heading}>Issues:</Text>
      {issuesData.map((item) => (
        <CheckBox
          key={item.id}
          title={item.issue}
          checked={issues.some((selectedItem) => selectedItem.id === item.id)}
          onPress={() => handleToggle(item, issues, setIssues)}
          checkedIcon={<MaterialIcons name="check" size={20} color="black" />}
        />
      ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  Text_Name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
    paddingBottom: 5,
  },
  map: {
    display: 'flex',
    flexDirection: 'row',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  Text_description: {
    fontSize: 13,
    paddingHorizontal: 5,
  },
  container: {
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkBoxContainer: {
    flex: 1,
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  ViewMap: {
    width: '100%',
    height: '100%',
  },
  submit: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 60,
    // marginTop:30,
    // paddingHorizontal:5,
    // paddingVertical:15,
    backgroundColor: '#8585e0',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  // container: {
  //     paddingTop: 10,
  //     paddingBottom: 5,
  //     borderWidth: 1,
  //     borderColor: '#ccc',
  //     borderRadius: 8,
  //     paddingHorizontal: 10,
  //     paddingVertical: 8,
  // },
  // input: {
  //     height: 120,
  // },
});
