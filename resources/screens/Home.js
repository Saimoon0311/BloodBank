import React ,{useState,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ComponentProvider,
  Table,
  Row,
  View,
  TextInput,
  Image,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import Login ,{object} from "./Login"
import { NavigationContainer } from '@react-navigation/native';
import { LoginManager,AccessToken } from "react-native-fbsdk";
import 'react-native-gesture-handler';
import MyTabs from "../config/drawer"
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default function Home (navigation){
  
    return(
      <SafeAreaView><ScrollView>
        <View >
<Text style={styles.header}>MS Blood Bank</Text>
<Image style={{ width: 400, height: 200 }} source={require('./../images/logo.jpg')}/>
<Text style={styles.headr}>Constitution Of Normal Blood</Text>
<Image style={{ width: 350, height: 300,marginLeft:23 ,marginTop:10}} source={require('./../images/s.png')}/>
<Text style={styles.headr}>Blood Cell</Text>
<Image style={{ width: 350, height: 200,marginLeft:23 ,marginTop:10}} source={require('./../images/download.jpg')}/>

<View>

</View>
        </View>
        </ScrollView></SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
      paddingTop:-10,
      fontSize:30,
      backgroundColor:"darkred",
      textAlign:"center",
      fontWeight:"bold",
      color:"white",
      position:"relative"
    },
    headr:{
      // paddingTop:-10,
      fontSize:25,
      // backgroundColor:"darkred",
      textAlign:"center",
      fontWeight:"bold",
      color:"black",
    }
})
