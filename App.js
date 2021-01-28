
import 'react-native-gesture-handler';

import React from 'react';
import { View, Text,Button } from 'react-native';
// import Navigation from './resources/config/navigation';
import { NavigationContainer } from '@react-navigation/native';
// import {createDrawerNavigator} from "@react-navigation/drawer"
// import {DrawerContent} from "./resources/config/drawer"
// const Drawer = createDrawerNavigator();
import auth from '@react-native-firebase/auth';
import Navigation from "./resources/config/drawer"
import { GoogleSignin, GoogleSigninButton, statusCodes  } from '@react-native-community/google-signin';
// import Navigation from "./resources/config/navigation"
// GoogleSignin.configure({
//   webClientId: '266321401311-sv29naifppciuq2aql6stklf6mf0bcr3.apps.googleusercontent.com',
// })
function App () {

  // async function onGoogleButtonPress() {
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();
  
  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }
 return (
 
   
      <NavigationContainer>

        <Navigation />

      </NavigationContainer>
      // <View><Text>hello</Text></View>
   
     
    //   <Button
    //   title="Google Sign-In"
    //   onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    // />
     
        // <GoogleSigninButton
        //   style={{ width: 192, height: 48 }}
        //   size={GoogleSigninButton.Size.Wide}
        //   color={GoogleSigninButton.Color.Dark}
        //   onPress={this.signIn}
          // disabled={this.state.isSigninInProgress}
          //  />
    


  
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
