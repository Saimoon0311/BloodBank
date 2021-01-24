import React ,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ComponentProvider,
  View,
  FlatList,
  TextInput,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LoginManager,AccessToken } from "react-native-fbsdk";
import 'react-native-gesture-handler';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import database from "@react-native-firebase/database"


export default function List (){
  let databasee = ()=>{
     database().ref('/').child("list").on("child_added",function (data) {
     })
    }
    return(
        <View>
            <Text>List of Blood Donars</Text>
        
        </View>
    )
}
