// import * as React from 'react';
// import { Text, View ,StyleSheet,Image,Button,Hoverable,SafeAreaView,ScrollView} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import Hoverable from "./Hoverable";
// import Home from "../screens/Home"
// import Login from "../screens/Login"
// import Donateform from "../screens/Donate"
// import List from "../screens/List"
// // import { color } from 'react-native-reanimated';
// function HomeScreen() {
//   return (
// <ScrollView>
//     <SafeAreaView>
//     <View>
//       <Home/>
//     </View>
//     </SafeAreaView>
//     </ScrollView>
//   );
// }

// function Listin() {
//   return (
//     <ScrollView>
//     <SafeAreaView>
//     <View>
//       <List/>
//     </View>
//     </SafeAreaView>
//     </ScrollView>
//   );
// }

// function Loginup() {
//   return (
//     <ScrollView>
//     <SafeAreaView>
//     <View>
//       <Login/>
//     </View>
//     </SafeAreaView>
//     </ScrollView>
//   );
// }
// function Donate() {
//   return (
//     <ScrollView>
//     <SafeAreaView>
//     <View>
//       <Donateform/>
//     </View>
//     </SafeAreaView>
//     </ScrollView>
//   );
// }
// const Tab = createBottomTabNavigator();
// // const Tabs = BottomTabBarHeightContext();

// const Drawer = createDrawerNavigator();

// export default function MyTabs() {
//   return (
//     // <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="List of Blood Donars" component={Listin} />
//         <Drawer.Screen name="Conation Form" component={Donate} />
//         <Drawer.Screen name="Account" component={Loginup} />
//       </Drawer.Navigator>
//     // </NavigationContainer>
//   );
// }


















import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
// import { StyleSheet} from 'react-native'
// import Home from '../screens/Home';
import Donateform from '../screens/Donate';
// imo
import List from '../screens/List';
import Loginscren from '../screens/Login';
// import Institute from '../Pages/Institute';
// import Repairing from '../Pages/Repairing';
// import Parts from '../Pages/Parts';
// import * as Linking from 'react-native-linking'
const Stack = createStackNavigator();

export default function Navigation() {
    return (
            <Stack.Navigator>
                <Stack.Screen
        name="Home"
        component={Loginscren}
        options={{
          title: 'MS Blood Bank Foundation',
          headerStyle: {
            backgroundColor: '#870c0c',
          },
          headerTintColor: '#fff',
          
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign:"center",
          },
        }}
      />
                {/* <Stack.Screen name="Home" component={Home} /> */}
                <Stack.Screen name="List"  component={List} 
                   options={{
                    title: 'MS Blood Bank Foundation',
                    headerStyle: {
                      backgroundColor: '#870c0c',
                    //   color:"white"
                    },
                    headerTintColor: 'white',
                    
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      textAlign:"center",
                      color:"white"
                    },
                  }}/>
                <Stack.Screen name="Donateform" component={Donateform}
                   options={{
                    title: 'MS Blood Bank Foundation',
                    headerStyle: {
                      backgroundColor: '#870c0c',
                    //   color:"white"
                    },
                    headerTintColor: 'white',
                    
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      textAlign:"center",
                      color:"white"
                    },
                  }} />
            </Stack.Navigator>
    );
}









