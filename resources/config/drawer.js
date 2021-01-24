import * as React from 'react';
import { Text, View ,StyleSheet,Image,Button,Hoverable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator,BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Hoverable from "./Hoverable";
import Home from "../screens/Home"
import Login from "../screens/Login"
import Donateform from "../screens/Donate"
import List from "../screens/List"
import { color } from 'react-native-reanimated';
function HomeScreen() {
  return (
    <View>
      <Home/>
    </View>
  );
}

function Listin() {
  return (
    <View>
      <List/>
    </View>
  );
}

function Loginup() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Login/>
    </View>
  );
}
function Donate() {
  return (
    <View>
      <Donateform/>
    </View>
  );
}
const Tab = createBottomTabNavigator();
// const Tabs = BottomTabBarHeightContext();

export default function MyTabs() {
  return (
    // <Hoverable>
    <Tab.Navigator 
    tabBarOptions={{
      labelStyle: { fontWeight:"bold" ,fontSize:18,fontFamily:"arial" ,fontStyle:"italic",textAlign:"center"},

        style: {
          
          // backgroundColor:"darkred",
          alignContent:"center",
          // color:"white",
          // fontSize:50,
          paddingBottom:15,
        },
  }}>
    
      <Tab.Screen  name= "Home"  component={HomeScreen} /> 
      <Tab.Screen name="List" component={Listin} />
      <Tab.Screen name="Form" component={Donate} />
      <Tab.Screen name="Account" component={Loginup} />
      
    </Tab.Navigator>
    // </Hoverable>

  );
}

const styles = StyleSheet.create({
name:{
  backgroundColor:"red",
},

})