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
import React from 'react';
import {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { MaterialIcons } from 'react-native-vector-icons';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// navigator.geolocation = require('@react-native-community/geolocation');
import Geolocation from '@react-native-community/geolocation';

export default function check_history_c({navigation}) {
  return (
  <Text>Hello Check Customer c</Text>

  );
}

























//-----------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { CheckBox } from 'react-native-elements';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const VehicleIssueBox = () => {
//   // const [vehicleTypes, setVehicleTypes] = useState([]);
//   // const [issues, setIssues] = useState([]);

//   // const vehicleTypesData = [
//   //   { id: 1, type: 'Two Wheeler' },
//   //   { id: 2, type: 'Four Wheeler' },
//   //   { id: 3, type: 'Trucks' },
//   // ];

//   // const issuesData = [
//   //   { id: 1, issue: 'Puncture' },
//   //   { id: 2, issue: 'Engine' },
//   //   { id: 3, issue: 'Oil Related' },
//   //   // Add more issues as needed
//   // ];

//   // const handleToggle = (item, state, setState) => {
//   //   if (state.includes(item)) {
//   //     setState(state.filter((i) => i !== item));
//   //   } else {
//   //     setState([...state, item]);
//   //   }
//   // };

//   // return (
//   //   <View>
//   //     <Text style={styles.heading}>Type of Vehicle:</Text>
//   //     {vehicleTypesData.map((item) => (
//   //       <CheckBox
//   //         key={item.id}
//   //         title={item.type}
//   //         checked={vehicleTypes.includes(item)}
//   //         onPress={() => handleToggle(item, vehicleTypes, setVehicleTypes)}
//   //         checkedIcon={<MaterialIcons name="check" size={20} color="black" />}
//   //       />
//   //     ))}

//   //     <Text style={styles.heading}>Issues:</Text>
//   //     {issuesData.map((item) => (
//   //       <CheckBox
//   //         key={item.id}
//   //         title={item.issue}
//   //         checked={issues.includes(item)}
//   //         onPress={() => handleToggle(item, issues, setIssues)}
//   //         checkedIcon={<MaterialIcons name="check" size={20} color="black" />}
//   //       />
//   //     ))}
//   //   </View>
//   // );
//   const [isSelected, setSelection] = useState(false);

//   return (
//     <View style={styles.container}>
//       <View style={styles.checkboxContainer}>
//         <CheckBox
//           value={isSelected}
//           onValueChange={setSelection}
//           style={styles.checkbox}
//         />
//         <Text style={styles.label}>Do you like React Native?</Text>
//       </View>
//       <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text>
//     </View>
//   );
// };

// const styles = {
//   heading: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   checkbox: {
//     alignSelf: 'center',
//   },
//   label: {
//     margin: 8,
//   },

// };

// export default VehicleIssueBox;






// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { CheckBox } from 'react-native-elements';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const VehicleIssueBox = () => {
//   const [vehicleTypes, setVehicleTypes] = useState([]);
//   const [issues, setIssues] = useState([]);

//   const vehicleTypesData = [
//     { id: 1, type: 'Two Wheeler' },
//     { id: 2, type: 'Four Wheeler' },
//     { id: 3, type: 'Trucks' },
//   ];

//   const issuesData = [
//     { id: 1, issue: 'Puncture' },
//     { id: 2, issue: 'Engine' },
//     { id: 3, issue: 'Oil Related' },
//     // Add more issues as needed
//   ];

//   const handleToggle = (item, state, setState) => {
//     const isItemSelected = state.some((selectedItem) => selectedItem.id === item.id);
//     if (isItemSelected) {
//       setState(state.filter((selectedItem) => selectedItem.id !== item.id));
//     } else {
//       setState([...state, item]);
//     }
//   };

//   return (
//     <View>
//       <Text style={styles.heading}>Type of Vehicle:</Text>
//       {vehicleTypesData.map((item) => (
//         <CheckBox
//           key={item.id}
//           title={item.type}
//           checked={vehicleTypes.some((selectedItem) => selectedItem.id === item.id)}
//           onPress={() => handleToggle(item, vehicleTypes, setVehicleTypes)}
//           checkedIcon={<MaterialIcons name="check" size={20} color="black" />}
//         />
//       ))}

//       <Text style={styles.heading}>Issues:</Text>
//       {issuesData.map((item) => (
//         <CheckBox
//           key={item.id}
//           title={item.issue}
//           checked={issues.some((selectedItem) => selectedItem.id === item.id)}
//           onPress={() => handleToggle(item, issues, setIssues)}
//           checkedIcon={<MaterialIcons name="check" size={20} color="black" />}
//         />
//       ))}
//     </View>
//   );
// };

// const styles = {
//   heading: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//     marginBottom: 5,
//   },
// };

// export default VehicleIssueBox;
