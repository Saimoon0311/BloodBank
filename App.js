
import 'react-native-gesture-handler';

import React from 'react';
import { View, Text } from 'react-native';
import Navigation from './resources/config/navigation';
import { NavigationContainer } from '@react-navigation/native';
// import {createDrawerNavigator} from "@react-navigation/drawer"
// import {DrawerContent} from "./resources/config/drawer"
// const Drawer = createDrawerNavigator();
import MyTabs from "./resources/config/drawer"
// import Navigation from "./resources/config/navigation"
function App () {
 return (
 
   
      <NavigationContainer>
        {/* <Navigation/> */}
        <MyTabs />

      </NavigationContainer>
   
  
 );
};


export default App;


// import * as React from 'react';
// import { Text, View,TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//             <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }
