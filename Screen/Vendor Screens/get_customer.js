import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// navigator.geolocation = require('@react-native-community/geolocation');
import Geolocation from '@react-native-community/geolocation';
import {useRoute} from '@react-navigation/native';
import {baseUrl} from '../../utils/Url';

export default function get_customer({navigation}) {
  const route = useRoute();
  const {vendorId} = route.params;
  console.log('route', vendorId);
  const [location, setLocation] = useState({});
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRequestData = async (req, res) => {
    try {
      setLoading(true);
      const payload = {
        vendorId: vendorId,
      };
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      };
      const getData = await fetch(`${baseUrl}/booking/status`, requestOptions);
      const data = await getData.json();
      console.log({data});
      setUserData(data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getRequestData();
  }, []);

  const handleGeoLocation = () => {
    // return navigator.geolocation.getCurrentPosition(position => {
    //   console.log("Location", position);
    // })
    Geolocation.getCurrentPosition(info => {
      setLocation({
        lat: info.coords?.latitude,
        lng: info?.coords?.longitude,
        altitude: info?.coords?.altitude,
      });
    });
  };

  const handleOnStatus = async (item , status) => {
    try {
      const payload = {
        bookingId: item?._id,
        status: status,
      };
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      };
      const getData = await fetch(`${baseUrl}/booking/update`, requestOptions);
      const data = await getData.json();
      getRequestData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={style.Header}>
        <View>
          <Text>List of Customers</Text>
        </View>
        <View style={style.Refresh}>
          <TouchableOpacity
            style={style.Accept_Button}
            onPress={getRequestData}>
            <Text style={{color: 'white'}}>Refresh</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.card}>
        {loading ? (
          <Text>Loading...</Text>
        ) : userData?.length > 0 ? (
          userData?.map(item => {
            return (
              <View style={style.View_Card} key={item?._id}>
                <View style={style.card_Header}>
                  <Image
                    source={require('../Images/Profile.png')}
                    style={style.card_Image}
                  />
                  <View style={style.card_Name}>
                    <Text style={style.Text_Name}>
                      {item?.customer_Id?.firstName +
                        ' ' +
                        item?.customer_Id?.lastName}
                    </Text>
                  </View>
                </View>
                <View style={style.card_Description}>
                  <Text style={style.Text_description}>
                    Issues :{' '}
                    {item?.issues?.map(item => {
                      return item?.issue + ' , ';
                    })}
                  </Text>
                  <Text style={style.Text_description}>
                    VehicleType : {item?.vehicleType}
                  </Text>
                </View>
                <View style={style.card_Buttons}>
                  <TouchableOpacity
                    style={style.Accept_Button}
                    onPress={() => handleOnStatus(item, 'active')}>
                    <Text style={{color: 'white'}}>Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.Reject_Button} onPress={() => handleOnStatus(item, 'reject')}>
                    <Text style={{color: 'white'}}>Reject</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        ) : (
          <Text>No Request Found</Text>
        )}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  Refresh: {
    position: 'absolute',
    right: 0,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  Header: {
    display: 'flex',
    flexDirection: 'row',
  },
  View_Card: {
    width: '95%',
    height: 150,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  card: {
    width: '100%',
    height: '100%',
    marginVertical: 25,
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
  card_Buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
  },
  Accept_Button: {
    backgroundColor: 'green',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  Reject_Button: {
    backgroundColor: 'red',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
});
